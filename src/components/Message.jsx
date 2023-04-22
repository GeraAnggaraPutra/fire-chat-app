import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const [time, setTime] = useState("");

  useEffect(() => {
    const messageTime = new Date(
      message.date.seconds * 1000 + message.date.nanoseconds / 1000000
    );
    const messageTimeString = messageTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(messageTimeString);

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{time || "just now"}</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
