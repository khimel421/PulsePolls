import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdPublishedWithChanges } from "react-icons/md";
import { MdOutlineUnpublished } from "react-icons/md";
import usePublic from "../hooks/usePublic";
import Swal from "sweetalert2";


const SurveyRequests = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = usePublic();
  const feedback = useRef(null)
  const [comment,setComment] = useState("")


  const {
    data: request = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request");
      return res.data;
    },
  });

  const handlePublish = (item) => {
    console.log(item);
    axiosPublic.post("/survey", item).then((res) => {
      console.log(res.data)
      if (res.data.acknowledged) {
        Swal.fire("Your survey has been added for publish");
        axiosPublic.patch(`/publish/${item._id}`)
          .then((res) => console.log(res.data));
        refetch();
      }
    });
  };

  const handleUnpublish = (item) => {
    console.log("comment",comment)
    axiosPublic.put(`/unpublish/${item._id}`, comment)
      .then(res => console.log(res.data))
      refetch()
  
  }

  const handleChange = e => {
    setComment((e.target.value))
    console.log(comment)
  }


 
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Description</th>
              <th>Publish</th>
              <th>Unpublish</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {request.map((item, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{item.userEmail}</td>
                  <td>{item.description}</td>
                  <td>
                    {
                      item?.status === "publish" ? "published" :  <button onClick={() => handlePublish(item)} className="btn">
                      <MdPublishedWithChanges />
                    </button>
                    }
                   
                  </td>
                  <td>
                    {
                      item?.status === "unpublish" ? "Unpublished" : <div><button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <MdOutlineUnpublished />
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Give feedback</h3>
                        {/* <p className="py-4">
                          Press ESC key or click the button below to close
                        </p> */}
                         <form method="dialog" onSubmit={(e) => {handleUnpublish(item)}}>
                           {/* if there is a button in form, it will close the modal */}
                             <input  onChange={(e) => handleChange(e)}  type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            <button  className="btn">Submit</button>
                          </form>
                        
                        <div className="modal-action">
                          <form method="dialog">
                          <button  className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog></div>
                    }
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyRequests;
