import React from 'react'
import profilePic from "../../assets/profilePic.png"
import "./profileComp.css"

const ProfileComp = () => {

    const userData = localStorage.getItem("formData");
    const parsedUserData = JSON.parse(userData);

    const NameOfUser = parsedUserData.name;
    const EmailOfUser = parsedUserData.email;
    const UsernameOfUser = parsedUserData.userName;

    const userGenres = localStorage.getItem("favoriteGenres")
    const parsedGenres = JSON.parse(userGenres)
    console.log(parsedGenres);
  return (
    <div className='levelOne'>
        <div className='levelTwo'>
            <img className='profile' src={profilePic} alt="profile" />
        </div>
        <div className='levelTwo'>
            <div className='levelThree'>
                <h2>{NameOfUser}</h2>
                <h2>{EmailOfUser}</h2>
                <h1>{UsernameOfUser}</h1>
            </div>
            <div className='levelThree proWid'>
                {parsedGenres.map((genre) => (
                    <div key={genre.id}>
                        <p>{genre.title}</p>
                    </div>
                ))}
                {/* <div>
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
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ProfileComp