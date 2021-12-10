import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils";
import Loader from "./components/common/Loader";
import "./index.css";

const Home = lazy(() => import("./pages/app/Home"));
const Host = lazy(() => import("./pages/app/Host"));
const Apartments = lazy(() => import("./pages/app/Apartments"));
const ApartmentDetails = lazy(() => import("./pages/app/ApartmentDetails"));
const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const Dashboard = lazy(() => import("./pages/app/dashboard/Home"));
const Profile = lazy(() => import("./pages/app/dashboard/Profile"));
const Listing = lazy(() => import("./pages/app/dashboard/listing/Index"));
const ListingForm = lazy(() => import("./pages/app/dashboard/listing/Listing"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/apartments" component={Apartments} />
          <Route exact path="/apartments/:name" component={ApartmentDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/app" component={Dashboard} />
          <ProtectedRoute exact path="/app/profile" component={Profile} />
          <ProtectedRoute exact path="/app/listing" component={Listing} />
          <ProtectedRoute exact path="/app/listing/start" component={ListingForm} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
