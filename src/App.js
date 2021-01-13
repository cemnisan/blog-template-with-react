import Navbar from './components/class/Navbar';
import Feature from './components/class/Feature';
import AllArticles from './components/class/AllArticles';
import resumeData from './resumeData';

function App() {
  return (
    <header>
      <Navbar resumeData={resumeData} />
      <hr></hr>
      <Feature resumeData={resumeData} />
      <AllArticles resumeData={resumeData} />
    </header>
  );
}

export default App;
