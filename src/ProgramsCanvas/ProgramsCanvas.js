import React from "react"
import ImgCanva from '../SomeProjects/ProjectImg'

import ProgramsCanvaStyle from './ProgramsCanvasStyles.module.css'



import ImgGallery from "./ImgGallery"


import cImg from '../img/Programs/c.png'
import cppImg from '../img/Programs/cpp.png'
import csharpImg from '../img/Programs/csharp.png'
import pythonImg from '../img/Programs/python.png'
import webImg from '../img/Programs/web.png'
import reactImg from '../img/Programs/react.png'
import sqlImg from '../img/Programs/sql.png'
import luaImg from '../img/Programs/lua.png'

import unrealImg from '../img/Programs/unreal.png'
import unityImg from '../img/Programs/unity.png'
import godotImg from '../img/Programs/godot.png'
import constructImg from '../img/Programs/construct.png'
import phaserImg from '../img/Programs/phaser.png'

import officeImg from '../img/Programs/office.png'
import excelImg from '../img/Programs/excel.png'
import photoshopImg from '../img/Programs/photoshop.png'
import premiereImg from '../img/Programs/premiere.png'
import visualImg from '../img/Programs/vs.png'
import vscodeImg from '../img/Programs/vscode.png'
import figmaImg from '../img/Programs/figma.png'
import whimsicalImg from '../img/Programs/whimsical.png'
import blenderImg from '../img/Programs/blender.png'
import fmodImg from '../img/Programs/fmod.png'
import sdlImg from '../img/Programs/phaser.png'
import ogreImg from '../img/Programs/sdl.png'
import audacityImg from '../img/Programs/audacity.png'
import confluenceImg from '../img/Programs/confluence.png'
import openXRImg from '../img/Programs/opnegl.png'
import githubImg from '../img/Programs/github.png'
import perforceImg from '../img/Programs/perforce.png'




const programmingImgs = [
    {src: cImg, alt: "C"},
    {src: cppImg, alt: "C++"},
    {src: csharpImg, alt: "C#"},
    {src: pythonImg, alt: "Python"},
    {src: webImg, alt: "HTML/CSS/JavaScript"},
    {src: reactImg, alt: "HTML/CSS/JavaScript"},
    {src: sqlImg, alt: "SQL"},
    {src: luaImg, alt: "LUA"}
]

const enginesImgs = [
    {src: unrealImg, alt: "Unreal Engine"},
    {src: unityImg, alt: "Unity"},
    {src: godotImg, alt: "Godot"},
    {src: constructImg, alt: "Contruct"},
    {src: phaserImg, alt: "Phaser"}
]

const softwareImgs = [
    {src: officeImg, alt: "MicrosoftOffice"},
    {src: excelImg, alt: "Microsoft Excel"},
    {src: photoshopImg, alt: "Adobe Photoshop"},
    {src: premiereImg, alt: "Adobe Premiere"},
    {src: visualImg, alt: "Visual Studio"},
    {src: vscodeImg, alt: "Visual Studio Code"},
    {src: figmaImg, alt: "Figma"},
    {src: whimsicalImg, alt: "Whimsical"},
    {src: blenderImg, alt: "Blender"},
    {src: fmodImg, alt: "FMOD"},
    {src: sdlImg, alt: "SDL"},
    {src: ogreImg, alt: "Ogre3D"},
    {src: audacityImg, alt: "Audacity"},
    {src: confluenceImg, alt: "Confluence"},
    {src: openXRImg, alt: "OpenXR"}, 
    {src: githubImg, alt: "GitHub"},
    {src: perforceImg, alt: "Perforce"}
]


export default function ProgramsCanva({title}){
    return  (
        <div className={ProgramsCanvaStyle.ProgramsCanva}>
            <h1>{title}</h1>
            <ImgGallery title="Lenguajes de programación" imgs={programmingImgs}></ImgGallery>
            <ImgGallery title="Motores de Videojuegos" imgs={enginesImgs}></ImgGallery>
            <ImgGallery title="Software" imgs={softwareImgs}></ImgGallery>
        </div>
    );
}