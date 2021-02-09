import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//IMPORT COMPONENTS
import Navbar from "./navbar/navbar";
import Login from "./login/login";
import Register from "./register/register";
import Dashboard from "./dashboard/dashboard";
import PublicPage from './publicpage/publicpage';
import Lander from "./landing/lander"

//PROTECTING ROUTES

import ProtectedRoute from './protectedroute/protectedroute';

//IMPORTING CONTEXT
import { AppProvider } from "./context/context"

function App() {

  return (
    <>
      <AppProvider>
        <Router>
          <Switch>
            <Route render={() => (<Login />)} path="/login" exact></Route>
            <Route component={Register} path="/register" exact></Route>
            <Route path="/">
              <Route path="/"><Navbar /> </Route>
              <ProtectedRoute component1={Dashboard} component2={PublicPage} path="/dashboard" exact ></ProtectedRoute>
              {/* <Route render={() => (<PublicPage />)} path="/publicpage" exact></Route> */}
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
