import "./assets/index.css";

import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <div className="container mx-auto">
      {error && <p>Authentication error</p>}
      {!error && isLoading && <Loading />}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          {isAuthenticated && <HomePage />}
        </>
      )}
    </div>
  );
}

export default App;
