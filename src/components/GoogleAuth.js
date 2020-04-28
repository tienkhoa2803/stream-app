import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
   
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '206838389229-2rb1vnda52bqj31f76g6bdq2b6h30p4p.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
        }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return (
                <button onClick={this.signOut} className="ui red google button">
                    <i className="google icon" style={{width: 'auto'}}> Sign out</i>
                </button>
            )
        } else {
            return (
                <button onClick={this.signIn} className="ui red google button">
                    <i className="google icon" style={{width: 'auto'}}> Sign in with google</i>
                </button>
            )
        }
    }
    signIn = () => {
        this.auth.signIn();
    }
    signOut = () => {
        this.auth.signOut();
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect(
    mapStateToProps,
    {signIn, signOut}
    )(GoogleAuth);
