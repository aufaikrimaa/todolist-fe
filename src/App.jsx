import React, { useState } from 'react'
import InputTodo from "./components/InputTodo"
import BackgroundIcons from "./components/BackgroundIcons"
import DisplayTodo from "./components/DisplayTodo"
import todo from './assets/img/todolist.svg'
import moon from './assets/img/moon.svg'
import sun from './assets/img/sun.svg'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <div>
          <BackgroundIcons></BackgroundIcons>
          <button onClick={toggleDarkMode} className='absolute p-0.5 flex justify-end top-5 right-5 rounded-full'>
            {isDarkMode ? <img src={moon} alt='dark' className='w-8 h-8' /> : <img src={sun} alt='light' className='w-8 h-8' />}
          </button>
          <div className="todos">
            <h1 className="text-4xl text-center font-bold mb-10 pt-30 flex items-center justify-center">
              Plan for today <img src={todo} className="w-15" />
            </h1>
            <InputTodo />
            <DisplayTodo />
          </div>
        </div>

      </div>

    </>
  )
}

export default App
