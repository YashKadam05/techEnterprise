import React from 'react'
import "./branches.css"

export default function Branches() {
    return (
        <>
            <div className="branchBody" id='aboutus'>
                <div className="branchHead">
                    <h1><span>Our Branches</span>.</h1>
                </div>

                <div className="branchSpec">
                    <div className="branches">
                        <div className="circle"></div>
                        <div className="bText">
                            <p><span>Branch 1 Address :</span> 2RCJ+8FR, Kashinath Dhuru Road, Off. Veer Savarkar Marg, Dadar
                                West, Dadar(W), Mumbai, Maharashtra 400028 </p>
                            <p><span>Branch 2 Address :</span> 2RCJ+8FR, Kashinath Dhuru Road, Off. Veer Savarkar Marg, Dadar
                                West, Dadar(W), Mumbai, Maharashtra 400028 </p>
                            <p><span>Contact :</span> +91 00000 00000 </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
