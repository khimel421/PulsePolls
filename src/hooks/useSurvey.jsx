import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AuthContext } from '../authprovider/AuthProvider'
import usePublic from './usePublic'

export default function useSurvey() {
    const axiosPublic = usePublic()
    const {refetch, data, isLoading} = useQuery({
        queryKey:['survey'],
        queryFn:async() => {
            const res = await axiosPublic.get('/survey')
            return res.data
        }
    })
  return (
   [data,isLoading]
  )
}
