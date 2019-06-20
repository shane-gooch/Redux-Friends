import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getFriends } from '../actions';

class FriendsView extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }
    render(){
        return(
            <div className='friends-list'>
            {this.props.fetchingData ? <Loader  type="TailSpin" color="black" height={100} width={100} /> : (<h1>FriendsList</h1>)}
                {this.props.friends.map(friend => {
                    console.log(friend)
                    return(
                        <div key={friend.id}>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
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

export default connect(mstp, { getFriends })(FriendsView)