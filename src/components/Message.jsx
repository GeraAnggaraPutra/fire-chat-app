import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [time, setTime] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  useEffect(() => {
    const convertNanosecondsToTime = (nanoseconds) => {
      const milliseconds = nanoseconds / 1000000; // Ubah nanodetik menjadi milidetik
      const date = new Date(milliseconds); // Buat objek Date dari milidetik

      const hours = date.getHours().toString().padStart(2, "0"); // Ambil jam dan tambahkan angka 0 di depannya jika hanya satu digit
      const minutes = date.getMinutes().toString().padStart(2, "0"); // Ambil menit dan tambahkan angka 0 di depannya jika hanya satu digit
 
      return `${hours}:${minutes}`; // Gabungkan nilai jam, menit, detik, dan milidetik menjadi satu string
    };

    const updateCurrentTime = () => {
          const nanoseconds = message.date.nanoseconds
 * 1000000; // Ambil waktu saat ini dalam nanodetik
      const timeFormatted = convertNanosecondsToTime(nanoseconds);
      setTime(timeFormatted); // Set state time dengan nilai waktu yang sudah diubah formatnya
    };
    updateCurrentTime(); // Panggil fungsi updateCurrentTime untuk mengisi state time dengan waktu saat ini

    const interval = setInterval(updateCurrentTime, 60000); // Panggil fungsi updateCurrentTime setiap 1 menit (60000 milidetik)

    return () => clearInterval(interval); // Cleanup function untuk membersihkan interval saat komponen di-unmount
  }, []); // Parameter kedua useEffect diisi dengan array kosong agar useEffect hanya dijalankan saat komponen dipasang pada DOM

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
        <span>{time}</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
