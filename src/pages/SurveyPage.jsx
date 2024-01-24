import React from 'react'
import useSurvey from '../hooks/useSurvey'
import Navbar from '../main-components/Navbar'
import { Link } from 'react-router-dom'

export default function SurveyPage() {
    const [allSurvey,isLoading] = useSurvey()
    console.log(allSurvey)
    if(isLoading){
      return <p>Loading ....</p>
    }
  return (
    <div>
      <Navbar></Navbar>
      <p>All Surveys</p>
      {/* <div className='w-[75%] mx-auto'>
        {
          allSurvey.map((item,idx) => {
            return <p key={idx}>Hello</p>
          })
        }
      </div> */}
            <div className="flex md:grid md:grid-cols-2  lg:grid-cols-3  overflow-x-scroll  gap-4 pt-10">
        {allSurvey.map((item, idx) => {
          return (
            
              <div key={idx} className="card w-96 bg-base-100 shadow-xl mx-auto group flex min-w-[70vw] flex-1 cursor-pointer flex-col gap-3 border-y border-border10 py-3 xs:min-w-[55vw] xssm:min-w-[35vw] sm:min-w-[28vw] md:min-w-0">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/details/${item._id}`}> <button  className="btn btn-primary">Details</button></Link>
                    
                  </div>
                </div>
              </div>
            
          );
        })}
      </div>
    </div>
  )
}
