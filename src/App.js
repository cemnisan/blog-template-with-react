import Navbar from './components/class/Navbar';
import Feature from './components/class/Feature';
import AllArticles from './components/class/AllArticles';
import Footer from './components/class/Footer';
import About from './components/class/About';
import NotFound from './components/class/NotFound';
import resumeData from './resumeData';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>

        <Navbar resumeData={resumeData} />
        <hr></hr>

        <Switch>

          <Route exact path="/">
            <Feature resumeData={resumeData} />
            <AllArticles resumeData={resumeData} />
          </Route>

          <Route exact path="/about">
            <About resumeData={resumeData} />
          </Route>

          <Route component={NotFound}/>

        </Switch>
        <Footer resumeData={resumeData} />
      </header>
    </Router>
  );
}

export default App;
