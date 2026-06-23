import "./chat.scss";
import { useState } from "react";

function Chat(){
    const [chat,setChat]=useState(true);
    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar"/>
                    
                        <span>John Doe</span>
                        <p>Hello! Is the apartment still available?</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar"/>
                    
                        <span>John Doe</span>
                        <p>Hello! Is the apartment still available?</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar"/>
                    
                        <span>John Doe</span>
                        <p>Hello! Is the apartment still available?</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar"/>
                    
                        <span>John Doe</span>
                        <p>Hello! Is the apartment still available?</p>
                </div>
            </div>
            {chat && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar"/>
                        John Doe
                    </div>
                    <span className="close" onClick={()=>setChat(false)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Hello! Is the apartment still available?</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hello! Is the apartment still available?</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatMessage owner">
                        <p>Yes, it is still available.</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hello! Is the apartment still available?</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatMessage owner">
                        <p>Hello! Is the apartment still available?</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hello! Is the apartment still available?</p>
                        <span>1 hr ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea placeholder="Type a message..."/>

                    <button>Send</button>
                </div>
            </div>}
        </div>
    );
}

export default Chat;
