import React from "react"
import profile from "../images/profile.png"
import { MdEmail} from 'react-icons/md';
import {GrLinkedin } from 'react-icons/gr';


export default function Info(){
    return(
        <dev className="info">
            <img className= "info-img" src={profile} alt="profile" />
            <h3>Afsoon Taghizadehgan</h3>
            <p>Frontend Developer</p>
            <dev className="buttons info">
           <button className="email"><MdEmail/> Email</button>
           <button className="linkedIn"> <GrLinkedin /> LinkedIn</button>
            </dev>
            
        </dev>
    )
}