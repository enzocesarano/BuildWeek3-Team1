import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { getProfile } from "../action";
import ActivityProfile from "./ActivityProfile";
import ExperienceCard from "./ExperienceCard";

const ProfileArea = ({myProfile}) => {

  

  return (
    <>
      <Profile myProfile={myProfile}/>
      <CardProfile />
      <ActivityProfile/>
      <ExperienceCard/>
    </>
  );
};

export default ProfileArea;
