import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile =() =>{
    return(
    <div className='profile-Container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icons'>

                    <a href='https://www.facebook.com/profile.php?id=100075976201090'><i className='fa fa-facebook-square'/></a>
                    <a href='https://github.com/Eshwaradeginal'><i className='fa fa-github'/></a>
                    <a href='https://www.instagram.com/'><i className='fa fa-instagram'/></a>
                    <a href='https://www.linkedin.com/in/eshwara-deginal-21b676196/'><i className='fa fa-linkedin'/></a>
                   
                    </div>
                </div>
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello I'm <span className='highlighted-text'>Eshwara Deginal</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <h1>
            <span className='primary-text'>
                    {" "}
                    <Typical loop={Infinity} steps={[
                        "Enthusiastic Dev 😎",
                        1000,
                        "Full stack Developer 💻",
                        1000,
                        "Front-end Dev 📱",
                        1000,
                        "Java Devloper ☕☕",
                        1000,
                        "Data Analysts 🌐",
                        1000,
                    ]}></Typical>

                </span>
                </h1>
                <span className='profile-role-tagline'>
                    Building application with front end and back end operations.
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    {" "}
                    Hire Me{" "}
                </button>
                <a href='https://drive.google.com/file/d/1FIPpQHTircULWKp6WGL34cFvGB_grUQ2/view?usp=sharing' download='eshwar deginal.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
            </div>
        
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
   
    );
}

export default Profile