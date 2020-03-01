import React, { Fragment } from 'react';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail : '',
            signInPassword : ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){  
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render(){
        const {onRouteChange} = this.props;
        return(
            <Fragment>
                <article className="mw5 center shadow-4 br1 pa3 pa4-ns mv3 ba b--black-10">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 underline white fw6 ph0 mh0">sign-in</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy bg-white f6" htmlFor="email-address">Email</label>
                                    <input 
                                        className="pa2 input-reset ba bg-black-20 hover-bg-black hover-white w-100" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        onChange = {this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy bg-white f6" htmlFor="password">Password</label>
                                    <input 
                                        className="b pa2 input-reset ba bg-black-20 hover-bg-black hover-white w-100" 
                                        type="password" 
                                        name="password"  
                                        id="password" 
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input 
                                    onClick={this.onSubmitSignIn}
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
}

export default SignIn;