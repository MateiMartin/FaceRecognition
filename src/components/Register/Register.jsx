import React from "react";

const Register = ({ onRouteChange }) => {
    return (
        <div className="vh-100 w-100 flex pb5 justify-center items-center">
            <article className="br3 ba dark-gray b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80 white">
                    <div className="measure flex flex-column items-center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0 tc white">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="text" name="name" id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5" type="submit" value="Sign up" />
                        </div>
                    </div>
                </main>
            </article>
        </div>
    );
}

export default Register;
