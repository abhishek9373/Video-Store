import React,{useState,useEffect} from 'react'
import {Box, Stack, Typography } from '@mui/material'
import {Sidebar,Videos} from './Index'
import { Fetchfromapi } from '../utils/Fetchfromapi'

function Feed() {
  const [videos,setvideos] = useState([]);
  const [selectedCategory,setselectedCategory] = useState('New');

  useEffect(()=>{
    Fetchfromapi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setvideos(data.items)})
  },[selectedCategory])

  return (
    <Stack sx= {{flexDirection:{sx:'column',md:'row'}}} >
      <Box sx={{height:{sx:'auto',md:'92vh',borderRight:'1px solid #3d3d3d',px:{sx:0,md:2 }}}}>
      <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>

      <Typography className='copyrigth' variant='body2' sx = {{mt:1.5, color:'#fff'}}>Copyright Abhi's Creation 2022.</Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{
          color:'white'
        }}>
          {selectedCategory}<span style={{color:'#F31503'}}>videos</span>
        </Typography>
        <Videos  videos={videos}/>
      </Box>
    </Stack>

  )
}

export default Feed
