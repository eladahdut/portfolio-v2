'use client';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center'>
        <motion.h1
          className='text-4xl font-bold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
      </div>
    </div>
  );
}
