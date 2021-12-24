import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth();
    return (!user) ? <Navigate to="/" /> : children
}

export default ProtectedRoute;