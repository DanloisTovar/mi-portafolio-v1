import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Greetings from './containers/Greetings';
import Skills from './containers/Skills';
import Habilidades from './containers/Proficiency';
import Education from './containers/Education';
import Cursos from './containers/Cursos';

// import Experience from './containers/Experience';
import Projects from './containers/Projects';
import GithubProfile from './containers/GithubProfile';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Navigation />
              <Greetings />
              <Skills />
              <Habilidades />
              <Education />
              <Cursos />
              <Projects />
              <GithubProfile />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
