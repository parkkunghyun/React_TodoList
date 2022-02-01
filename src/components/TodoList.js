import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from '../TodoContext'

const TodoListBlock = styled.div`
    flex:1; /*차지할 수 있는 영역을 꽉 채우는 거*/
    padding:20px 32px;
    padding-bottom: 48px;
    overflow-y:auto; /*즉 위와 아래의 내용이 더 길때 (세로) 어떻게 보일지 선택하는 속성 */
`

const TodoList = () => {
    const todos = useTodoState();

  return <TodoListBlock>
     {todos.map(todo => (
          <TodoItem
          key ={todos.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          ></TodoItem>
     ))}
     </TodoListBlock>;
};

export default TodoList;

/**
 * overflow-y 나 x 에서 쓸수 있는 것들
 * visible (기본값) : 특정 요소가 박스를 넘어 가더라도, 그대로 보여준다.
hidden : 부모요소의 범위를 넘어가는 자식 요소의 부분은 보이지 않도록 처리한다.
         (가로 스크롤바가 나타나지 않을 뿐 브라우저에 따라 세로 스크롤바는 나타남)
scroll : 부모요소의 범위를 넘어가는 자식요소의 부분은 보이지 않지만, 사용자가 확인 할 수 있도록 스크롤바를 표시한다.
         (가로 스크롤바 항상 표시)
auto : 부모요소의 범위를 넘어가는 자식요소의 부분이 있을 경우 해당 부분을 보이지 않도록 처리하고, 사용자가 해당 부분을 확인 할 수 있도록 스크롤바를 표시 한다.
         (내용이 넘칠때만 가로 스크롤바 표시)
 */