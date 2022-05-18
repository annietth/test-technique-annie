import React from "react";
import Logo from "../../Asset/Images/LOGO.svg"

function Header() {
    return (
        <div className="header">
            <div className="Logo">
                <img src={Logo} alt="logo"/>
            </div>
           
        </div>
    )
    
}
export default Header