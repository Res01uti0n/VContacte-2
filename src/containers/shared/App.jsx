import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { Container } from "semantic-ui-react";

import EventDashboard from "../event/EventDashboard";
import NavBar from "./NavBar";
import EventDetailPage from "../event/eventDetail/EventDetailPage";
import PeopleDashboard from "../people/PeopleDashboard";
import UserDetailPage from "../user/UserDetailPage";
import SettingsDashboard from "../settings/SettingsDashboard";
import EventForm from "../event/EventForm";
import StartPage from "../../components/home/StartPage";
import ModalManager from "../../utils/ModalManager";
import LoadingComponent from "../../components/shared/LoadingComponent";
import { UserIsAuthenticated } from "../../utils/AuthWrapper";
import NotFound from "../../components/shared/NotFound";

const App = () => {
  const auth = useSelector((state) => state.firebase.auth, []);

  if (!auth.isLoaded && auth.isEmpty) return <LoadingComponent />;

  return (
    <Fragment>
      <ModalManager />

      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>

      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />

            <Container className="main">
              <Switch>
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailPage} />
                <Route
                  path={["/manage/:id", "/createEvent"]}
                  component={UserIsAuthenticated(EventForm)}
                />
                <Route
                  path="/people"
                  component={UserIsAuthenticated(PeopleDashboard)}
                />
                <Route
                  path="/profile/:id"
                  component={UserIsAuthenticated(UserDetailPage)}
                />
                <Route
                  path="/settings"
                  component={UserIsAuthenticated(SettingsDashboard)}
                />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
