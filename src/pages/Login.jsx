import React from "react";

export const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Fire Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" name="" id="" placeholder="input email" />
          <input type="password" name="" id="" placeholder="input password" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};
