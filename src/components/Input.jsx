import React, { useContext, useState } from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

export const Input = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const { currentUser } = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Img} alt="" />
        <input type="file" style={{ display: 'none' }} id='file' />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button onC>Send</button>
      </div>
    </div>
  )
}
