import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogin} from '../redux/actions/authAction'
import { UserAvatar } from './UserAvatar'


class Navbar extends React.Component{

    render() {
        const {handleLogin, autorize, username} = this.props
        console.log(autorize)
        
        return(
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="navbar-brand">Vk App</div>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    {autorize ? 
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink 
                                exact
                                to="/" 
                                className="nav-link">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                exact
                                to="/friends" 
                                className="nav-link">Друзья</NavLink>
                            </li>
                        </ul> : ''
                    }
                   
                    {   autorize ? <UserAvatar name={username}/> :
                         <button 
                         onClick={handleLogin}
                         type="button" 
                         className="btn btn-outline-warning ml-auto">
                             Авторизоваться
                         </button>
                    }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.username,
    error: state.auth.error,
    autorize: state.auth.autorize,
    request: state.auth.request
})


const mapDispatchToProps = {
    handleLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)