import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import HelloWithoutJsx from './components/HelloWithoutJsx'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRenderingComponent from './components/ConditionalRenderingComponent'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import SimpleStyleUse from './components/SimpleStyleUse';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

      {/* <Greet /> */}
      {/* <Welcome/> */}

      {/* <Hello/> */}
      {/* <HelloWithoutJsx/> */}

      {/* functional props test */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children.</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="SuperMan">
        <button>Children Button</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="WonderWoman"/> */}

      {/* Class props test */}

      {/* <Welcome name="Bruce" heroName="Batman">
        <p>This is children in class component.</p>
      </Welcome> */}
      {/* <Welcome name="Clark" heroName="SuperMan"/> */}
      {/* <Welcome name="Diana" heroName="WonderWoman"/> */}

      {/* State Test*/}
      {/* <Message /> */}

      {/* <Counter/> */}

      {/* Click Test*/}

      {/* Function Click Test*/}
      {/* <FunctionClick/> */}

      {/* Class Click Test*/}
      {/* <ClassClick/> */}

      {/* Event Bind*/}
      {/* <EventBind/> */}

      {/* Method passing*/}
      {/* <ParentComponent/> */}

      {/* Conditional Rendering*/}
      {/* <ConditionalRenderingComponent /> */}

      {/*Listing*/}
      {/* <NameList/> */}

      {/*Styles */}
      {/* <Stylesheet primary = {true}/> */}

      {/*Inline style */}
      {/* <Inline/> */}

      {/*Css Stylesheet*/}

      {/*Simple Stylesheet*/}
      {/* <h1 className = 'error'>Error</h1> */}

      {/*Module Stylesheet*/}
      {/* <h1 className = {styles.success}>Success</h1> */}

      {/*We can use simple stylesheet in anywhere in chils component, But for module style sheet we can not use anywhere directly
      for this we need to use defined object and import style from it. */}
      {/* <SimpleStyleUse/> */}

      <Form/>


    </div>
  );
}

export default App;
