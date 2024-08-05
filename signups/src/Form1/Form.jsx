import { useState } from 'react';
import './Form.css';



export default function FirstPage() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    function HandleChange(event) {
    setFormData(prevform => {
        return {...prevform, 
            [event.target.name]: event.target.value
        }
    })
}

    function HandleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    //for password strength
    function auth() {
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
        }  else {   
            alert("correct");   // alert when password  match
      }
    }

    return(
            <div className="signup-wrapper">
                <h2>Sign Up</h2>
                <p>Create your own account! 🚀</p>
                <form onSubmit={HandleSubmit} className="signup-form">
                <input 
                        id="email" 
                        type="email" 
                        placeholder="Your email"
                        name="email"
                        value={formData.email}
                        onChange={HandleChange}
                    />
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={HandleChange}
                    />
                    <input 
                        id="confirmPassword" 
                        type="password"
                        placeholder="Repeat Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={HandleChange}
                        onBlur={auth}
                    />
                    <div 
                        className="power-container"
                        
                    > 
                        <div id="powerPoint" ></div> 
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
    )
}