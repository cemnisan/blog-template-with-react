import Navbar from './components/class/Navbar';
import Feature from './components/class/Feature';
import AllArticles from './components/class/AllArticles';
import Footer from './components/class/Footer';
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
            
          </Route>
          <Route exact path="/blog">
            
          </Route>
        </Switch>
        <Footer resumeData={resumeData} />
      </header>
    </Router>
  );
}

export default App;
