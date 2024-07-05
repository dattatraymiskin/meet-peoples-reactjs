import React from "react";
import { Avatar, Card, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from "./StoryCircle";
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from "../Post/PostCard";

const story = [11, 1, 1, 1, 1, 1];
const posts = [11, 1, 1, 1, 1, 1];

const MiddlelPart = () => {
  const handleOpenCreatePostModal = () => {
    console.log("handle open");
  };

  return (
    <div className="p-5"> {/* Reduced padding */}
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
          >
            <AddIcon sx={{ fontSize: "3rem" }}></AddIcon>
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item, index) => <StoryCircle key={index} />)}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar></Avatar>
          <input
            readOnly
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          ></input>
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
              <span>media</span>
            </IconButton>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
              <span>video</span>
            </IconButton>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
              <span>article</span>
            </IconButton>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {posts.map((item, index) => <PostCard key={index} />)}
      </div>
    </div>
  );
};

export default MiddlelPart;
