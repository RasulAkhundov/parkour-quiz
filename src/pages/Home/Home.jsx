import React from 'react';
import './home.scss';

///IMPORT COMPONENTS
import { motion as m } from "framer-motion";
import { Link } from 'react-router-dom';

///import Images
import Logo from '../../assets/logo/logo.png';
import FlagAZ from '../../assets/language/flag_az.png';
import FlagEN from '../../assets/language/flag_en.png';
import Vault1 from '../../assets/vault_1.png';
import Vault2 from '../../assets/vault_2.png';

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* NAVBAR START */}
      <m.div className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <div className="navbar_inner">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

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

      {/* START QUIZ WRAPPER START */}
      <m.div className="start_quiz_wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <img src={Vault1} alt="" />
        <img src={Vault2} alt="" />

        <h2>Welcome to PKQuiz</h2>
        <Link to="/select-quiz"><button type='button'>SELECT QUIZ</button></Link>
      </m.div>

      {/* START QUIZ WRAPPER END */}
    </div>
  )
}

export default Home