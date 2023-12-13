import "./App.css";
import Header from "./components/Header";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {
    const userInfo = sessionStorage.getItem("user");
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              {!user ? <Redirect to="/login" /> : <Home />}
            </Route>
            <Route path="/login" component={Login} />
            <Route component={() => <h1>Not Found!</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
