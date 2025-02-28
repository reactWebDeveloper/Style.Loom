import React from 'react'
import './ButtonComponent.css'
import icon from "./../../assets/imgs/Icons/Icon-8.png";
import { Link } from 'react-router-dom';
export default function ButtonComponent({text}) {
  return (
    <>
       <Link className="border1 es-custom-btn d-flex justify-content-center align-items-center ">
            {text} <img src={icon} alt="icon"></img>
        </Link>
    </>
  )
}
