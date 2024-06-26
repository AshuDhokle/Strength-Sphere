import React from 'react';
import { Typography, Stack, Button, useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BodyPartImage from '../assets/images/body-part.png';
import TargetImage from '../assets/images/targetMuscle.png';
import EquipmentImage from '../assets/images/equipment.png';
import { useSelector } from 'react-redux';
import { selectExerciseDetails } from '../features/exercises/exerciseDetailDataSlice';

const Details = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const exerciseDetails = useSelector(selectExerciseDetails);
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack direction={isSmallScreen ? 'column' : 'row'} gap={isSmallScreen ? '20px' : '40px'} alignItems="center">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image mt-10" style={{ borderRadius: '8px', width: '300px', height: '300px' }} />
      <Stack gap="20px">
        {name && (
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', borderRadius: '4px', backgroundColor: '#E6E6E6', padding: '8px' }}>
            {name.toUpperCase()}
          </Typography>
        )}
        <Typography variant="body1" color="textPrimary" fontFamily="cursive" p={2}>
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        <Stack direction="row" gap="20px" alignItems="center">
          {extraDetail.map((item, idx) => (
            <Box key={idx} sx={{display:'flex',flexDirection:'column', alignItems:'center' , justifyContent:'center'}} >
            <Button sx={{ borderRadius: '50%', width: '80px', height: '80px', backgroundColor: '#F3F3F3' }}>
              <img src={item.icon} alt={item.name} style={{ width: '40px', height: '40px' }} />
            </Button>
            <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Details;
