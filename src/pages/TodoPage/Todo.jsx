import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTodos, createTodo, deleteTodo, updateTodo } from '../../utils/todoUtils';
// import { api } from '../../utils/api';

function Todo (){
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(-1);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    // Todo 항목을 조회하여 초기화
    fetchTodos();
  }, []); 

  const fetchTodos = async () => {
    const todos = await getTodos();
    setTodo(todos);
  };

  useEffect(() => {
    // 로컬 스토리지에서 투두리스트 데이터 가져오기
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo) {
      setTodo(storedTodo);
    }
  }, []);

  useEffect(() => {
    // 투두리스트 변경 시 로컬 스토리지에 저장하기
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const handleCreateTodo = async () => {
    await createTodo(newTodo);
    fetchTodos();
    setNewTodo('');
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleUpdateTodo = async (id) => {
    await updateTodo(id, editValue);
    fetchTodos();
    setEditTodo(-1);
    setEditValue('');
  };

  return (
    <InputBox>
      <h2>할일 목록</h2>
      <div>
        <InputStyle 
          type="text" 
          value={newTodo} 
          onChange={(e) => {setNewTodo(e.target.value)}}
          data-testid="new-todo-input"
          placeholder='할 일을 입력해주세요' 
          />
        <ButtonStyle onClick={handleCreateTodo} data-testid="new-todo-add-button">추가</ButtonStyle>
      </div>
      <ul>
        {todo?.map((todoItem, idx) => (
          <li key={todoItem.id}>
            <CheckStyle type="checkbox" />
            {idx === editTodo ? (
              <label>
                <InputStyle 
                  type='text'
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  data-testid="modify-input"
                />
                <ButtonStyle onClick={(e) => handleUpdateTodo(todoItem.id)} data-testid="submit-button">제출</ButtonStyle>
                <ButtonStyle onClick={(e) => {setEditTodo(-1); setEditValue('');}} data-testid="cancel-button">취소</ButtonStyle>
            </label>
            ) : (
              <label>
                {(idx + 1) + '. '}{todoItem.todo}
                <ButtonStyle onClick={() => {setEditTodo(idx); setEditValue(todoItem.todo);}} data-testid="modify-button">수정</ButtonStyle>
                <ButtonStyle onClick={() => handleDeleteTodo(todoItem.id)}data-testid="delete-button">삭제</ButtonStyle>
              </label>
            )}
          </li>
        ))}
      </ul>
    </InputBox>
  );
}

const InputBox = styled.div`
  // background-color: red;
  width: 500px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`

const InputStyle = styled.input`
  padding: 10px;
  margin-bottom: 15px; 
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
`

const CheckStyle = styled.input`
  margin-right: 10px;
`

const ButtonStyle = styled.button`
  margin-top: 20px;
  margin-left: 15px;
  padding: 8px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`

export default Todo;