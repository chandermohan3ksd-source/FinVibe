import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu({ username }) {
    const [selecteOption, setSelecteOption] = useState(0);
    const [profileDropDown, setProfileDropDown] = useState(false);

    const handleSelectOption = (idx) => {
        setSelecteOption(idx);
    }

    const menuClass = "menu";
    const activeMenuClass = "menu-selected";

    const handleProfieDropDown = () => {
        setProfileDropDown(!profileDropDown);
        console.log(profileDropDown)
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href = "http://localhost:5174";
    }

    return (
        <>
        <div className="menu-container" style={{ position: "relative" }}>
            <img src="logo.png" alt="logo-photo" style={{ width: "2%" }} />
            
            <div className="menus">
                <ul>
                    <li>
                        <Link  
                            style={{ textDecoration: "none" }}
                            to="/" 
                            onClick={() => handleSelectOption(0)}
                        >
                            <p className={selecteOption === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{ textDecoration: "none" }}
                            to="/orders" 
                            onClick={() => handleSelectOption(1)}
                        >
                            <p className={selecteOption === 1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{ textDecoration: "none" }}
                            to="/holdings"
                            onClick={() => handleSelectOption(2)}
                        >
                            <p className={selecteOption === 2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{ textDecoration: "none" }}
                            to="/positions"
                            onClick={() => handleSelectOption(3)}
                        >
                            <p className={selecteOption === 3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{ textDecoration: "none" }}
                            to="/funds"
                            onClick={() => handleSelectOption(4)}
                        >
                            <p className={selecteOption === 4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{ textDecoration: "none" }}
                            to="/apps"
                            onClick={() => handleSelectOption(5)}
                        >
                            <p className={selecteOption === 5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                
                <div className="profile" onClick={handleProfieDropDown}>
                    <div className="avatar">ZU</div>
                    <p className="username">{username}</p>
                </div>

                {/* Dropdown ko sahi div structure ke andar rakha */}
                {profileDropDown && (
                    <div className="profile-dropdown" style={{
                        position: "absolute",
                        bottom: "-65px",
                        right: "20px",
                        background: "#fff",
                        border: "1px solid #ccc",
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "4px",
                        padding: "10px",
                        zIndex: 100,
                        minWidth: "120px"
                    }}> 
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li onClick={handleLogout} style={{
                                cursor: "pointer", 
                                color: "#df514c", 
                                fontWeight: "500",
                                padding: "5px 10px",
                                textAlign: "center"
                            }}> <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div> 
        </>
    );
}