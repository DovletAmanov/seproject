import React,{Component} from 'react';
import Footer from './Footer';
 

export default class AdminPanel extends Component{

    constructor(props){
		super(props);
		this.state = {
			chosenTab : "signin"
		}
	}

	_signInClick(){
		this.setState({
			chosenTab : "signin"
		})
	}

	_signUpClick(){
		this.setState({
			chosenTab : "signup"
		})
	}

	_forgotClick(){
		this.setState({
			chosenTab : "forgot"
		})
	}

    
     render(){
                {/*SignIn Content*/}
                
                const SignInContent = 
                <form className="none-float">
                    <div className="col-md-6 form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Password</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <button className="btn theme-btn">Sign In</button>
                        <button className="btn fb-btn">Login with Facebook</button>
                    </div>
                </form>;


                {/*SignUp Content*/}

                
                const SignUpContent = 
                <form>
                    <div className="col-md-6 form-group">
                        <label>First Name</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Last Name</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Email address</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Phone number</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Password</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Repeat password</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <button className="btn theme-btn">Register</button>
                    </div>
                </form>
                ;

                {/*Forgot Content*/}

                const ForgotContent = 
                <form className="none-float">
                    <div className="col-md-6 form-group">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <button className="btn theme-btn">Send</button>
                    </div>
                </form>
            ;

        return(
            <div>

	            <div className="page-wrapper">
		            
	            	<div className="container">
                          
		            	<section className="register">

		            		<div className="col-md-8 widget">
		            			<ul className="tabs">
		            				<li className="active" data-toggle="tab" onClick={()=>this._signInClick()}>Sign In</li>
		            				<li className="" data-toggle="tab" onClick={()=>this._signUpClick()}>Sign Up</li>
		            				<li className="" data-toggle="tab" onClick={()=>this._forgotClick()}>Forget</li>
		            			</ul>
		            			<hr />
                                
		            			<div className="tab-content">

									{
										this.state.chosenTab === "signin" 
										?
										<div>{SignInContent}</div>
										: 
										this.state.chosenTab === "signup"
										?
										<div>{SignUpContent}</div>
										:
										this.state.chosenTab === "forgot"
										?
										<div>{ForgotContent}</div>
										:
										<div></div> 
									}
								
		            			</div>
		            		</div>

		            

		            	</section>
                       
	            	</div>

	            </div>
              
                
            </div>
         
        )
    }
}