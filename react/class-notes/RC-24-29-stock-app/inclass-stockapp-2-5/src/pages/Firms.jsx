import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { fetchFail, fetchStart, firmsSuccess } from '../features/stockSlice';
import axios from "axios";

const Firms = () => {
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  const getFirms = async () => {
    dispatch(fetchStart())
    try {
      const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`,{
        headers:{
          Authorization: `Token ${token}`
          // Authorization: `Bearer ${accesstoken}` //* jwt için
        }
      })
      console.log(data)
      dispatch(firmsSuccess(data.data))
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    }
  }

  useEffect(() => {
    getFirms()
  }, [])

  return (
    <div>Firms</div>
  )
}

export default Firms