import React, { Fragment } from 'react';

const SignIn = ({onRouteChange}) => {
    return(
        <Fragment>
            <article className="mw5 center shadow-4 br1 pa3 pa4-ns mv3 ba b--black-10">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 underline white fw6 ph0 mh0">sign-in</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy bg-white f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-black-20 hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy bg-white f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-black-20 hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={() => onRouteChange('home')}
                                className="b ph3 pv2 input-reset ba b--black bg-white hover-bg-black hover-white grow pointer f6 dib" 
                                type="submit" 
                                value="Sign In" 
                            />
                        </div>
                        <div className='lh-copy mt3'>
                            <p onClick={() => onRouteChange('sign-up')} className='f6 link dim white db pointer'>Sign Up</p>
                        </div>
                    </div>
                </main>
            </article>
        </Fragment>
    );
}

export default SignIn;