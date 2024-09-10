import { useDispatch } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { getProfile } from "../action";
import CardProfile from "./CardProfile";
import arrayAllProfiles from "../reducers/getAllProfiles";

const ProfileArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile("me",''));
  }, []);

  return (
    <>
      <Profile />
      <CardProfile />
    </>
  );
};

export default ProfileArea;
