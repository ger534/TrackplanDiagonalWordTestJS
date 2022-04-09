import { useState } from 'react';

import WordTable from './components/wordTable/wordTable';
import WordInput from './components/wordInput/wordInput';

/* routing */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  const [word, setWord] = useState(null)

  return (
    <div className="App">
      <h1>Trackplan Digital Word Test</h1>
      <Router>
        <Routes>
          <Route path="/" element={<WordInput setWord={setWord} />} />
          <Route path="/table" element={<WordTable word={word} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
