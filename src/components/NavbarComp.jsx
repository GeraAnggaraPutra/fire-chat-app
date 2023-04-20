import React from 'react'

export const NavbarComp = () => {
  return (
    <div className="navbar">
      <span className="logo">Fire Chat</span>
      <div className="user">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <span>john</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
