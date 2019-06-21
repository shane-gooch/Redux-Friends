import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getFriends, addFriends } from '../actions';

class FriendsView extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        }
    }

    addFriends = () => {
        this.props.addFriends(this.state.friend)
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

 

    componentDidMount() {
        this.props.getFriends()
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }

        })
    }

    render(){
        return(
            <div className='friends-list'>
            {this.props.fetchingData ? <Loader  type="TailSpin" color="black" height={100} width={100} /> : (<h1>FriendsList</h1>)}
                {this.props.friends.map(friend => {
                    // console.log(friend)
                    return(
                        <div key={friend.id}>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                            <button>Delete</button>
                        </div>
                    )
                })}
            <form onSubmit={this.addFriends}>
                <input 
                    type='text'
                    name='name'
                    value={this.state.friend.name}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='age'
                    value={this.state.friend.age}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='email'
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                />
                <button>Add Friend</button>
            </form>
            </div>
            )
    }
 
}

const mstp = state => {
    return {
        friends: state.friends,
        fetchingData: state.fetchingData,
        error: state.error
    }
}

export default connect(mstp, { getFriends, addFriends })(FriendsView)