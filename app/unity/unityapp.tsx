'use client'

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityApp = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/build.loader.js",
    dataUrl: "/build/build.data",
    frameworkUrl: "/build/build.framework.js",
    codeUrl: "/build/build.wasm",
  });

  return <Unity unityProvider={unityProvider} style={{ width: 1366, height: 768, }} />;
};

export default UnityApp;