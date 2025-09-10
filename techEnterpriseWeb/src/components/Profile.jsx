import React, {useState, useEffect } from 'react'
import './profile.css'
import profileIcon2 from './profileIcon2.png'
import marbleTexture from './marbleTexture.png'
import { Link,useNavigate } from "react-router";
import axios from 'axios';


export default function Profile(props) {

    const [notify, setnotify] = useState([])

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNotif()
        }, 7000);
        return () => clearInterval(intervalId);
    }, []);


    const handleNotif = () => {
        axios.post("http://localhost:8080/api4", [props.userdetails[0].username])
            .then(
                console.log("Notificatin Data Search"),
                fetchNotif(),
            )
            .catch(err => console.log(err))
    }

    const fetchNotif = () => {
        axios.post("http://localhost:8080/api4")
            .then(res => {
                setnotify(res.data)
                console.log(notify);
            })
            .catch(err => { console.log(err); })
    }

    const { auth, setauth } = props
    const navigate = useNavigate()
    const userLogout=()=>{
        setauth(false);
        alert("Succefull Logout");
        navigate("/");
    }

    return (
        <>
            <button onClick={userLogout} id='logoutbtn'>Log Out</button>
            <div className="pnbody">
                <Link to="/" id='backButton'><i className="bi bi-arrow-left-circle"></i></Link>

                <div className="profileBody">
                    <div className="profLogo">
                        <img src={profileIcon2} alt="" />
                    </div>
                    <div className="profHead">
                        <p>@{props.userdetails[0].username.replace(" ", "").toLowerCase()}</p>
                        <h1>{props.userdetails[0].username}</h1>
                    </div>
                    <div className="profAddr1">
                        <p>{props.userdetails[0].city}</p>
                        <p>|</p>
                        <p>Joined {props.userdetails[0].createdOn.substring(5, 7)} {props.userdetails[0].createdOn.substring(0, 4)}</p>
                    </div>
                    <div className="profAddr2">
                        <p>{props.userdetails[0].address}</p>
                    </div>

                    <div className="profInfo">
                        <h1>Information</h1>
                        <div className="info">
                            <p>Gmail</p>
                            <p>{props.userdetails[0].gmail}</p>
                        </div>
                        <div className="info">
                            <p>Password</p>
                            <p>{props.userdetails[0].password}</p>
                        </div>
                        <div className="info">
                            <p>Phone no.</p>
                            <p>+91 {props.userdetails[0].phoneNo}</p>
                        </div>
                        <div className="info">
                            <p>State</p>
                            <p>{props.userdetails[0].state}</p>
                        </div>
                        <div className="info">
                            <p>City</p>
                            <p>{props.userdetails[0].city}</p>
                        </div>
                        <div className="info">
                            <p>Pincode </p>
                            <p>{props.userdetails[0].pincode}</p>
                        </div>
                        <div className="info">
                            <p>Joined </p>
                            <p>{props.userdetails[0].createdOn.substring(0, 10)}</p>
                        </div>
                    </div>

                </div>

                <div className="notifBody">
                    <div className="notifHead">
                        <h1><span>Notifications</span>.</h1>
                    </div>

                    <div className="notifWrap">

                        <div className="notif">
                            <div className="notifImg"><img src={marbleTexture} alt="" /></div>
                            <div className="notifDetails">
                                <h1>Hello {props.userdetails[0].username}!</h1>
                                <p>Your Profile has been Succesfully Created, Welcome to our TechEnterprise Family.</p>
                            </div>
                        </div>

                        {
                            notify.map((n, i) => (
                                <div className="notif" key={i}>
                                    <div className="notifImg"><img src={marbleTexture} alt="" /></div>
                                    <div className="notifDetails">
                                        <h1>{notify[i].productName} order placed!</h1>
                                        <p>Your order {notify[i].productName} booked on {notify[i].placedOn} with receipt no. {notify[i].receiptNo} will be at your doorstep within 4 business days at {notify[i].address}, {notify[i].state}, {notify[i].city}, {notify[i].pincode}, {notify[i].paymentMethod}</p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>

                </div>
            </div>
        </>
    )
}
