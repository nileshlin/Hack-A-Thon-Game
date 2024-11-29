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


export const OtpVerifyService= async(userDetails)=>{
  try{
  const res = await axiosInstance.post(`/api/auth/OtpVerify`,userDetails)
  return res;
} catch (error) {
  console.log('Error fetching OtpVerifyService:', error);
  throw error; 
}
}


export const ResendOtpService= async(userDetails)=>{
  try{
  const res = await axiosInstance.post(`/api/auth/ResendOtp`,userDetails)
  return res;
} catch (error) {
  console.log('Error fetching ResendOtpService:', error);
  throw error; 
}
}