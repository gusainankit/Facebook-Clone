import React from "react";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import "./forgot.css"

function Forgotten(){
    return<>
      <div className="navbar">
        <div className="navbar_name">
            <h2>facebook</h2>
        </div>
        <div className="content" class="navbar_content">
            <form className="form_content">
                <div  className="form-enter">
                    <input type="text" placeholder="Email or phone"/>
                </div>
                <div className="form-enter">
                    <input type="text" placeholder="Password"/>
                </div>
                <div >
                    <button className="btn-submit" type="submit">Log In</button>
                </div>
                <div className="id_forgot_account">
                    <Link className="forgotten_account" to="/forgotten">Forgotten account?</Link>
                </div>

            </form>
        </div>
    </div>


    <div className="page">
        <div className="container-forgot">
            <div className="heading">
                <h2>
                    Find Your Account
                </h2>
            </div>


            <div className="para">
                <p>Please enter your email address or mobile number to search for your account.</p>
            </div>

            <div className="id_mobile_no">
                <input class="mobile_no" type="text" placeholder="Email address or mobile number"/>
            </div>

            <div className="button-forgot">
                <div>
                    <Link className="cancel_btn" to="/" >Cancel</Link>
                </div>
                <div>
                    <Link className="search_btn" to="" >Search</Link>
                </div>
            </div>
        </div>
    </div>
  
   
        <Footer />
   
    </>
}
export default Forgotten;
