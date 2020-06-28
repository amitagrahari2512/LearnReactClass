import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import CounterChildren from './components/CounterChildren';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/** In those component code redundency is occur, So now we need component which contains common data
       * So we need to use High Order Component
       */}
      {/* <ClickCounter name = 'Amit'/> */}
      {/* <HoverCounter/> */}

       {/** Render Props Pattern */}
      {/* <ClickCounterTwo/> */}
      {/* <HoverCounterTwo/> */}
      {/* <User name = {"Amit"}/> */}
      {/* <User name = {() => "Amit"}/> */}
      {/* <User name = {(isLoggedIn) => isLoggedIn ? "Amit" : "Guest"}/> */}
      {/* <User render = {(isLoggedIn) => isLoggedIn ? "Amit" : "Guest"}/> */}

      {/** 
      <Counter 
        render = {(count, incrementCounter) => (
          <ClickCounterTwo count={count} incrementCounter = {incrementCounter}/>
        )}
       /> 

      <Counter 
        render = {(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter = {incrementCounter}/>
        )}
        /> 
        */}

        {/** Render with prop children */}
        {/** 
        Render With prop Children
        <CounterChildren>
          {(count, incrementCounter) => (
            <ClickCounterTwo count={count} incrementCounter = {incrementCounter}/>
          )}
        </CounterChildren>
        */}

        {/** Use context with default value*/}
        {/* <ComponentC/> */}

        {/** Use context */}
        <UserProvider value = "Amit">
          <ComponentC/>
        </UserProvider>
      
       
    </div>
  );
}

export default App;
