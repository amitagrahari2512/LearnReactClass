import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComponent from './components/ParentComponent';
import ParentComponentMemo from './components/ParentComponentMemo';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import ForwardParentRefInput from './components/ForwardParentRefInput';
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/** Lifecycle */}
      {/* <LifecycleA/> */}

      {/** Fragment*/}
      {/* <FragmentDemo/> */}

      {/** Fragment with Table */}
      {/* <Table/> */}

      {/** Regular and Pure Component */}
      {/* <ParentComponent/> */}

      {/** Functional Memo Component as a Pure Component */}
      {/* <ParentComponentMemo /> */}

      {/**  Ref demo */}
      {/* <RefDemo/> */}

      {/**  Parent ref through child component called */}
      {/** Here we want when click parent button , then child text box should be focus */}
      {/* <FocusInput/> */}

      {/** We can forward ref to child component*/}
      {/* <ForwardParentRefInput/> */}

      {/** Portal */}
      {/* <PortalDemo /> */}


      {/** Error Boundary */}
      <ErrorBoundary>
        <Hero heroName = "Batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName = "SuperMan"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName = "Joker"/>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
