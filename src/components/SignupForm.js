
import React, { Component } from 'react';
import style from '../styles/main.module.css';


const initialState={
    FullName:'',
    UserName:'',
    Email:'',
    Password:'',
    Cpassword:''

}

export default class SignupForm extends Component {
   
    constructor(propos){
        super(propos);
        this.state={
            FullName:'',
            UserName:'',
            Email:'',
            Password:'',
            Cpassword:'',
            fullNameError:'',
            usenameError:'',
            emaiError:'',
            passwordError:'',
            cpasswordError:''
        }
            
  
     }
validate = () =>{
  ;
    let fullNameError='';
    let usenameError='';
    let emaiError='';
   let passwordError='';
    let cpasswordError='';

    if (!this.state.FullName)
    {
        fullNameError='name can not be blank';
    }
    if (!this.state.UserName)
    {
        usenameError='username can not be blank';
    }

    if (!this.state.Password) {
        
        passwordError = "Please enter your password.";
      }
  
      if (!this.state.Cpassword) {
     
        cpasswordError= "Please enter your confirm password.";
      }
  
      if (typeof  this.state.password== "undefined" && typeof this.state.Cpassword !== "undefined") {
          
        if (this.state.Password !== this.state.Cpassword) {
         
          passwordError = "Passwords don't match.";
        }
      } 
  

    if (!this.state.Email.includes('@')){
        emaiError='invalid email';
    }
    if (emaiError || fullNameError || passwordError|| cpasswordError || usenameError)
    {
        this.setState({fullNameError,usenameError,emaiError,passwordError,cpasswordError});
        return false;
    }
    return true;

};

    handleSubmit(e){
    e.preventDefault();
    const isValid=this.validate();
    if(isValid){
        console.log(this.state);
        this.setState(initialState);
    }
  
            
};
handleChange(e){
    console.log(e.target);
    this.setState(
        {[e.target.name]:
         e.target.value});
}
    render() {
        
    
        return (
            <div className={style.container}>

                <form method="post" action="LoginForm.js" onSubmit={(e)=>this.handleSubmit(e)}>
                    <ul>
                        <li>
                        <p>Full Name</p>
                           <input  type="text" placeholder="Full Name" name="FullName" onChange={(e)=>this.handleChange(e)}></input> 
                           <small>{this.state.fullNameError}</small> 
                        </li>
                        <li>
                        <p>Username</p>
                           <input type="text" placeholder="Username" name="UserName" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.usenameError}</small>
                        </li>
                        <li>
                        <p>Email</p>
                           <input type="email" placeholder="Email" name="Email" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.emaiError}</small>
                        </li>
                        <li>
                        <p>Password</p>
                           <input type="password"  name="Password" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.passwordError}</small>
                        </li>
                        <li>
                        <p>Confirm Password</p>
                           <input type="password"  name="Cpassword" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.cpasswordError}</small>
                        </li>
                    </ul>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>
        )
    }
}
