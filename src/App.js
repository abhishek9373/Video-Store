import React from "react";
import { Button } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail} from './components/Index'
import { ClassNames } from "@emotion/react";


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000"}} className='h-screen'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/video/:id" element={<VideoDetail/>}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
