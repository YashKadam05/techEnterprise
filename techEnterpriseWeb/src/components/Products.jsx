import React from 'react'
import "./products.css"

import { Link } from "react-router";
import Spiral from "./3DSpiral.png"
import vrSet from "./vrSet.png"
import headphone from "./headphone.png"
import camera from "./camera.png"
import controller from "./controller.png"
import handheld from "./handheld.png"
import vacuum from "./vacuum.png"
import axios from 'axios';

export default function Products(props) {
    const { auth } = props
    const change = () => {
        let lightbox = document.querySelector(".lightbox");
        lightbox.style.display = "flex";
        console.log("open");
    }
    const closee = () => {
        let lightbox = document.querySelector(".lightbox");
        lightbox.style.display = "none";
        console.log("close");
    }
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10);
    const { prodD,setprodD,userdetails } = props;

    const prod1 = () => {
        change()
        setprodD(
            [{
                productName: 'Virtual Reality',
                productImg:"/src/components/vrSet.png",
                productDescription: 'Give the enormouse Gaming experience to the user.',
                productPrice: '100.00',
                productReceiptNo: '1234-1234',
                productInvoiceNo: '12cfcvy5t67',
            }]
        )
    }
    const prod2 = () => {
        setprodD(
            [{
                productName: 'Headphone',
                productImg:"/src/components/headphone.png",
                productDescription: 'Give the enormouse Music experience to the user.',
                productPrice: '100.00',
                productReceiptNo: '1344-2334',
                productInvoiceNo: '9cpf6375t5b',
            }]
        )
        change()
    }
    const prod3 = () => {
        setprodD(
            [{
                productName: 'Compact Camera',
                productImg:"/src/components/camera.png",
                productDescription: 'Take the enormouse Pictures with natural depth by the user.',
                productPrice: '100.00',
                productReceiptNo: '2344-2900',
                productInvoiceNo: 'vdyg6334t5b',
            }]
        )
        change()
    }
    const prod4 = () => {
        setprodD(
            [{
                productName: 'Controller',
                productImg:"/src/components/controller.png",
                productDescription: 'Give the enormouse Gaming experience to the user.',
                productPrice: '100.00',
                productReceiptNo: '2532-5790',
                productInvoiceNo: 'jhds833052',
            }]
        )
        change()
    }

    const prod5 = () => {
        setprodD(
            [{
                productName: 'Handheld',
                productImg:"/src/components/handheld.png",
                productDescription: 'Give the enormouse Gaming experience at anytime anywhere by the user.',
                productPrice: '100.00',
                productReceiptNo: '6782-2883',
                productInvoiceNo: '72bjs33jsk',
            }]
        )
        change()
    }
    const prod6 = () => {
        setprodD(
            [{
                productName: 'RoboVacuum',
                productImg:"/src/components/vacuum.png",
                productDescription: 'Cleans Your room without much mess, Cleans all type of floors.',
                productPrice: '100.00',
                productReceiptNo: '3932-3844',
                productInvoiceNo: 'dsjs8833jzz',
            }]
        )
        change()
    }
    const handleproductSubmit = () => {
        axios.post("http://localhost:8080/api3", [userdetails[0].username,prodD[0].productName,prodD[0].productPrice,prodD[0].productReceiptNo,prodD[0].productInvoiceNo,userdetails[0].state,userdetails[0].city,userdetails[0].address,userdetails[0].pincode,userdetails[0].phoneNo])
            .then(
                console.log("Product Order Transmitted"),
                alert("Succesfully Placed an order check Notifications"),
                closee()
            )
            .catch(err => console.log(err))
    }

    return (
        <>
            <img src={Spiral} alt="" id="bgImg" />
            <div className="prodBody" id="products">
                <div className="prodHead">
                    <h1><span>Products</span>.</h1>
                </div>

                <div className="prodList">

                    <div className="product">
                        <img src={vrSet} alt="" />
                        <div className="pSpecs">
                            <div className="pName">
                                <p>Virtual Reality</p>
                                <p id="pPrice">100$</p>
                            </div>
                            <div className="pBuy">
                                {!auth && <Link to="/login">Buy Now</Link>}
                                {auth && <a onClick={prod1} style={{ cursor: "pointer" }}>Buy Now</a>}
                            </div>

                        </div>

                    </div>


                    <div className="product">
                        <img src={headphone} alt="" />
                        <div className="pSpecs">
                            <div className="pName">
                                <p>Headphone</p>
                                <p id="pPrice">100$</p>
                            </div>
                            <div className="pBuy">
                                {!auth && <Link to="/login">Buy Now</Link>}
                                {auth && <a onClick={prod2} style={{ cursor: "pointer" }}>Buy Now</a>}
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <img src={camera} alt="" />
                        <div className="pSpecs">
                            <div className="pName">
                                <p>Compact Camera</p>
                                <p id="pPrice">100$</p>
                            </div>
                            <div className="pBuy">
                                {!auth && <Link to="/login">Buy Now</Link>}
                                {auth && <a onClick={prod3} style={{ cursor: "pointer" }}>Buy Now</a>}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="prodList">

                    <div className="product">
                        <img src={controller} alt="" />
                        <div className="pSpecs">
                            <div className="pName">
                                <p>Controller</p>
                                <p id="pPrice">100$</p>
                            </div>
                            <div className="pBuy">
                                {!auth && <Link to="/login">Buy Now</Link>}
                                {auth && <a onClick={prod4} style={{ cursor: "pointer" }}>Buy Now</a>}
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <img src={handheld} alt="" />
                        <div className="pSpecs">
                            <div className="pName">
                                <p>Handheld</p>
                                <p id="pPrice">100$</p>
                            </div>
                            <div className="pBuy">
                                {!auth && <Link to="/login">Buy Now</Link>}
                                {auth && <a onClick={prod5} style={{ cursor: "pointer" }}>Buy Now</a>}
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <img src={vacuum} alt="" />
                        <div className="pSpecs">
                            <div className="pName">
                                <p>RoboVacuum</p>
                                <p id="pPrice">100$</p>
                            </div>
                            <div className="pBuy">
                                {!auth && <Link to="/login">Buy Now</Link>}
                                {auth && <a onClick={prod6} style={{ cursor: "pointer" }}>Buy Now</a>}
                            </div>
                        </div>
                    </div>


                </div>
                {auth && <>
                    <div className="lightbox">
                        <i className="bi bi-x" onClick={closee} id="cross"></i>

                        <div className="receipt">
                            <div className="rhead">
                                <div className="rheadtext">
                                    <p>Receipt</p>
                                    <h1>${prodD[0].productPrice}</h1>
                                    <p>Payment {formattedDate}</p>
                                </div>
                                <div className="rheadLogo">
                                    <i className="bi bi-wallet2" style={{ fontSize: "20px", color: "#161a1c" }}></i>
                                </div>
                            </div>

                            <div className="rdetails">
                                <div className="rdline">
                                    <p>Receipt number</p>
                                    <p>{prodD[0].productReceiptNo}</p>
                                </div>
                                <div className="rdline">
                                    <p>Invoice number</p>
                                    <p>{prodD[0].productInvoiceNo}</p>
                                </div>
                                <div className="rdline">
                                    <p>Username</p>
                                    <p>{userdetails[0].username}</p>
                                </div>
                                <div className="rdline">
                                    <p>Phone no.</p>
                                    <p>{userdetails[0].phoneNo}</p>
                                </div>
                                <div className="rdline">
                                    <p>Payment method</p>
                                    <p>Cash on delivery</p>
                                </div>

                            </div>
                        </div>
                        <div className="bill">
                            <div className="bhead">
                                <h1>Receipt #{prodD[0].productReceiptNo}</h1>
                                <p>{formattedDate}</p>
                            </div>
                            <div className="bprofd">
                                <div className="bpic">
                                    <img alt="bpicProd" src={prodD[0].productImg} className='bpicProd' />
                                </div>
                                <div className="bname">
                                    <h1>{prodD[0].productName}</h1>
                                    <p>{prodD[0].productDescription}</p>
                                    <p style={{ color: "#7f8c9a" }}>Qty 1</p>
                                </div>
                                <div className="bprice">
                                    <p>{prodD[0].productPrice}</p>
                                </div>
                            </div>
                            <div className="bdetails">
                                <div className="bline">
                                    <p>Address</p>
                                    <p>{userdetails[0].address}</p>
                                </div>
                                <div className="bline">
                                    <p>Headphones</p>
                                    <p>${prodD[0].productPrice - 1}.00</p>
                                </div>
                                <div className="bline">
                                    <p>GST</p>
                                    <p>$1.00</p>
                                </div>
                                <div className="bline">
                                    <p>Total</p>
                                    <p>${prodD[0].productPrice}</p>
                                </div>
                                <div className="bline" style={{ justifyContent: "end",cursor:"pointer" }}>
                                        <a onClick={handleproductSubmit}>Place Order</a>
                                </div>
                                <div className="bline" style={{ marginTop: "20px" }}>
                                    <p style={{ width: "auto" }}>Questions? Visit our support site at: <span>@YashKadam</span></p>
                                </div>
                            </div>

                        </div>

                    </div>

                </>}

            </div>
        </>
    )
}
