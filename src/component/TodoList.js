import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="test1" done />
            <TodoItem text="test2" done />
            <TodoItem text="test3" done />
            <TodoItem text="test4" done />
            <TodoItem text="test5"  />
            <TodoItem text="test6"  />
            <TodoItem text="test7"  />
        </TodoListBlock>
    );
}

export default TodoList;