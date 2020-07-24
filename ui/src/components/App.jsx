import React, { useEffect, useState } from 'react';
import particleConfig from "../assets/js/particlesConfig";

import MainPage from './MainPage.jsx'

import minecraftUtils from 'minecraftFunctions';
import { showErrorMessage } from "../utils";



const App = () => {
  const [url, setUrl] = useState('');
  const [worldName, setWorldName] = useState('New world (1)');
  const [isLoading, setIsLoading] = useState(false);
  const [errorURL, setErrorURL] = useState(false);

  useEffect(() => {
    // Setup the particles on background
    particlesJS("particle-container", particleConfig);
  }, [])

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      setErrorURL(false)
      const minecraftFunction = await minecraftUtils.createFunctionFromUrl(url);
      await minecraftUtils.loadMinecraftFunctionToWorldDatapack(worldName, minecraftFunction);
    } catch (e) {
      showErrorMessage('Error while loading function to datapack', e.message)
      setErrorURL(true)
    }
    setIsLoading(false);
  };

  return (
    <MainPage onChangeUrl={(e) => setUrl(e.target.value)}
              onChangeWorldName={(e) => setWorldName(e.target.value)}
              valueUrl={url}
              valueWorldName={worldName}
              onSubmit={onSubmit}
              isLoading={isLoading}
              errorURL={errorURL}
    />
  );
};

export default App
