import React, { useEffect } from "react";
import { getUsers } from "api/users";

import "styles/app.styl";

function App() {
  useEffect(() => {
    getUsers()
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div className="app"></div>;
}

export default App;
