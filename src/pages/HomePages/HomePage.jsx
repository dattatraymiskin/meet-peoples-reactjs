import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CreateReelsForm from "../../component/Reels/CreateReelsForm";
import Reels from "../../component/Reels/Reels";
import Profile from "../Profile/Profile";
import HomeRight from "../../component/HomeRight/HomeRight";
import Sidebar from "../../component/Sidebar/Sidebar";
import MiddlelPart from "../../component/MiddlePart/MiddlelPart";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className="px-4">
      <Grid container spacing={3}> {/* Adjust spacing */}
        <Grid item xs={12} lg={2.5}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={location.pathname === "/" ? 6 : 6}  
          className="flex justify-center"
        >
          <Routes>
            <Route path="/" element={<MiddlelPart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        <Grid item xs={12} lg={3.5} className="relative">
          <div className="sticky top-0 w-full
           ml-3" >
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
