import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { canAccess, children, redirect } = props;
  if (!canAccess) {
    return <Navigate to={redirect} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
