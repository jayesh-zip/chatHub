import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectRoute;

// import { Navigate, Outlet } from "react-router-dom";
// import PropTypes from 'prop-types'; // Optional, helps define expected prop types

// const ProtectRoute = ({ children, user, redirect = "/login" }) => {
//   if (!user) return <Navigate to={redirect} />;

//   return children ? children : <Outlet />;
// };

// // Optional PropTypes for better validation
// ProtectRoute.propTypes = {
//   user: PropTypes.any.isRequired,
//   redirect: PropTypes.string,
//   children: PropTypes.node
// };

// export default ProtectRoute;
