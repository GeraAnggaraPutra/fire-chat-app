import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="user-chat">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <div className="user-chat-info">
          <span>Gera</span>
        </div>
      </div>
    </div>
  );
}
