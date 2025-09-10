import React, { useEffect, useRef } from 'react'
// import * as THREE from "three"
import WAVES from "vanta/dist/vanta.waves.min.js"
import "./signup.css"
import { Link } from "react-router";
import axios from "axios"

export default function SignUp() {

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

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api", [event.target.username.value, event.target.gmail.value, event.target.password.value, event.target.contact.value, event.target.state.value, event.target.city.value, event.target.address.value, event.target.pincode.value])
            .then(
                console.log("Data Transmitted"),
                alert("Data Submitted"),
                event.target.username.value = "", event.target.gmail.value = "", event.target.password.value = "", event.target.contact.value = "", event.target.state.value = "", event.target.city.value = "", event.target.address.value = "", event.target.pincode.value = "",
            )
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className="signUpBody">
                <Link to="/login" id='backButton'><i class="bi bi-arrow-left-circle"></i></Link>


                <form onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <input required type="text" autoComplete='off' placeholder="Enter your name" name="username" />
                    <input required type="text" autoComplete='off' placeholder="Enter your gmail" name="gmail" />
                    <input required type="text" autoComplete='off' placeholder="Enter your password" name="password" minLength="8" maxLength="8" />
                    <input required type="number" autoComplete='off' placeholder="Enter your contact" name="contact" minLength="10" maxLength="10" />
                    <input required type="text" autoComplete='off' placeholder="Enter your state" name="state" />
                    <input required type="text" autoComplete='off' placeholder="Enter your city" name="city" />
                    <input required type="text" autoComplete='off' placeholder="Enter your address" name="address" />
                    <input required type="number" autoComplete='off' placeholder="Enter your pincode" name="pincode" minLength="6" maxLength="6" />

                    <button type="submit">Sign Up</button>
                    <div className="formTxt">
                        <p>Already have an account</p>
                        <Link to="/login">Login?</Link>
                    </div>
                </form>

            </div>

        </>
    )
}
