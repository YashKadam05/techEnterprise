import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min.js";
import "./signup.css";
import { Link, useNavigate } from "react-router";
import axios from "axios";


export default function Login(props) {

    const vantaRef = useRef(null);
    useEffect(() => {
        const vantaEffect =
            WAVES({
                el: ".signUpBody",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                // color: 0x161a1c
                color: 0x000000
            })

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    })

    const handleSearch = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api2", [event.target.gmail.value, event.target.password.value])
            .then(
                console.log("Data Search"),
                alert("Data Search"),
                fetchApi(),
                event.target.gmail.value = "", event.target.password.value = "",
            )
            .catch(err => console.log(err))
    }


    const { auth, setauth } = props;
    const { userdetails, setuserdetails } = props;
    const navigate = useNavigate()
    const fetchApi = () => {
        axios.post("http://localhost:8080/api2")
            .then(res => {
                console.log(res.data[0]);
                setauth(true);
                setuserdetails([{
                        username: res.data[0].username,gmail: res.data[0].gmail,password: res.data[0].password,phoneNo: res.data[0].phoneNo,state: res.data[0].state,city: res.data[0].city,address: res.data[0].address,pincode: res.data[0].pincode,createdOn: res.data[0].createdOn}]);
                navigate("/");
            })
            .catch(err => { console.log(err); })
    }


    return (
        <>
            <div className="signUpBody">
            <Link to="/" id='backButton'><i class="bi bi-arrow-left-circle"></i></Link>

                <form onSubmit={handleSearch}>
                    <h1>Login</h1>
                    <input required type="text" autoComplete='off' placeholder="Enter your gmail" name="gmail" />
                    <input required type="text" autoComplete='off' placeholder="Enter your password" name="password" minLength="8" maxLength="8" />

                    <button type="submit">Log In</button>
                    <div className="formTxt">
                        <p>Don't have an account</p>
                        <Link to="/signup">Signup?</Link>
                    </div>
                </form>


            </div>

        </>
    )
}
