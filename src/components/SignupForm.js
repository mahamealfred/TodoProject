
import React, { Component } from 'react';
//import style from '../styles/main.module.css';
import style from '../styles/login.module.css';



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
    else{
        fullNameError='';
    }
    if (!this.state.UserName)
    {
        usenameError='username can not be blank';
    }
    else{
        usenameError="";
    }

    if (!this.state.Password) {
        
        passwordError = "Please enter your password.";
      }
      else
      {
        passwordError="";   
      }
  
      if (!this.state.Cpassword) {
     
        cpasswordError= "Please enter your confirm password.";
      }
      else{
        cpasswordError="";
      }
  
      if (typeof  this.state.password== "undefined" && typeof this.state.Cpassword !== "undefined") {
          
        if (this.state.Password !== this.state.Cpassword) {
         
          passwordError = "Passwords don't match.";
        }
      

      } 
      else
      {
          passwordError="";  
      }
  

    if (!this.state.Email.includes('@')){
        emaiError='invalid email';
    }
    else{
        emaiError="";
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
    const isValid = this.validate();
    if(isValid){
        console.log(this.state);
        
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
            <div>
             <div className={style.bck}>
                   <div className={style.container}>
                     
                      <form method="post" action="LoginForm.js" onSubmit={(e)=>this.handleSubmit(e)}>
                        <h1>Signup</h1>
                        <div className={style.field}>
                        <input  type="text" placeholder="Full Name" name="FullName" onChange={(e)=>this.handleChange(e)}></input> 
                        <span></span>
                           <small>{this.state.fullNameError}</small> 
                             
                             
                          </div>
                          <div className={style.field}>
                          <input type="text" placeholder="Username" name="UserName" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.usenameError}</small>
                              <span></span>
                             
                          </div>
                      <div className={style.field}>
                        <input type="email" placeholder="Email" name="Email" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.emaiError}</small>
                           <span></span>
                              </div>

                          <div className={style.field}>
                          <input type="password"  name="Password" placeholder="Password" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.passwordError}</small>
                              <span></span>
                          </div>

                          <div className={style.field}>
                          <input type="password"  name="Cpassword" placeholder="Confirm Password" onChange={(e)=>this.handleChange(e)}></input>  
                           <small>{this.state.cpasswordError}</small>
                              <span></span>
                          </div>
                              <div>
                              <input type="submit" value="Submit"/>
                              </div>
                             
                      </form>

                   </div>

               </div>
              
        </div>
        )
    }
}
