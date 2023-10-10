import React from 'react'
import profilePic from "../../assets/profilePic.png"
import "./profileComp.css"

const ProfileComp = () => {
  return (
    <div className='levelOne'>
        <div className='levelTwo'>
            <img className='profile' src={profilePic} alt="profile" />
        </div>
        <div className='levelTwo'>
            <div className='levelThree'>
                <h2>KK Vinay</h2>
                <h2>Vinay090@gmail.com</h2>
                <h1>vinay060</h1>
            </div>
            <div className='levelThree proWid'>
                <div>
                    <p>Horror</p>
                </div>
                <div>
                    <p>Thriller</p>
                </div>
                <div>
                    <p>Action</p>
                </div>
                <div>
                    <p>Fiction</p>
                </div>
                <div>
                    <p>Fiction</p>
                </div>
                <div>
                    <p>Fiction</p>
                </div>
                <div>
                    <p>Fiction</p>
                </div>
                <div>
                    <p>Fiction</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileComp