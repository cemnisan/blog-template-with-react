import Navbar from './components/layout/Navbar';
import Feature from './components/Feature';
import AllArticles from './components/AllArticles';
import Footer from './components/layout/Footer';
import About from './components/About';
import ArticleDetail from './components/ArticleDetail';
import NotFound from './components/pages/NotFound';
import resumeData from './data/resumeData';
import { ArticleProvider } from './data/context';

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

          <Route exact path="/blog">
            <ArticleProvider>
              <ArticleDetail />
            </ArticleProvider>
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
