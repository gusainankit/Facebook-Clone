import React from "react";
import "./create.css"
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

function CreateAccount() {
    return (<>
        <div className="main-container">
            <div className="image">

                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook logo" height="100px" />
            </div>

            <div className="container-create">

                <div className="upper">
                    <h1 className="word">Create a new account</h1>
                    <p className="word1">It's quick and easy</p>
                </div>

                <form className="form-create">
                    <div className="name">
                        <div className="input-1">
                            <input className="input-cr username " type="text" placeholder="First name" />
                        </div>
                        <div className="input-2">
                            <input className="input-cr username" type="surname" placeholder="Surname" />
                        </div>
                    </div>
                    <div>
                        <input className="input-cr userno" type="text" placeholder="Mobile number or email address" />
                    </div>
                    <div>
                        <input className="input-cr userno" type="password" placeholder="New password" />
                    </div>
                    <div className="label">
                        <label for="date">Date of birth</label><br />
                        <select className="option" name="date">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>

                        <select className="option" name="date" id="month">
                            <option value="jan">Jan</option>
                            <option value="feb">Feb</option>
                            <option value="mar">Mar</option>
                            <option value="apr">Apr</option>
                            <option value="may">May</option>
                            <option value="jun">Jun</option>
                            <option value="july">July</option>
                            <option value="aug">Aug</option>
                            <option value="sep">Sep</option>
                            <option value="oct">Oct</option>
                            <option value="nov">Nov</option>
                            <option value="dec">Dec</option>
                        </select>

                        <select className="option" name="date" id="year">
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </select>
                    </div>
                    <div className="label">
                        <label for="gender">Gender</label><br />
                        <span className="genderradio">
                            <label className="hello" for="age1">Male</label>
                            <input className="bye" type="radio" id="male" name="Gender" value="1" />
                        </span>
                        <span className="genderradio">
                            <label className="hello" for="age2">Female</label>
                            <input className="bye" type="radio" id="female" name="Gender" value="1" />
                        </span>
                        <span className="genderradio">
                            <label className="hello" for="age3">Custom</label>
                            <input className="bye" type="radio" id="age3" name="Gender" value="1" />
                        </span>
                    </div>
                    <div className="para-create">
                        <p>People who use our service may have uploaded your contact information to Facebook.<Link className="link" to="">Learn
                            more</Link>.
                        </p>
                        <p>By clicking Sign Up, you agree to our <Link className="link" to="">Terms, Data Policy</Link> and <Link className="link" to="">Cookie
                            Policy</Link>. You may receive SMS
                            notifications from us and can opt out at any time.</p>
                    </div>
                    <button className="button-sign" type="button">Sign up</button>
                    <div>
                        <Link className="link linkaccount" to="/">Already have an account?</Link>
                    </div>

                </form>
            </div>
        </div>
        <Footer />

    </>
    )
}

export default CreateAccount;