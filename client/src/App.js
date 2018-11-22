import React from "react";

import { Container } from "reactstrap";
import Home from "./components/Home";


class App extends React.Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;
