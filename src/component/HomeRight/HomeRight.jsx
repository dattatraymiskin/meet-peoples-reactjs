import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";

const userCard = [1,1,2,1,1];
const HomeRight = () => {
  return (
    <div className='pr-5'> {/* Ensure padding is consistent */}
      <SearchUser />

      <Card className="pr-5 ml-1"> 
      <div className='flex justify-between py-5 items-center'>
        <p className='font-semibold opacity-70'>Suggestions for you</p>
        <p className='text-xs font-semibold opacity-95'>View All</p>
      </div>
      <div className="">
      {userCard.map((item, index) => (
            <div key={index}>
              {<PopularUserCard/>}
            </div>
          ))}
         {/* {userCard.map(item => <PopularUserCard/>)} */}
      </div>
        
      </Card>
     
    </div>
  );
}

export default HomeRight;
