import React from 'react'
import { FaRobot } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';





const Auth = () => {
    const handleGoogleSignIn = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            let User = response.user;
            const name = User.displayName;
            const email = User.email;
            const result = await axios.post(ServerUrl+"/api/auth/google",{name , email},{withCredentials: true})
            console.log(result.data)


           
        } catch (error) {
            console.error(error)
        }
    }




  return (
    <div className='w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20' >
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        
        className='w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200'>
            <div className='flex items-center justify-center gap-3 mb-6 '>
                <div className=' bg-black text-white p-2 rounded-lg'>
                    <FaRobot  size={18} />

                </div>
                <h2 className='font-semibold text-lg'>Inteview.IQ.AI</h2>
            </div>
            <h2 className='text-2xl md:text-3xl font-semibold text-center loading-snug mb-4'>
                Continue with
                <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full inline-flex items-center gap-2'> <IoSparklesSharp size={16} />AI Smart Interview</span>
            </h2>
            <p className='text-gray-500 text-center text-sm md:text-base loading-relaxed mb-8'>
                Join our community of professionals and enhance your interview skills with AI-powered insights.
            </p>
            <motion.button 
            onClick={(e) => {
                e.preventDefault();
                handleGoogleSignIn();
            }}
                whileHover={{opacity: 0.9, scale: 1.05 }}
                whileTap={{ opacity:1, scale: 0.98 }}
           
            className='w-full py-3 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2  flex items-center justify-center gap-2'
            >
              <FcGoogle size={20}/> Continue with Google
            </motion.button>

        </motion.div>
    
        
      
    </div>
  )
}

export default Auth
