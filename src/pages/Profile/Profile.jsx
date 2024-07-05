import { Image } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
//   const { id } = useParams();
  return (
    <div className="py-10 w-[70%]">
        hii
      <div className="rounded-md">
        <div className="h-[15rem]">
             
          <Image
            className="w-full h-full rounded-t-md"
            src="/images/nature.jpg"
            alt="picture"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Profile;
