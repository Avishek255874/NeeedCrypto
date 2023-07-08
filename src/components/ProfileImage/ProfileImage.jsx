import React from "react";
import imageAvi from "../../assets/Avater.jpg";

const ProfileImage = () => {
  return (
    <div className="d-flex justify-content-end align-items-center p-2">
      <i class="fa-solid fa-bell" />
      <div className="ps-3 pe-3">
        <img
          src={imageAvi}
          width="30x"
          height="30px"
          className=" rounded-circle"
        />
      </div>
     
    </div>
  );
};

export default ProfileImage;
