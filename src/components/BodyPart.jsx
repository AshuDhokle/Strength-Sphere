import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/images/bodyPart.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return(
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    m={2}
    sx={{  borderTop: bodyPart === item ? '4px solid #FF2625' : '', borderBottom:"10px solid #00224D", background: 'aliceblue', width: '200px', height: '200px', cursor: 'pointer', gap: '47px', borderBottomLeftRadius: '20px', boxShadow:10 } }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '70px', height: '70px' }} className="" />
    <Typography fontSize="15px" fontWeight="bold" fontFamily="" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
};

export default BodyPart;