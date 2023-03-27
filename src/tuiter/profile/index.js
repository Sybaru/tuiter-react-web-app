import React from "react";
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./index.css"
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile)
  const birthDate = new Date(profile.dateOfBirth)
  birthDate.setDate(birthDate.getDate() + 1)
  return(
      <div className="container border-start border-end ps-0 pe-0">
        <div className="row wd-height-70">
          <Link className="col-2 text-center mt-auto mb-auto text-dark" to="/tuiter/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
          <div className="col-8 mt-auto mb-auto">
            <h4>{profile.name}</h4>
            <p className="mb-0">{profile.total_tuits} Tuits</p>
          </div>
        </div>
        <div className="wd-profile-images-div">
          <img className="w-100" src={`${profile.bannerPicture}`}/>
          <img className="wd-profile-picture rounded-circle" src={`${profile.profilePicture}`}/>
          <Link className="btn btn-outline-secondary rounded-pill float-end m-3" to="/tuiter/edit-profile/"><span className="fw-bold">Edit Profile</span></Link>
        </div>
        <div className="w-100 p-3">
          <div>
            <h4 className="fw-bolder mb-0">{profile.name}</h4>
            <p className="text-secondary fw-semibold">{profile.handle}</p>
          </div>
          <p className="">{profile.bio}</p>
          {profile.website ? <p>{profile.website}</p> : (<></>)}
          <div className="text-secondary">
            <span className="me-3"><span className="pe-2"><i className="fa fa-location-dot"/></span><p className="d-inline-block">{profile.location}</p></span>
            <span className="me-3"><span className="pe-2"><i className="fa fa-cake-candles"/></span><p className="d-inline-block">Born {birthDate.toLocaleDateString('en-us', {month:"long", day: "numeric", year:"numeric"})}</p></span>
            <span><span className="pe-2"><i className="fa fa-calendar"/></span><p className="d-inline-block">Joined {(new Date(profile.dateJoined)).toLocaleDateString('en-us', {month:"long", year:"numeric"})}</p></span>
          </div>
          <div>
            <span className="me-4"><span className="fw-bold">{profile.followingCount}</span><span className="text-secondary"> Following</span></span>
            <span><span className="fw-bold">{profile.followersCount}</span><span className="text-secondary"> Followers</span></span>
          </div>
        </div>
      </div>
  );
};
export default ProfileComponent;