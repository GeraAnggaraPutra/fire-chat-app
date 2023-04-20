import React from 'react'
import AddAvatar from '../img/addAvatar.png';
export const Register = () => {
  return (
      <div className='form-container'>
          <div className='form-wrapper'>
              <span className='logo'>Fire Chat</span>
              <span className='title'>Register</span>
              <form>
                  <input type="text" name="" id="" placeholder='input name' />
                  <input type="email" name="" id="" placeholder='input email' />
                  <input type="password" name="" id="" placeholder='input password' />
                  <input type="file" name="" id="file" style={{display: 'none'}}/>
                  <label htmlFor="file">
                      <img src={AddAvatar} alt="" />
                      <span>Add an avatar</span>
                  </label>
                  <button>Sign Up</button>
              </form>
              <p>You do have an account? Login</p>
          </div>
    </div>
  )
}
