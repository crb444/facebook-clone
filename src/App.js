import { SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { UserContext, UserContextProvider } from "./UserContext";
import { useContext } from "react";

function App() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
      {console.log(user?.user)}
    </div>
  );
}

export default App;
