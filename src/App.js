import Navbar from './components/functions/Navbar';
import Feature from './components/class/Feature';
import resumeData from './resumeData';

function App() {
  return (
    <header>
      <Navbar resumeData={resumeData} />
      <hr></hr>
      <Feature resumeData={resumeData} />
    </header>
  );
}

export default App;
