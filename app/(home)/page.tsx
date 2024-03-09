"use client"

import { Silkscreen } from 'next/font/google'
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './mainPage.module.css';

const silkscreen = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/public.loader.js",
    dataUrl: "build/public.data",
    frameworkUrl: "build/public.framework.js",
    codeUrl: "build/public.wasm",
  });
   
  return (
    <div className={`${styles.main}`}>      
      <div className={`${styles.unityContainer}`}>
        { !isLoaded && (
          <div className={`${styles.loadingContainer} ${silkscreen.className}`}>
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
            visibility: isLoaded ? "visible" : "hidden",
          }} 
        />;
      </div>
    </div>

  );
}
