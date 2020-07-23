import React, { useEffect, useState } from 'react';
import particleConfig from "../assets/js/particlesConfig";

import MainPage from './MainPage.jsx'

const App = () => {
  const [url, setUrl] = useState('');
  const [worldName, setWorldName] = useState('New world (1)');

  useEffect(() => {
    // Setup the particles on background
    particlesJS("particle-container", particleConfig);
  }, [])

  return (
    <MainPage onChangeUrl={(e) => setUrl(e.target.value)}
              onChangeWorldName={(e) => setWorldName(e.target.value)}
              valueUrl={url}
              valueWorldName={worldName}
    />
  );
};

export default App
