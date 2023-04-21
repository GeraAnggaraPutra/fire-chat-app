import React, { useContext } from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

export const NavbarComp = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <span className="logo">Fire Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{ currentUser.displayName }</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}
