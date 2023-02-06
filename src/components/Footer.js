import React from "react"
import {GrFacebookOption } from 'react-icons/gr';
import {FiInstagram } from 'react-icons/fi';
import {FaDiscord } from 'react-icons/fa';

//including symbolic icons to my social medias including facebook, instagram, and discord
export default function Footer(){
    return(
        <div className="footer">
            <button className="btn facebook"><GrFacebookOption/></button>
            <button className="btn insta"><FiInstagram/></button>
            <button className="btn discord"><FaDiscord/></button>
        </div>
    )
}