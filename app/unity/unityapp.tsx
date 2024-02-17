'use client'

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityApp = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/public.loader.js",
    dataUrl: "/build/public.data",
    frameworkUrl: "/build/public.framework.js",
    codeUrl: "/build/public.wasm",
  });

  return <Unity unityProvider={unityProvider} style={{ width: 1366, height: 768, }} />;
};

export default UnityApp;