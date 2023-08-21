import React, { useEffect, useState } from 'react';
import './startQuiz.scss';

///IMPORT COMPONENTS
import { motion as m } from "framer-motion";
import $ from 'jquery';

const StartQuiz = () => {

  let [loadingCountdown, setLoadingCountdown] = useState(3);
  let [answeredCountdown, setAnsweredCountdown] = useState(15);
  let [counterColor, setCounterColor] = useState('green');

  useEffect(() => {
    gameStartingCountdown();
  }, []);

  const gameStartingCountdown = () => {
    const gameStartingCountdownInterval = setInterval(() => {
      setLoadingCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(gameStartingCountdownInterval);
      quizAnsweredCountdown();
    }, loadingCountdown * 1000);

    return () => {
      clearInterval(gameStartingCountdownInterval);
    };
  };

  const quizAnsweredCountdown = () => {
    const quizCountdownInterval = setInterval(() => {
      setAnsweredCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(quizCountdownInterval);
    }, answeredCountdown * 1000);

    return () => {
      clearInterval(quizCountdownInterval);
    };
  }

  useEffect(() => {
    gameCounterProgress();
  });

  const gameCounterProgress = () => {
    if (answeredCountdown < 15 && answeredCountdown >= 10) {
      setCounterColor('green')
    } else if (answeredCountdown < 10 && answeredCountdown >= 5) {
      setCounterColor('yellow')
    } else if (answeredCountdown < 5) {
      setCounterColor('red');
    }
  }


  return (
    <div className="quiz-starting-wrapper">

      <m.div className="loading_wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingCountdown === 0 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <h2 className='loading_wrapper_text' >{loadingCountdown < 0 ? '' : loadingCountdown}</h2>
      </m.div>

      <m.div className="main-quiz-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingCountdown === 0 ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <div className="quiz-wrapper-inner">
          <div className="main-quiz-header">
            <div className="header-quiz-question">
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className="header-quiz-countdown" style={{ border: `2px solid ${counterColor}` }}>
              <span>{answeredCountdown}</span>
            </div>
          </div>

          <div className="answers-wrapper">
            <div className="single-answer-wrapper">
              <label htmlFor="a"></label>
              <input type="radio" name="answer" id="a" />
              <span>Answer a</span>
            </div>
            <div className="single-answer-wrapper">
              <label htmlFor="b"></label>
              <input type="radio" name="answer" id="b" />
              <span>Answer b</span>
            </div>
            <div className="single-answer-wrapper">
              <label htmlFor="c"></label>
              <input type="radio" name="answer" id="c" />
              <span>Answer c</span>
            </div>
            <div className="single-answer-wrapper">
              <label htmlFor="d"></label>
              <input type="radio" name="answer" id="d" />
              <span>Answer d</span>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  )
}

export default StartQuiz