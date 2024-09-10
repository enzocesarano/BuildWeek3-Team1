import { useDispatch } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { getProfile } from "../action";
import ActivityProfile from "./ActivityProfile";
import ExperienceCard from "./ExperienceCard";

const ProfileArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile("me"));
  }, []);

  return (
    <>
      <Profile />
      <ActivityProfile/>
      <ExperienceCard/>
    </>
  );
};

export default ProfileArea;
