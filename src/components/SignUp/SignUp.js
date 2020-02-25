import React, { Fragment } from 'react';

const SignUp = ({onRouteChange}) => {
    return(
        <Fragment>
            <article className="mw5 center shadow-4 br1 pa3 pa4-ns mv3 ba b--black-10">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 underline white fw6 ph0 mh0">late-registration</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy bg-white f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-black-20 hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                            </div>
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
                                onClick={() => onRouteChange('sign-in')}
                                className="b ph3 pv2 input-reset ba b--black bg-white hover-bg-black hover-white grow pointer f6 dib" 
                                type="submit" 
                                value="Sign Up" 
                            />
                        </div>
                    </div>
                </main>
            </article>
        </Fragment>
    );
}

export default SignUp;