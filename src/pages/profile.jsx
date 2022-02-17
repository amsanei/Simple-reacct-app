import React from "react";
import {useNavigate} from "react-router-dom"

function Profile() {
    let navigate = useNavigate();
  return (<div>this is Profile page <button onClick={() => navigate("/about")}>About page</button> </div>);
}

export default Profile;
