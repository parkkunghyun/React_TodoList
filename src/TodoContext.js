import React,{useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id:1,
        text: 'work1',
        done: true
    },{
        id:2,
        text: 'work2',
        done: true
    },{
        id:3,
        text: 'work3',
        done: false
    }
]

function todoReducer(state, action) {

    // 리스트를 만들때는 만든 내용을 concat을 이용해서 배열 뒤에 추가
    // TOGGLE이면 체크 버튼 누르는 거니까 map으로 찾아보고 todo를 객체 복사하고 토글 버튼 클릭 모양 바꿔주기
    switch(action.type) {
        case 'CREATE': return state.concat(action.todo);
        case 'TOGGLE': return state.map(todo => 
            todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE': return state.filter(todo=> todo.id !== action.id );
        default: throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const TodoStateContext= createContext();
const TodoDispatchContext= createContext();
const TodoNextIdContext = createContext();

// 화살표 함수 하니까 인식 안되던데 무슨 문제일까ㅓ?

export function TodoContext ({children}) {
    const [state,dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

  return (
      <TodoStateContext.Provider value={state}>
          <TodoDispatchContext.Provider value={dispatch}>
              <TodoNextIdContext.Provider value={nextId}>
                  {children}
              </TodoNextIdContext.Provider>
          </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
  );
};

//state 를 직접 수정하면 절대 안되고, 기존 state 값에 덮어쓴 새 상태객체를 만드는 방식
/**
 * Provider 컴포넌트는 value prop을 받아서 이 값을 하위에 있는 컴포넌트에게 전달합니다. 
 * 값을 전달받을 수 있는 컴포넌트의 수에 제한은 없습니다.value prop가 바뀔 때마다 다시 렌더링 됩니다.
 *  Provider 하위에 또 다른 Provider를 배치하는 것도 가능하며, 이 경우 하위 Provider의 값이 우선시됩니다.
 */
export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find');
    }
    return context;
}
export function useTodoDispatch(){
    const context =  useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find');
    }
    return context;
}
export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find');
    }
    return context;
}
//useTodoNextId라는 커스텀 Hook을 따로 만들어 주었다.


