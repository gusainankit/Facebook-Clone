import React from "react";
import "./log.css"
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

function LogIn() {
    return (<>
        <div className="main-container">
            <div className="container">
                <div className="items item-1">
                    <h1 className="item-1__heading-1">facebook</h1>
                    <h2 className="item-1__heading-2">Facebook helps you connect and share<br/> with the people in your life.
                    </h2>
                </div>

                <div className="items item-2">
                    <form method="post" action="" className="data">
                        <div id="id_username_div" className="form-input">
                            <input type="text" placeholder="Email address or phone number"/>
                        </div>
                        <div id="id_password_div" className="form-input">
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div id="id_login_div" className="form-submit">
                            <button className="submit" type="submit">Log In</button>
                        </div>
                        <div id="id_forgot_div" class="form-forgot">
                            <Link to="/forgotten" className="forgot" >Forgotten password?</Link>
                        </div>
                        <hr />
                        <div id="id_createNew_div" className="form-account">
                           <Link to="/createaccount"><button className="submit-1" type="submit" >Create New Account</button></Link> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
            <Footer/>
    </>)
}
export default LogIn