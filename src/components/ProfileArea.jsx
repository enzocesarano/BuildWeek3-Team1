import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { getProfile } from "../action";
import CardProfile from "./CardProfile";

const ProfileArea = ({myProfile}) => {

  

  return (
    <>
      <Profile myProfile={myProfile}/>
      <CardProfile />
    </>
  );
};

export default ProfileArea;
