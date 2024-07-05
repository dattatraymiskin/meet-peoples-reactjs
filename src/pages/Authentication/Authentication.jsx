import { Card, Grid } from "@mui/material";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img
            className="h-full w-full"
            alt="img"
            src="https://media.istockphoto.com/id/1363337235/vector/crowded-scene-bustling-with-people.jpg?s=1024x1024&w=is&k=20&c=Cv7bo_ZQpelGr2qJVeWbs1egXJBh7Ywm2NmLFJLAteA="
          ></img>
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col item-center mb-5 space-y-1">
                <h1 className="log text-center">Meet Peoples</h1>
                <p className="text-center text-sm w-[70&]">
                  Connective Live: Sharing Stories: Your Scocial world, Your way
                </p>
              </div>

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
