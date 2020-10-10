import React, { useEffect } from "react";
import { getUsers } from "api/users";

import { Header } from "components";

function App() {
  useEffect(() => {
    getUsers()
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>Awesome APP</p>
      </header>
    </div>
  );
}

export default App;
