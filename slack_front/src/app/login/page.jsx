"use client";
import { useEffect } from "react";
import "./index.css";

export default function Login() {
  function handleCallbackResponse(res) {
    console.log("encoded jwt id token: " ,res);
  }

  useEffect(() => {
    // global google
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "763363555551-jb0u8dhv3ufgt5sb4gcq9guq5v9nra0a.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    )
  }, []);
  return (
    <div className="login">
      <div className="main_card">
        <div className="glassEffect">
          <div className="card">
            <div className="title">welcome to slack</div>
            <div className="email">
              <input type="text" placeholder="user name" />
            </div>
            <div className="password">
              <input type="password" placeholder="password" />
            </div>
            <div className="login_btn">
              <button>sign in</button>
            </div>
            <div className="login_alterntive">
              <div className="signInDiv"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
