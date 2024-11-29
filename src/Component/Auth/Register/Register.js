import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpValidation } from "../Validation/Validation";
import { signUpService } from "../Service/Service";
import Loading from "../../pages/Loading/Loading";


function Register() {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({ name: "",  number: "", email: "",  password: ""});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 
  const userData = localStorage.getItem("user_Data");
   
  useEffect(() => {
    if (userData) {
      navigate("/questionDisplay");
    }
  }, [navigate,userData]);
 
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const validation= await signUpValidation(formData)
      setErrors(validation);
      if(Object.keys(validation).length === 0){
        setLoading(true); 
       const response = await signUpService(formData)
       if(response.status === 200 || response.status === 201){
          console.log("user Signup Successfully")
          setLoading(false); 
          navigate("/login")
          setFormData({ name: "",  number: "", email: "",  password: "" });
       }
      }
    }catch(error){
      setLoading(false);
      console.log("Error during  signUp form submission:", error)
    }
  };
 

  return (
    <div className="main-wrapper">
    {loading ? <Loading/> :<>
      {/* Image Section */}
      <section className="img-area">
        <div className="img_left">
          <img src="assets/img/bgsc1.png" alt="Background 1" />
          <div className="img_block1">
            <img src="assets/img/bgsc2.png" alt="Background 2" />
          </div>
          <div className="img_block2">
            <img src="assets/img/bgsc3.png" alt="Background 3" />
          </div>
          <div className="img_block3">
            <img src="assets/img/bgsc4.png" alt="Background 4" />
          </div>
        </div>
      </section>

      {/* Login and Sign-Up Section */}
      <section className="login-area-main">
        {/* Login Form */}
          <div className="login-container" id="sign_up">
            <div className="header">
              <div className="login-form">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <span className="icon">
                      <img src="assets/img/user.png" alt="User Icon" />
                    </span>
                    <input type="text"  placeholder="Enter name" name="name"  autoComplete="name"   value={formData.name} onChange={handleInputChange}   />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>} 
                  <div className="input-group">
                    <span className="icon">
                      <img src="assets/img/phone-call.png" alt="Phone Icon"  />
                    </span>
                    <input type="text" placeholder="Enter number"  name="number"  autoComplete="tel"   value={formData.number}     onChange={handleInputChange}    />
                  </div>
                  {errors.number && <p className="error">{errors.number}</p>} 
                  <div className="input-group">
                    <span className="icon">
                      <img src="assets/img/email.png" alt="Email Icon" />
                    </span>
                    <input type="text" placeholder="Enter email"  name="email" autoComplete="email"  value={formData.email}     onChange={handleInputChange}    />
                  </div>
                  {errors.email && <p className="error">{errors.email}</p>} 
                  <div className="input-group">
                    <span className="icon">
                      <img src="assets/img/lock.png" alt="Lock Icon" />
                    </span>
                    <input type="password" placeholder="Create password" name="password" autoComplete="new-password" value={formData.password}     onChange={handleInputChange}    />
                  </div>
                  {errors.password && <p className="error">{errors.password}</p>} 
                  <button type="submit" className="login-btn">
                    Sign Up
                  </button>
                </form>
                <div className="create_acc1">
                  <span>Already have an account?</span>
                  <Link to="/login"   className="login_btn">Login here</Link>
                </div>
              </div>
            </div>
          </div>
      </section>
      </>}
    </div>
  );
}
 
export default Register
