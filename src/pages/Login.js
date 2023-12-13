import React, { Component } from "react";
import { useGoogleLogin } from "react-google-login";
import logo from "../images/logo.png";
import logoEdited from "../images/logo-edited.png";
import StatisticItem from "../components/StatisticItem";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useHistory } from "react-router-dom";

function Login() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const { user, setUser } = useGlobalContext();

  const onSuccess = (res) => {
    const profile = res.profileObj;
    sessionStorage.setItem("user", JSON.stringify(profile));
    setUser(profile);
  };
  const onFailure = (res) => {
    console.error(res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  const history = useHistory();

  function handleLaunchApp() {
    history.push("/");
  }

  return (
    <div>
      <div className="form-container">
        <div className="left-col">
          <div>Explore and Earn</div>
          <div>
            <span className="on-label">on</span>
            <img className="logo-edited" src={logoEdited} alt="logo" />
          </div>
          <div className="signup-container">
            <button className="sign-up-btn">Sign up</button>
          </div>

          <div className="action-container">
            <button
              className="action-btn login-btn"
              onClick={signIn}
              disabled={user}
            >
              {user
                ? user.name
                  ? `Welcome ${user.name}`
                  : "Loading"
                : "Login"}
            </button>
            <button className="action-btn launch-btn" onClick={handleLaunchApp}>
              Launch App
            </button>
          </div>
        </div>
        <div className="right-col">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>

      <div className="statistics-container">
        <StatisticItem value={"$1.80B"} label="30 Day Volume"></StatisticItem>
        <StatisticItem
          value={"$0.84B"}
          label="Managed on testX.fi"
        ></StatisticItem>
        <StatisticItem
          value={"$21.43M"}
          label="Total Collateral Automated"
        ></StatisticItem>
      </div>
    </div>
  );
}

export default Login;
