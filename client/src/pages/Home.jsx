import React from 'react'
import NavBar from '../components/NavBar'
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';



const Home = () => {
  return (
    <div className='min-h-screen bg-[#f3f3f3]  flex flex-col'>

      <NavBar/>

      <div className='flex-1 '></div>
     
    </div>
  )
}

export default Home
