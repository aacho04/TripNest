import "./navbar.scss";
import {useState} from "react";
function Navbar(){
    const [open,setOpen]=useState(false);
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo3.png" alt="Logo" />
                    <span>TripNest</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
                <a href="/">Agents</a>
                
            </div>
            <div className="right">
                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
                </div>
                <div className="menu" style={{ right: open ? '0' : '-50%' }}>
                    <a href="/" className="homeLink">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contacts</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign up</a>
                    <a href="/">Sign in</a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;