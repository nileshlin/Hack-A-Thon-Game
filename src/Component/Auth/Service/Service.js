import axiosInstance from "../../../Interceptor/Interceptor";

 



export const signUpService= async(userDetails)=>{
    try{
    const res = await axiosInstance.post(`/api/auth/register/`,userDetails)
    return res;
} catch (error) {
    console.log('Error fetching signUpService:', error);
    throw error; 
  }
}

export const LoginService= async(userDetails)=>{
    try{
    const res = await axiosInstance.post(`/api/auth/login/`,userDetails)
    return res;
} catch (error) {
    console.log('Error fetching LoginService:', error);
    throw error; 
  }
}