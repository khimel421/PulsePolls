import React from "react";
import PieChartBox from "./PieChart";
import { Link } from "react-router-dom";

export default function SurveyCard({ surveyData, user }) {
  const {_id, title, description, categoryOption, userEmail, yesVote, noVote } =
    surveyData;

  return (
    <div className="flex items-center">
      <div>
        <p className="text-xl">{title}</p>
        <p className="text-lg">{description}</p>
        <p className="bg-[#44a4fe] mb-4">Yes vote : {yesVote}</p>
        <p className="bg-[#00c49f]">No vote : {noVote}</p>
        <div>
          <Link to={`updateSurvey/${_id}`}><button className="btn btn-neutral">Update</button></Link>
          
        </div>
      </div>
      <div>
        {/* <Example></Example> */}
        <PieChartBox yesVote={yesVote} noVote={noVote} ></PieChartBox>
      </div>
    </div>
  );
}
