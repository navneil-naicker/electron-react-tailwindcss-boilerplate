import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <div>
      <h1 className="bg-red-500 p-5 text-center text-white">
      If you are seeing this text with a red background, then congratulations! TailwindCSS is working perfectly with Electron and React. It's time to go crazy and enjoy!
      </h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
