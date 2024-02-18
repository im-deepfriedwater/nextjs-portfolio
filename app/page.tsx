"use client"

import { Silkscreen } from 'next/font/google'
import UnityApp from './unity/unityapp';
import { Unity, useUnityContext } from 'react-unity-webgl';

const silkscreen = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });
  
  return (
    <div className="main">
      <div className={`topnav ${silkscreen.className}`} id="myTopnav">
        <div className="leftHeader">
          <div>Justin Kyle Torres</div>
        </div>
        <div className="rightHeader">
          <a href="https://www.linkedin.com/in/justin-torres/" target="_blank">LinkedIn</a>
          <a href="/justinkyletorres2024_resume.pdf" target="_blank">Resume</a>
          <a href="https://github.com/im-deepfriedwater" target="_blank">Github</a>
        </div>
      </div>
      
      <div className="unityContainer">
        { !isLoaded && (
          <div className={`loadingContainer ${silkscreen.className}`}>
            <p>
              Loading... {Math.round(loadingProgression * 100)}%
            </p>
          </div>
        )}
        <Unity 
          unityProvider={unityProvider} 
          style={{ 
            width: "100%", 
            height: "100%", 
            visibility: isLoaded ? "visible" : "hidden"}} 
        />;
      </div>
    </div>

  );
}
