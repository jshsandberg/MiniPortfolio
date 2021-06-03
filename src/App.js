import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";




function App() {


  const [id, setId] = useState('home');

  return (
      <div className="page">
          <div className="navBar">
              <li className="list">
                  <SwitchTransition mode={'out-in'}>
                      <CSSTransition timeout={300} classNames="alert" key={id}>
                        <div>
                          { id !== 'home' ? <ul onClick={() => setId('home')}>home</ul> : null }
                        </div>
                      </CSSTransition>
                  </SwitchTransition>
                  <ul onClick={() => setId('work')}>work</ul>
                  <ul onClick={() => setId('contact')}>contact</ul>
                  <ul>about</ul>
              </li>
          </div>
          <div>
          <SwitchTransition mode={'out-in'}>
                      <CSSTransition appear={true} timeout={500} classNames="alert" key={id}>
                        <div>
                          {id === 'home' ? 
                                  <div>
                                    <div className="title">
                                        <div className="header">
                                        <h1>Hello World.</h1>
                                        <h1>I am Josh Sandberg</h1>
                                        </div>
                                    </div>
                                    <div className="skills">
                                            <h3>React Developer</h3>
                                            <h3>Full Stack Web Developer</h3>
                                            <h3>UX/UI Designer</h3>
                                    </div>
                                  </div>
                                :
                          id === 'work' ? 
                                 "Goodbye, World" : null
                                 }
                        </div>
                     </CSSTransition>
            </SwitchTransition>
          </div>

      </div>
  )
}

export default App;
