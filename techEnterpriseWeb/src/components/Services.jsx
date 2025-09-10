import React from 'react'
import "./services.css"
import latestIcon from "./latestIcon.png"
import goodiesIcon from "./goodiesIcon.png"
import customerCareIcon from "./customerCareIcon.png"
import saleIcon from "./saleIcon.png"
import reviewIcon from "./reviewIcon.png"
import deliveryIcon from "./deliveryIcon.png"
import TDSpiral2 from "./3DSpiral2.png"

export default function Services() {
    return (
        <>
            <div className="serviceBody" id='services'>
                <div className="serviceHead">
                    <h1><span>Services</span>.</h1>
                </div>

                <div className="serviceList">

                    <div className="services">
                        <div className="sIcon">
                            <img src={latestIcon} alt="" />
                        </div>
                        <div className="sText">
                            <h1>Up to Date</h1>
                            <p>All the Recent Manufactured products from Company are sold by us.</p>
                        </div>
                    </div>
                    <div className="services">
                        <div className="sIcon">
                            <img src={goodiesIcon} alt="" />
                        </div>
                        <div className="sText">
                            <h1>Free Goodies</h1>
                            <p>On specific orders Free Goodies are being provided to the customer.</p>
                        </div>
                    </div>
                    <div className="services">
                        <div className="sIcon">
                            <img src={customerCareIcon} alt="" />
                        </div>
                        <div className="sText">
                            <h1>Customer Care</h1>
                            <p>We are here 24/7 to give you help for 365 days always Up and Strong.</p>
                        </div>
                    </div>

                </div>
                <div className="serviceList">

                    <div className="services">
                        <div className="sIcon">
                            <img src={saleIcon} alt="" />
                        </div>
                        <div className="sText">
                            <h1>Festive Offers</h1>
                            <p>Special Sales & Discouts are being lauched on the day of Festivals.</p>
                        </div>
                    </div>
                    <div className="services">
                        <div className="sIcon">
                            <img src={reviewIcon} alt="" />
                        </div>
                        <div className="sText">
                            <h1>A+ Ratings</h1>
                            <p>In the locals our offline branches got the Highest Ratings.</p>
                        </div>
                    </div>
                    <div className="services">
                        <div className="sIcon">
                            <img src={deliveryIcon} alt="" />
                        </div>
                        <div className="sText">
                            <h1>Free Delivery</h1>
                            <p>We Provide Free, Fast and Safe Product Delivey to your Doorsteps.</p>
                        </div>
                    </div>

                </div>
                <img src={TDSpiral2} alt="" id="bgImg2" />
            </div>

        </>
    )
}
