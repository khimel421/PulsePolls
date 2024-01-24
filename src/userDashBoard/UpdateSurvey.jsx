import React, { useContext,useState } from "react";
import usePublic from "../hooks/usePublic";
import { AuthContext } from "../authprovider/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateSurvey() {
  const {id} = useParams()
  console.log(id)
  const axiosPublic = usePublic();
  const { user } = useContext(AuthContext);

  console.log("current user", user);

  const resetFormData = {
    title: "",
    description: "",
    yesNoOption: "",
    categoryOption: "",
    userEmail: user?.email,
    yesVote: 0,
    noVote: 0,
    like: 0,
    dislike: 0,
    votes: [],
  };
  // State to hold form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    yesNoOption: "",
    categoryOption: "",
    userEmail: user?.email,
    yesVote: 0,
    noVote: 0,
    like: 0,
    dislike: 0,
    votes: [],
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here
    console.log("Form submitted with data:", formData);
    axiosPublic.patch(`/update/${id}`, formData).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire("Your survey has been updated");
        setFormData(resetFormData);
      }
    });
  };
  return (
    <div className="border w-full lg:w-[75%] mx-auto shadow-2xl p-4 rounded-md">
      <h1 className="text-center text-4xl font-bold mb-10">Update survey</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-4 justify-center w-full lg:w-[50%] mx-auto"
      >
        {/* Title input */}
        <label className="flex flex-col gap-2">
          Title:
          <input
            className="w-[250px] border"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>

        {/* Short description input */}
        <label className="flex flex-col">
          Short Description:
          <textarea
            className="w-[250px] border"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>

        {/* Yes/No options */}
        <label className="flex flex-col mb-4">
          Choose Yes or No:
          <select
            className="w-[250px] border"
            name="yesNoOption"
            value={formData.yesNoOption}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            <option value="yes or no">Yes or No</option>
          </select>
        </label>

        {/* Category options */}
        <label className="flex flex-col mb-4">
          Choose a Category:
          <select
            className="w-[250px] border"
            name="categoryOption"
            value={formData.categoryOption}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="Consumer Behavior">Consumer Behavior</option>
            <option value="Helath and Wellness">Helath and Wellness</option>
            <option value="Education">Education</option>
            <option value="Travel and Tourism">Travel and Tourism</option>
            <option value="Political Opinion">Political Opinion</option>
          </select>
        </label>

        {/* Submit button */}
        <div>
          <button type="submit " className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
