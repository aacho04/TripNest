import "./navbar.scss";
import {useState} from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const [open,setOpen]=useState(false);
    const user = true;

    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>StayVoyage</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
                <a href="/">Agents</a>
                
            </div>
            <div className="right">{user?(<div className="user">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <Link to="/profile" className="profile">
                    <div className="notification">3</div>
                    <span>Profile </span>
                </Link>
            </div>):(
                <>
                    <a href="/">Sign in</a>
                    <a href="/" className="register">Sign up</a>
                </>
            )}
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