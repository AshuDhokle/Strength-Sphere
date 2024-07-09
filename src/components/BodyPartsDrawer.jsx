import React,{useState} from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { Box,ListItem,ListItemText,Drawer,Button,List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectBodyParts } from '../features/exercises/bodyPartsSlice';
import BodyPart from './BodyPart';
import { GiHamburgerMenu } from "react-icons/gi";

const BodyPartDrawer = ({ exercises,setBodyPart, bodyPart,isBodyParts,isSmallScreen }) => {
  const data = useSelector(selectBodyParts);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return(
    <div className='flex flex-row items-center justify-center'>
      <Button variant='outlined' onClick={toggleDrawer(true)} sx={{color:'black', fontFamily:'fantasy', fontSize:'20px',outline:2,outlineColor:'black',display:'flex',alignItems:'center',justifyItems:'center'}}> <GiHamburgerMenu className='m-2' /> {isSmallScreen? null :'Explore Body Parts'}</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
      <Typography sx={{mb:1,p:1,fontSize:18,outline:1,outlineColor:'#FF0000',color:'white',backgroundColor:'#45474B',display:'flex',alignItems:'center',justifyContent:'center'}}>Body Parts</Typography>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {
        data.map((text) => (
          <ListItem key={text} disablePadding>
            <BodyPart item={text} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
          </ListItem>
        ))}
      </List>
    </Box>
    </Drawer>
    </div>
  )
};

export default BodyPartDrawer;