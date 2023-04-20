import React from 'react'

export const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <div className="user-chat-info">
          <span>Gera</span>
          <p>hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <div className="user-chat-info">
          <span>Anggara</span>
          <p>hello world</p>
        </div>
      </div>
      <div className="user-chat">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <div className="user-chat-info">
          <span>Putra</span>
          <p>hello hai</p>
        </div>
      </div>
    </div>
  );
}
