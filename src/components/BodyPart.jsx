import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Icon from '../assets/images/bodyPart.png';

const BodyPart = ({ item, setBodyPart }) => {
  return(
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    mx={2}
    my={1}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    }}
  >
    <Button variant="outlined" color='error' sx={{px:4, width:"200px"}}>
    <Typography fontSize="15px" color="black" textTransform="capitalize" sx={{color:'black'}}> {item}</Typography>
    </Button>
  </Stack>
  )
  
};

export default BodyPart;