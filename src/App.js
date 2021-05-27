import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('khouloud');
  return <div className="App">Hello world!</div>;
}

export default App;
