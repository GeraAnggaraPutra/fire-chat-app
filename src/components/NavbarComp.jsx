import React from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export const NavbarComp = () => {
  return (
    <div className="navbar">
      <span className="logo">Fire Chat</span>
      <div className="user">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <span>john</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}
