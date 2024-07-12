import React from "react";
import "../Styles/login.css";
function Login() {
  return (
    <div>
      <div class="login-container">
        <h2>Login</h2>
        <form action="#">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div style={{ marginTop: "10px" }}>
          <a href="/register">Dont Have Account Register Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
