import React from "react";
import imageAvi from "../../assets/Avater.jpg";
import "./ProfileImage.css"

const ProfileImage = () => {
  return (
    <div className="d-flex justify-content-end align-items-center ">
      <i className="fa-solid fa-bell ProfileImage" />
      <div className="ps-4 ProfileImage">
        <img
          src={imageAvi}
          width="30x"
          height="30px"
          className=" rounded-circle "
        />
      </div>
      
    </div>
  );
};

export default ProfileImage;
