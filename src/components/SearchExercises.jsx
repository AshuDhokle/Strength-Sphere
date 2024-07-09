import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography,useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { fetchData, options } from '../utils/fetchData';
import BodyPartDrawer from './BodyPartsDrawer';
import {useDispatch} from 'react-redux'
import {addBodyParts} from '../features/exercises/bodyPartsSlice'
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
      dispatch(
        addBodyParts(['all', ...bodyPartsData])
      )
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      //console.log(exercisesData);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" bgcolor={'#7CFC00'}>
      
      <Typography fontWeight={600} sx={{ fontSize: { lg: '35px', xs: '30px' } }} mb="20px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      
      <Stack direction={'row'} gap={'10px'} position="relative" mb="10px">
      <BodyPartDrawer setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts isSmallScreen/>
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '2px' }, width: { lg: '1170px', xs: '260px' }, backgroundColor: '#fff', borderRadius: '5px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          autoComplete='off'
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      
    </Stack>
  );
};

export default SearchExercises;