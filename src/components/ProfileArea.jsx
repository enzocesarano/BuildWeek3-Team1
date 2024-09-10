import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { getProfile } from "../action";
import CardProfile from "./CardProfile";

const ProfileArea = () => {
  const dispatch = useDispatch();

  const profileSelect = useSelector((store) => store.profileSelect.profileSelect)
  
  useEffect(() => {
    dispatch(getProfile(profileSelect,''));
  }, [profileSelect]);


  return (
    <>
      <Profile />
      <CardProfile />
    </>
  );
};

export default ProfileArea;
