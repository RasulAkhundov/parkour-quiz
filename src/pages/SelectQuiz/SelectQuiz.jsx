import React from 'react';
import './selectQuiz.scss';

///IMPORT COMPONENTS
import CategoriesJSON from '../../hooks/categories.json';
import { motion as m } from "framer-motion";
import { Link } from 'react-router-dom';

///import Images
import ArrowBack from '../../assets/left-arrow.png';
import FlagAZ from '../../assets/language/flag_az.png';
import FlagEN from '../../assets/language/flag_en.png';
import Vault1 from '../../assets/vault_1.png';
import Vault2 from '../../assets/vault_2.png';

const SelectQuiz = () => {

   console.log(CategoriesJSON);

   return (
      <div className='select-quiz-wrapper'>

         {/* NAVBAR START */}
         <m.div className="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
         >
            <div className="navbar_inner">

               <Link to="/">
                  <div className="go-back">
                     <img src={ArrowBack} alt="" />
                  </div>
               </Link>

               <nav>
                  <div className="language_popup">

                     <span className='active_language_wrapper'><img src={FlagAZ} alt="" /> AZ</span>

                     <ul>
                        <li><img src={FlagAZ} alt="" /> AZ</li>
                        <li><img src={FlagEN} alt="" /> EN</li>
                     </ul>
                  </div>
               </nav>
            </div>
         </m.div>
         {/* NAVBAR END */}

         {/* CATEGORİES START */}
         <div className="categories-wrapper">
            <div className="categories-inner">

               {
                  CategoriesJSON.map((c, i) => (
                     <m.div className="single-category-wrapper"
                        key={i}
                        initial={{ opacity: 0, y: '100px' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100px' }}
                        transition={{ duration: .5, delay: `.${c.animDelay}` }}
                     >
                        <h3>{c.name}</h3>
                        <img src={require(`../../assets/categories/${c.src}`)} />
                        <Link to={`/quiz/${c.name.toLowerCase()}`}><button type='button'>Start Quiz</button></Link>
                     </m.div>
                  ))
               }
            </div>
         </div>
         {/* CATEGORİES END */}
      </div>
   )
}

export default SelectQuiz