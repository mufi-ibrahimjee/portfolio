import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const cookie = Cookies.get("iPayT");
  const router = useRouter();
  if (!cookie) {
    router.push("/404");
  }
  return <>{children}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
