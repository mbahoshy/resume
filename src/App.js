import './App.css';
import Resume from './components/Resume';
import ReactDOMServer from 'react-dom/server';


function App() {
  const str = ReactDOMServer.renderToStaticMarkup(<Resume />);
  return (
    <div className="App">
      <a href={`http://localhost:2000/${encodeURIComponent(str)}`}>Download</a>
      <Resume />
    </div>
  );
}

export default App;
