import React from "react";
import {Link } from "react-router-dom";
import "./footer.css"

function Footer(){
    return<>
    
    <div className="footer">
        <footer>
            <ul className="set-languages">
                <li> <Link className="languages" to="" title="English(UK)">English(UK)</Link></li>
                <li><Link className="languages" to="">हिन्दी</Link></li>
                <li><Link className="languages" to="">ਪੰਜਾਬੀ</Link> </li>
                <li><Link className="languages" to="">اردو</Link></li>
                <li><Link className="languages" to="">தமிழ்</Link></li>
                <li><Link className="languages" to="">বাংলা</Link></li>
                <li><Link className="languages" to="">தமிழ்</Link></li>
                <li><Link className="languages" to="">বাংলা</Link></li>
                <li><Link className="languages" to="">मराठी</Link></li>
                <li><Link className="languages" to="">తెలుగు</Link></li>
                <li><Link className="languages" to="">ગુજરાતી</Link></li>
                <li><Link className="languages" to="">ಕನ್ನಡ</Link></li>
                <li><Link className="languages" to="">മലയാളം</Link></li>
                <li><Link className="languages" to="">+</Link></li>

            </ul>
            <hr/>

            <ul className="footer-links">
                <li><Link className="links" to="">SignUp</Link></li>
                <li><Link className="links" to="">LogIn</Link> </li>
                <li><Link className="links" to="">Messenger</Link></li>
                <li><Link className="links" to="">Facebook Lite</Link></li>
                <li><Link className="links" to=""> Watch </Link></li>
                <li><Link className="links" to="">People</Link></li>
                <li><Link className="links" to="">Pages</Link></li>
                <li><Link className="links" to="">Page categories</Link></li>
                <li><Link className="links" to="">Places</Link></li>
                <li><Link className="links" to="">Games</Link></li>
                <li><Link className="links" to="">Locations</Link></li>
                <li><Link className="links" to="">Marketplace</Link></li>
                <li><Link className="links" to="">Facebook Pay</Link></li>
                <li><Link className="links" to="">Groups</Link></li>
                <li><Link className="links" to="">Jobs</Link></li>
                <li><Link className="links" to="">Oculus</Link></li>
                <li><Link className="links" to="">Portal</Link></li>
                <li><Link className="links" to="">Instagram</Link> </li>
                <li><Link className="links" to="">Local</Link></li>
                <li><Link className="links" to="">Fundraisers</Link></li>
                <li><Link className="links" to="">Services</Link></li>
                <li><Link className="links" to="">Voting Information Centre</Link></li>
                <li><Link className="links" to="">About</Link></li>
                <li><Link className="links" to="">Createad</Link></li>
                <li><Link className="links" to="">Create Page</Link></li>
                <li><Link className="links" to="">Developers</Link></li>
                <li><Link className="links" to="">Careers</Link></li>
                <li><Link className="links" to="">Privacy</Link></li>
                <li><Link className="links" to="">Cookies</Link></li>
                <li><Link className="links" to="">Adchoice </Link></li>
                <li><Link className="links" to="">Terms</Link></li>
                <li><Link className="links" to="">Help</Link></li>

            </ul>
            <div className="copyright_footer">
                <p className="copyright_text"> Meta &copy; 2022</p>
            </div>
        </footer>
    </div>
    </>
}
export default Footer;