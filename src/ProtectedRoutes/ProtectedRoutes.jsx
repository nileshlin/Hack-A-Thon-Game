import React, { useEffect } from 'react';
import { useAuth } from '../ContextApi/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Component/pages/Loading/Loading';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
    const { users, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !users) {
            navigate('/login');
        }
    }, [loading, users, navigate]); 

    if (loading) {
        return <Loading />;
    }

    if (users) {
        return <Component {...rest} />;
    }

    return null;
};

export default ProtectedRoutes;



// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../ContextApi/AuthContext/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import Loading from '../Component/pages/Loading/Loading';
// import { validateUserToken } from '../services/AuthenticationService';  // API call for token validation

// const ProtectedRoutes = ({ component: Component, ...rest }) => {
//     const { users, setUsers, loading, setLoading } = useAuth();
//     const navigate = useNavigate();
//     const [isTokenValid, setIsTokenValid] = useState(true);  // To track token validity

//     useEffect(() => {
//         const validateToken = async () => {
//             if (users) {
//                 try {
//                     // Call the API to validate the token
//                     const response = await validateUserToken(users.access_token);

//                     if (response.status === 200) {
//                         // If the response is successful, set token valid
//                         setIsTokenValid(true);
//                     } else {
//                         // If the token is invalid, clear user data and redirect to login
//                         localStorage.removeItem('user_Data');
//                         setUsers(null);
//                         setIsTokenValid(false);
//                         navigate('/login');
//                     }
//                 } catch (error) {
//                     console.error('Error during token validation', error);
//                     // If there's an error (e.g., network issues), mark the token as invalid
//                     localStorage.removeItem('user_Data');
//                     setUsers(null);
//                     setIsTokenValid(false);
//                     navigate('/login');
//                 }
//             } else {
//                 // If no user data found, redirect to login
//                 setIsTokenValid(false);
//                 navigate('/login');
//             }
//         };

//         if (users && !loading) {
//             validateToken();  // Validate token when user data is available
//         } else {
//             setLoading(false); // Stop loading if there is no user data
//         }
//     }, [users, loading, setUsers, navigate, setLoading]);

//     if (loading || !isTokenValid) {
//         return <Loading />;  // Show loading while checking token validity
//     }

//     // Render the protected component if token is valid
//     return users ? <Component {...rest} /> : null;
// };

// export default ProtectedRoutes;
