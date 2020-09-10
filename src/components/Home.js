import React from 'react'
import {connect} from 'react-redux'


class Home extends React.Component{
    render() {
        const {username, autorize, request} = this.props
        console.log(this.props.state);
        
        return (
            <div>
            <h1>{autorize ? `Здравствйте ${username}! Добро пожаловать в моё приложение вконтакте.` : 'Пожалуйста авторизуйтесь для начала работы с приложением.'}</h1>
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.username,
    autorize: state.autorize,
    request: state.request,
    state,
})

export default connect(mapStateToProps, null)(Home)