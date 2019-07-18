import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { logIn } from '../actions';

class LogIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChangeUser = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                username: e.target.value
            }
        });
    };

    handleChangePassword = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                password: e.target.value
            }
        });
    };


    logIn = e => {
        console.log(this.state.credentials)
        e.preventDefault();
        this.props.logIn(this.state.credentials)
        .then(res => {
            console.log(res)
            if(res) {
                this.props.history.push('/friends')
            }
        })
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.logIn}>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChangeUser}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChangePassword}
                    />
                <button>
                {this.props.isLoggingIn ? (
                <Loader type="TailSpin" color="black" height={20} width={20} />
                ) : (
                    'Log-In')}
                </button>
                </form>
            </div>
        )
    }
}

const mstp = state => {
    console.log(state)
    return{
        error: state.erros,
        isLoggingIn: state.isLoggingIn
    }
}

export default connect (mstp, { logIn })(LogIn);
    