import React, { useContext, useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { useSelector } from 'react-redux';
import { selectBodyParts } from '../features/exercises/bodyPartsSlice';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <FaAngleLeft className='size-6 px-1 h-full hover:text-white' />  
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <FaAngleRight className='size-6 px-1 h-full  hover:text-white'/>
    </Typography>
  );
};

const HorizontalScrollbar = ({ exercises,setBodyPart, bodyPart,isBodyParts }) => {
  const data = useSelector(selectBodyParts);
  return(
    
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
    {
      isBodyParts ? (data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0"
      >
        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
      )
      )
      )
      :
       (exercises.map((item)=>
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 20px"
        
      >
        <ExerciseCard exercise = {item} /> 
      </Box>
      ) )
    }
  </ScrollMenu>
  )
};

export default HorizontalScrollbar;