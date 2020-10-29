import { createGlobalStyle } from "styled-components";
import TodoCreate from "./component/TodoCreate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";
import {TodoProvider} from "./component/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
