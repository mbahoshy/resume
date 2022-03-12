import './App.css';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import ReactDOMServer from 'react-dom/server';


function App() {
  const str = ReactDOMServer.renderToStaticMarkup(<Resume />);
  const coverStr = ReactDOMServer.renderToStaticMarkup(<CoverLetter />);
  return (
    <div className="App">
      <a href={`http://localhost:2000/${encodeURIComponent(coverStr)}`}>Download Cover Letter</a>
      <a href={`http://localhost:2000/${encodeURIComponent(str)}`}>Download Resume</a>
      <CoverLetter />
      <Resume />
    </div>
  );
}

export default App;
