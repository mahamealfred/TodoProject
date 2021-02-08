import React, { Component } from 'react';
import style from '../styles/main.module.css';
import { Link } from 'react-router-dom';

export default class NavPage extends Component {

    render() {
        return (
            <div>
                <nav>
                    <ul className={style.navlinks}>
                        <Link to="/signup">
                        <li>SignUp</li>
                        </Link>
                        <Link to="login">
                        <li>Login</li>
                        </Link>
                        
                    </ul>
                </nav>
                
            </div>
        )
    }
}
