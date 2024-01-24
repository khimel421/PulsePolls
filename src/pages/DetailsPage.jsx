import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePublic from "../hooks/usePublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../authprovider/AuthProvider";
import PieChartBox from "../components/PieChart";
import { AiOutlineLike } from "react-icons/ai";
import { GrDislike } from "react-icons/gr";


export default function DetailsPage() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  // const [data,setData] = useState([])
  const axiosPublic = usePublic();
  const [displayChart, setDisplayChart] = useState(false);

  const {
    data: surveyDetails = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["surveryDetail"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/details/${id}`);
      return res.data;
    },
  });

  const { data: User = {}, isLoading: userIdLoading } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (user?.email === surveyDetails?.userEmail) {
    return <p> You cant vote</p>;
  }

  const userId = User?._id;

  // console.log(surveyDetails?.votes?.includes(userId))

  // console.log(id)
  console.log(surveyDetails);
  // console.log(user.email)
  // console.log(userId)

  const handleVote = (vote) => {
    axiosPublic.put(`/vote/${id}`, { vote, userId }).then((res) => {
      console.log(res);
      refetch();
    });
  };
  return (
    <div className="w-full lg:w-[75%] mx-auto border mt-10 p-10 flex flex-col  gap-3 items-center">
      <h1 className="text-center text-2xl font-bold">
        Details about this survey
      </h1>
      <div className="">
        <div className=" space-y-2">
          <h1>Title: {surveyDetails.title}</h1>
          <p>Description: {surveyDetails.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {userIdLoading ? (
            <p>Loading .....</p>
          ) : surveyDetails?.votes?.includes(userId) ? (
            <div>
              <PieChartBox
                yesVote={surveyDetails.yesVote}
                noVote={surveyDetails.noVote}
              ></PieChartBox>
              <section className="flex">
                <div>
                  <button className="btn"><AiOutlineLike className="text-red" /> Like</button>
                </div>
                
                <div>
                  <button className="btn"><GrDislike /> Dislike</button>
                </div>
                
                

              </section>
            </div>
          ) : (
            <section className={`space-x-2 `}>
              <p>Give your vote</p>
              <button onClick={() => handleVote("yes")} className="btn">
                Yes
              </button>
              <button onClick={() => handleVote("no")} className="btn">
                No
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
