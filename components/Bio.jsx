import React from 'react'
import ProfilePic from '../src/assets/profile.jpeg'

export default function Bio() {
    return (
        <div className="Bio">
            <img src={ProfilePic} className="profile-pic" />
            <h1>Erwin Quek</h1>
            <h2>Student Developer</h2>
            <h3>erwin.quek@u.nus.edu</h3>
        </div>
    )
}