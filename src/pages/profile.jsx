import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      this is Profile page for {username}{" "}
      <button onClick={() => navigate("/about")}>About page</button>{" "}
    </div>
  );
}

export default Profile;
