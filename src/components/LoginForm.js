import React, { Component } from 'react'
import style from '../styles/login.module.css';

export default class LoginForm extends Component {
    render() {
        return (
            <div>
               <div className={style.bck}>
                   <div className={style.container}>
                     
                      <form method="post">
                        <h1>Login</h1>
                      <div className={style.field}>
                              <input type="email" placeholder="Email or Usename" ></input>
                              <span></span>
                             
                          </div>
                          <div className={style.field}>
                              <input type="password" placeholder="Password"></input>
                              <span></span>
                         
                          </div>
                          <div className={style.pass}>
                            Forget password ?
                          </div>
                              <div>
                              <input type="submit" value="LOGIN"/>
                              </div>
                             
                         
                          <div className={style.signup_link}>
                            Not a member? <a href="#">Signup</a>
                          </div>
                      </form>

                   </div>

               </div>
              
            </div>
        )
    }
}
