import React from "react";
import ProfileUserDetails from "../../components/sidebar/profileComponents/ProfileUserDetails";
import ReUserPostPart from "../../components/sidebar/profileComponents/ReUserPostPart";

const Profile = () => {
  return (
    <div className="px-20">
      <div className="">
        <ProfileUserDetails />
      </div>
      <div>
        <ReUserPostPart/>
      </div>
    </div>
  );
};

export default Profile;
