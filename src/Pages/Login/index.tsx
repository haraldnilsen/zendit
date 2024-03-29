import React from "react";
import LoginBox from "../../components/Auth/Login";

const Login: React.FC = () => {
  return (
    <div className="bg-green-900 h-screen">
      <div className="pt-40">
        <LoginBox />
      </div>
    </div>
  );
};

export default Login;
