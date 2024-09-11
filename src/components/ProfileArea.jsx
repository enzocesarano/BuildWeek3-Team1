
import Profile from "./Profile";
import ActivityProfile from "./ActivityProfile";
import ExperienceCard from "./ExperienceCard";

const ProfileArea = ({myProfile}) => {

  

  return (
    <>
      <Profile myProfile={myProfile}/>
      <ActivityProfile/>
      <ExperienceCard/>
    </>
  );
};

export default ProfileArea;
