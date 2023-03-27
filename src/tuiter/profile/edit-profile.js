import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {updateProfile} from "./profile-reducer";

const EditProfileComponent = () => {
  const profileInfo = useSelector(state => state.profile);
  let [name, setName] = useState("");
  let [bio, setBio] = useState("");
  let [location, setLocation] = useState("");
  let [dateOfBirth, setDateOfBirth] = useState("");
  let [website, setWebsite] = useState(profileInfo.website);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveProfile = () => {
    const updatedProfile = {
      name: name || profileInfo.name,
      bio: bio || profileInfo.bio,
      location: location || profileInfo.location,
      dateOfBirth: dateOfBirth || profileInfo.dateOfBirth,
      website: website,
    }
    dispatch(updateProfile(updatedProfile));
    navigate("/tuiter/profile/");
  }
  return(
      <div className="container border-start border-end ps-0 pe-0">
        <div className="row wd-height-70">
          <Link className="col-2 text-center mt-auto mb-auto text-dark" to="/tuiter/profile/"><i className="fa fa-x"/></Link>
          <div className="col-7 mt-auto mb-auto">
            <h4 className="mb-0">Edit profile</h4>
          </div>
          <button className="btn btn-dark rounded-pill float-end m-3 col-2" onClick={saveProfile}><span className="fw-bold">Save</span></button>
        </div>
        <div className="wd-profile-images-div">
          <div className="wd-gray-overlay">
            <div className="position-absolute top-50 start-50 translate-middle">
              <span className="fa-stack">
                <i className="fa fa-circle fa-stack-2x"/>
                <i className="fa fa-camera fa-stack-1x fa-inverse"/>
              </span>
            </div>
            <img className="w-100" src={`${profileInfo.bannerPicture}`}/>
          </div>
          <div className="wd-gray-overlay wd-profile-picture rounded-circle">
            <div className="position-absolute top-50 start-50 translate-middle">
              <span className="fa-stack">
                <i className="fa fa-circle fa-stack-2x"/>
                <i className="fa fa-camera fa-stack-1x fa-inverse"/>
              </span>
            </div>
            <img className="object-fit-cover w-100 rounded-circle" src={`${profileInfo.profilePicture}`}/>
          </div>
        </div>
        <div className="w-100 p-3">
          <form className="form-floating mb-4">
            <textarea defaultValue={profileInfo.name} id="nameInput"
                      className="form-control"
                      onChange={(event) => setName(event.target.value)}/>
            <label htmlFor="floatingInput">Name</label>
          </form>
          <form className="form-floating mb-4">
            <textarea defaultValue={profileInfo.bio} id="bioInput"
                      className="form-control h-auto"
                      onChange={(event) => setBio(event.target.value)}/>
            <label htmlFor="floatingInput">Bio</label>
          </form>
          <form className="form-floating mb-4">
            <textarea defaultValue={profileInfo.location}  id="locationInput"
                      className="form-control"
                      onChange={(event) => setLocation(event.target.value)}/>
            <label htmlFor="floatingInput">Location</label>
          </form>
          <form className="form-floating mb-4">
            <textarea defaultValue={profileInfo.website}  id="websiteInput"
                      className="form-control"
                      onChange={(event) => setWebsite(event.target.value)}/>
            <label htmlFor="floatingInput">Website</label>
          </form>
          <form className="form-floating">
            <input id="birthDate" className="form-control" type="date" defaultValue={profileInfo.dateOfBirth}
                   onChange={(event) => setDateOfBirth(event.target.value)}/>
            <label htmlFor="birthDate">Date of Birth</label>
          </form>
        </div>
      </div>
  );
};
export default EditProfileComponent;