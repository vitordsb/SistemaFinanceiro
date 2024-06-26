import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import System2 from "./pages/system/System";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/Home" element={<Private Item={System2} />} />
          <Route path="/" element={<Signin/>} />

          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
