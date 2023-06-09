import React from "react";
import {Link,NavLink} from "react-router-dom"
import SidebarData from "./SidebarData"

function Sidebar(){
    return (
        <>
        <header className="layout-left-side">
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-green">
                <div className="position-sticky bg-green">
                <div className="list-group list-group-flush m-0 py-2">
                    <Link
                    to={`${process.env.PUBLIC_URL}/readerstatus`}
                    className="list-group-item list-group-item-action p-0 ripple bg-transparent text-center mb-5"
                    aria-current="true"
                    >
                    <h5 className="text-white py-4 mb-0">CHECK YOUR MACHINE STATUS</h5>
                    </Link>
                    <div className="cstm-fields mx-auto">
                    {SidebarData.map((item, index) =>{
                       return( 
                           <NavLink to={process.env.PUBLIC_URL + item.path} key={index} className="list-group-item list-group-item-action py-2 ripple mb-5 ">
                            <img src={item.icon} alt={item.title} /><span className="text-white">{item.title}</span>
                            </NavLink>
                       )
                    })}
                    </div>
                </div>
                </div>
            </nav> 

        </header>
  
        </>
    )
}

export default Sidebar;