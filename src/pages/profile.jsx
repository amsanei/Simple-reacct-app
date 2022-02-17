import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      {username
        ? "this is Profile page for " + username + " "
        : "this is the profile page"}
      <button onClick={() => navigate("/about")}>About page</button>{" "}
    </div>
  );
}

export default Profile;
