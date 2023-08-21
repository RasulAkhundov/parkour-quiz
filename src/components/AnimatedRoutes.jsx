import React from 'react';
import Home from '../pages/Home/Home';
import SelectQuiz from '../pages/SelectQuiz/SelectQuiz';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StartQuiz from '../pages/StartQuiz/StartQuiz';

const AnimatedRoutes = () => {

   const location = useLocation();

   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
            <Route index path='/' element={<Home />} exact />
            <Route path='/select-quiz' element={<SelectQuiz />} exact />
            <Route path={`/quiz/:name`} element={<StartQuiz />} exact />
            <Route path='*'
               element={<Navigate to="/" replace />}
            />
         </Routes>
      </AnimatePresence>
   )
}

export default AnimatedRoutes