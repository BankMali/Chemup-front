import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function RedirectAuth({ children }) {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/" />;
  }
  return children;
}
