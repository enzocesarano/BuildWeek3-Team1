import Profile from "./Profile";
import ActivityProfile from "./ActivityProfile";
import ExperienceCard from "./ExperienceCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getExperience } from "../action";
import { useDispatch } from "react-redux";

const ProfileArea = ({ myProfile }) => {
  const location = useLocation();
  const idLocation = location.pathname.split("/").pop();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperience(idLocation));
  }, [idLocation]);

  return (
    <>
      <Profile myProfile={myProfile} />
      <ActivityProfile/>
      <ExperienceCard />
    </>
  );
};

export default ProfileArea;
