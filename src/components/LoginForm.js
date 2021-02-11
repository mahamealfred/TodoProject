import React, { Component } from 'react'
import style from '../styles/login.module.css';
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {

    constructor (props)
    {
        super(props);
        this.state ={
            
            email :'',
            password:'',
            emailError:'',
            passwordError:''
        }
    }

    handleChange (e){
        console.log(e.target);
        this.setState(
            {[e.target.name]:
             e.target.value});
    }
    handleSubmit (e){
        e.preventDefault();
        const isValid=this.validation();
        if(isValid)
        {
            console.log(this.state);
        }
    }
    validation ()
    {
        let emailError="";
        let passwordError="";

        if(!this.setState.email==null)
        {
            emailError="please provide your email";
        }
        else{
            emailError="";
        }
        if (!this.state.email.includes('@')){
            emailError='invalid email';
        }
        else{
            emailError="";
        }
        if(!this.state.password==null){
           passwordError="please provide password" 
        }
        else{
            passwordError="";
        }
        if(emailError|| passwordError)
        {
            this.setState({emailError,passwordError});
            return false;
        }
        return true;

    }
    render() {
        return (
            <div>
               <div className={style.bck}>
                   <div className={style.container}>
                     
                      <form method="post" oncSubmit={(e)=> this.handleSubmit(e)}>
                        <h1>Login</h1>
                      <div className={style.field}>
                              <input type="email" placeholder="Email or Usename" name="email" onChange={(e)=>this.handleChange(e)} ></input>
                              <span></span>
                             
                          </div>
                          <div className={style.field}>
                              <input type="password" placeholder="Password" name="password" onChange={(e)=>this.handleChange(e)} ></input>
                              <span></span>
                         
                          </div>
                          <div className={style.pass}>
                          < Link to="forget">Forget password ?</Link>
                            
                          </div>
                              <div>
                              <input type="submit" value="LOGIN"/>
                              </div>
                             
                         
                          <div className={style.signup_link}>
                            Not a member? < Link to="signup">Signup</Link>
                          </div>
                      </form>

                   </div>

               </div>
              
            </div>
        )
    }
}
