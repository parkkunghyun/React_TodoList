import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width:512px;
    height:768px;

    position:relative; /*추후 박스 하단에 추가 버튼을 배치하기 위해서*/
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

    margin: 0 auto; /*페이지 중앙 정렬*/
    margin-top:96px;
    margin-bottom:32px;
    display:flex;
    flex-direction:column;
`

const TodoTemplate = ({children}) => {
  return (
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
  );
};
// App.js에서 적은게 들어감
export default TodoTemplate;


