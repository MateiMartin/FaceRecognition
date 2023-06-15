import React from "react";
import { useState } from "react";


const Signin = ({ onRouteChange, loadUser }) => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const onEmailChange = (event) => {
        setSignInEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value)
    }

    const onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    loadUser(data);
                    onRouteChange('home');
                }
                else {
                    setSignInEmail('');
                    setSignInPassword('');
                    alert('Wrong credentials');
                }
            })

    }

    return (
        <div className="vh-100 w-100 flex pb5 justify-center items-center">
            <article className="br3 ba dark-gray b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80 white">
                    <div className="measure flex flex-column items-center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0 tc white">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                                <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--purple" type="email" name="email-address" id="email-address" value={signInEmail} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                                <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--purple" type="password" name="password" id="password" value={signInPassword} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    );
}

export default Signin;
