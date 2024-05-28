import { Outlet } from 'react-router-dom';
import { APP_NAME } from '../../constants/app';

const AuthLayout = () => {
  return (
    <div className="auth-page">
      <h1 className="auth-heading">{APP_NAME}</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
