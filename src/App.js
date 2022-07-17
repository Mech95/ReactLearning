import React,{Component} from 'react';
import logo from './logo.svg';
 import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InLine from './components/InLine';
import './appStyles.css'
import styles from './appStyles.modules.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';


class App extends Component {
  render() {
  return (
    <div className="App">
      <FRParentInput />
      <FocusInput />

      {/* <RefDemo /> */}
     <MemoComp />
      <ParentComp />
      
      <Table />
      <FragmentDemo />
      <LifeCycleA />
      <Form />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <InLine />
      <Stylesheet primary = {false} />
      <NameList /> 
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name='bruce' hero='spiderman'><p>This is child props</p></Greet>
      <Greet name='clark' hero='batman'><button>Action</button></Greet>
      <Greet name='john' hero='ironman' />
      <Welcome name='bruce' hero='spiderman'></Welcome>
      <Welcome name='clark' hero='batman'></Welcome>
      <Welcome name='diana' hero='ironman'></Welcome>
      <Hello/>
      
    </div>
  );
}
}

export default App;



//=======================NEW=============================================//

 
// import React, { Component } from 'react'
// import'./App.css'
// import Form from './components/Form'
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <form />
//       </div>
//     )
//   }
// }

// export default App


