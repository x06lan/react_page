import React from 'react';
import logo from './assets/x06_icon.png';
// import backgroundImage from './assets/.png';
// import backgroundImage from './assets/banner.webp';
import backgroundImage from './assets/banner.gif';
import './App.css';
import IconBlockList, { IconBlockInfo } from './component/mainpage/Icon_block';


function App() 
{
  const tools:Array<IconBlockInfo>=[
    { src: "./img/tech/js.png", name: "js", href: "https://hackmd.io/@lanx06/js" },
    // { src: "./img/tech/jquery.png", name: "jquery", href: "" },
    // { src: "./img/tech/vuejs.png", name: "vue.js", href: "" },
    // { src: "./img/tech/api.png", name: "api", href: "https://hackmd.io/@lanx06/nodejs_api" },
    { src: "./img/tech/react.png", name: "react.js", href: "https://github.com/x06lan/react_page" },
    { src: "./img/tech/github.png", name: "github", href: "https://github.com/x06lan" },
    { src: "./img/tech/python.png", name: "python", href: "https://hackmd.io/@lanx06/python" },
    // { src: "./img/tech/opencv.png", name: "opencv", href: "" },
    // { src: "./img/tech/colab.png", name: "colab", href: "" },
    // { src: "./img/tech/pytorch.png", name: "pythoch", href: "" },
    // { src: "./img/tech/unity.png", name: "unity", href: "" },
    { src: "./img/tech/unreal.png", name: "unreal", href: "" },
    { src: "./img/tech/c++.png", name: "c++", href: "" },
    { src: "./img/tech/blender.png", name: "blender", href: "" },
  ];
  const darkTheme=window.matchMedia("(prefers-color-scheme: dark)");
  
  return (
    // <div className="bg-gradient-to-r from-blue to-pink">
    <div className="" style={{ backgroundImage: "url("+backgroundImage+")"}} >
    {/* <div className="bg-black"> */}
        <IconBlockList info={tools}></IconBlockList>
        {/* <IconBlockList info={tools}></IconBlockList>
        <IconBlockList info={tools}></IconBlockList> */}
    </div>
  );
}

export default App;
