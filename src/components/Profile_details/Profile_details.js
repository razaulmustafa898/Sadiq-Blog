import React from "react";
import Profile from "./Profile";

const Profile_details = ({ date, author_avatar, author_name, time }) => {
  return (
    <>
      <Profile
        dateProfile={date}
        nameProfile={author_name}
        timeProfile={time}
        imageProfile={author_avatar}
      />
    </>
  );
};

export default Profile_details;
