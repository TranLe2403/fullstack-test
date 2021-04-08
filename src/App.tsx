import React from "react";
import { Switch, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

import Detail from "./pages/Detail";
import Users from "./pages/Users";
import CustomButton from "./components//CustomButton";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Heading color="teal" textAlign="center" mt={4}>
          User List
        </Heading>

        <Users />
      </Route>
      <Route path="/:id">
        <Heading color="teal" textAlign="center" mt={4}>
          User Information
        </Heading>
        <CustomButton title="Back To Home" />
        <Detail />
      </Route>
    </Switch>
  );
};

export default App;
