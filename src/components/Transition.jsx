import React from 'react';
import './transition.scss';

import { motion as m } from 'framer-motion';

const Transition = () => {
   return (
      <>
         <m.div className="transition-wrapper-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: .5, delay: .5, ease: 'linear' }}
         ></m.div>
         <m.div className="transition-wrapper-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: .5, delay: .5, ease: 'linear' }}
         ></m.div>
      </>
   )
}

export default Transition