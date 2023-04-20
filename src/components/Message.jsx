import React from 'react'

export const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img src="http://placeimg.com/640/480/people" alt="" />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        <img src="http://placeimg.com/640/480/people" alt="" />
      </div>
    </div>
  );
}
