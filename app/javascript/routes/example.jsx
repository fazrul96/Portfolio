import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Home from "../components/Home";
import Hello from "../components/Hello";
// import Calendar from "../components/Calendar";

// const App = () => {
//   return (
//     <div className="App">
//       {/* setting up the routes */}
//       <Router>
//         <Routes>
//           <Route path="/" exact component={Hello} />
//           {/* <Route path="/dashboard" component={dashboard} />
//           <Route path="/home/resume" exact component={Home} />
//           <Route path="/calendar/:id" exact component={Calendar} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// };

const EditProfile = () => <div>Edit Your Profile</div>;

const Settings = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="Settings">
      <nav>Settings Navigation bar </nav>
      <div className="SettingsWrapper">
        <NavLink to={`${url}/editprofile`}>Edit Profile</NavLink>
        <Routes>
          <Route path={`${path}/editprofile`} component={EditProfile} />
          {/* <Route
                path={`${path}/changepassword`}
                component={ChangePassword}
              />
              <Route path={`${path}/changepin`} component={ChangePin} />
              <Route
                path={`${path}/accountsettings`}
                component={BankSettings}
              /> */}
        </Routes>
      </div>
      {/* </div> */}
    </div>
  );
};

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="App">
      <nav>Dashboard Navigation bar </nav>
      <NavLink to={`${url}/settings`}>Settings</NavLink>

      {/* setting up the routes */}

      <div className="MainBody">
        <Routes>
          {/* <Route path={`${path}/wallet`} exact component={Wallet} />
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/account`} component={Account} /> */}
          <Route path={`${path}/settings`} component={Settings} />
        </Routes>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ history }) => (
            <button type="button" onClick={history.goBack}>
              Back
            </button>
          )}
        />
        <NavLink to="/dashboard">Dashboard</NavLink>
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={SignUp} />
          <Route path="/about" exact component={AboutServices} /> */}
        </Routes>
      </Router>
    </div>
  );
}