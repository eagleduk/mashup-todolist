import { createGlobalStyle } from "styled-components";
import TodoCreate from "./component/TodoCreate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
    </>
  );
}

export default App;
