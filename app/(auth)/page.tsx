"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import LoginForm from '$/components/LoginForm'

const Login = () => {
  const texts = ["Welcome to Easy, first visual learning", "Learning don't have to be hard", "We simplify learning for you", ""]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" w-full flex flex-col space-y-4 mt-28 items-center h-screen ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#633f28]"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <h1 className='text-2xl text-[#e0c0ac]'>Please SignIn to access Easy</h1>
      <LoginForm />
    </div>
  )
}

export default Login