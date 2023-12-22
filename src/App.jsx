import InputTodo from "./components/inputTodo"
import BackgroundIcons from "./components/BackgroundIcons"
import DisplayTodo from "./components/DisplayTodo"
import todo from './assets/img/todolist.svg'

function App() {

  return (
    <>
      <div>
        <BackgroundIcons></BackgroundIcons>
        <div className="todos">
          <h1 className="text-4xl text-center font-bold mb-10 flex items-center justify-center">
            Plan for today <img src={todo} className="w-15" />
          </h1>
          <InputTodo />
          <DisplayTodo />
        </div>
      </div>

    </>
  )
}

export default App
