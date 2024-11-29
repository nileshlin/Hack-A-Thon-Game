import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInValidation } from "../Validation/Validation";
import { LoginService } from "../Service/Service";
import { useAuth } from "../../../ContextApi/AuthContext/AuthContext";
import Loading from "../../pages/Loading/Loading";
 

function Login() {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({email: "",  password: ""});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 
  const {setUsers } = useAuth();
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
    // const combinedData = { access_token:'fgudbhjfghghf', refresh:"bhvfg", user: {name:"krishnam"} };
    // localStorage.setItem("user_Data",JSON.stringify(combinedData))
    // setUsers(combinedData)
    // navigate("/questionDisplay")
    // return false
    try{
      const validation= await signInValidation(formData)
      setErrors(validation);
      if(Object.keys(validation).length === 0){
        setLoading(true); 
       const response = await LoginService(formData)
       if(response.status === 200 || response.status === 201){
          console.log("user Login Successfully")
          setLoading(false);  
          const { access_token, refresh, user } = response.data;
          const combinedData = { access_token, refresh, user: user };
          localStorage.setItem("user_Data",JSON.stringify(combinedData))
          setUsers(combinedData)
          setFormData({ email: "", password: "" });
          navigate("/questionDisplay")
       }
      }
    }catch(error){
      setLoading(false);
      console.log("Error during  login form submission:", error)
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
     
          <div className="login-container" id="login_here">
            <div className="header">
              <div className="login-form">
                <h2>Login here</h2>
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <span className="icon">
                      <img src="assets/img/email.png" alt="Email Icon" />
                    </span>
                    <input type="text" placeholder="Enter email"  name="email" autoComplete="email" value={formData.email}     onChange={handleInputChange}    />
                  </div>
                  {errors.email && <p className="error">{errors.email}</p>} 
                  <div className="input-group">
                    <span className="icon">
                      <img src="assets/img/lock.png" alt="Lock Icon" />
                    </span>
                    <input type="password" placeholder="Create password" name="password"  autoComplete="new-password" value={formData.password}     onChange={handleInputChange}    />
                  </div>
                  {errors.password && <p className="error">{errors.password}</p>} 
                  <button type="submit" className="login-btn">
                    Login
                  </button>
                </form>
                {/* <div className="create_acc">
                  <span>Or</span>
                  <button
                    className="link-btn"
                  >
                    <img src="assets/img/use.png" alt="User Icon" />
                    Create an account
                  </button>
                </div> */}
                <div className="create_acc">
                <span>Or</span>
                <Link to="/register" ><img src="assets/img/use.png" alt="user"/>Create an account</Link>
              </div>
              </div>
            </div>
          </div>
      </section>
      </>}
    </div>
  );
}

export default Login;
