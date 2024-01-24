import React, { useContext, useEffect, useState } from 'react';
import usePublic from '../hooks/usePublic';
import { AuthContext } from '../authprovider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import SurveyCard from '../components/surveyCard';
import PieChart from '../components/PieChart';
import PieChartBox from '../components/PieChart';



const Mysurvey = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = usePublic()
    const userEmail = user?.email;
   
    const { isLoading, error, data: mySurvey = [] } = useQuery({
        queryKey: ['survey'],
        queryFn:  async() =>{
            const result = await axiosPublic.get(`/survey/${userEmail}`)
                return result.data
        }
        
      })

    // console.log(mySurvey)
    
    // if(isLoading){
    //     return <div className="loading loading-spinner loading-lg"></div>
        
    // }

    if(isLoading){
        return <p>Loading....</p>
    }

    
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-10">My surveys</h1>
            <div className='flex flex-col gap-10'>
                {
                   mySurvey.map((item,idx) => {
                    return <SurveyCard  key={idx} surveyData={item} user={user}></SurveyCard>
                   })
                }
                
            </div>
        </div>
    );
};

export default Mysurvey;