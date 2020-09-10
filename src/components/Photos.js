import React from 'react'
import {connect} from 'react-redux'
// import {getFriends} from '../redux/actions/friendsAction'

class Photos extends React.Component{
    render() {
        const {friends} = this.props
        
         return(
             <div>
                 {/* <button onClick={getFriends} type="button" class="btn btn-primary">Получить друзей</button> */}
                 <h2 className="result">
                     {`Друзья ${friends.first_name} ${friends.last_name}`}
                 </h2>
             </div>
         )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})


export default connect(mapStateToProps, null)(Photos)