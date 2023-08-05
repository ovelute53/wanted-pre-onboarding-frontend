import React, { useState } from 'react';
import styled from 'styled-components';

export function SignForm ({buttonText, onSubmit}){
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      return '이메일 형식이 올바르지 않습니다.';
    } 
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return '비밀번호는 8자리 이상이어야 합니다.';
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 아이디 비밀번호 유효성 검사
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    //부모 컴포넌트로 자식 전달
    onSubmit(formData);

  }
  return (
    <form onSubmit={handleSubmit}>
      <InputBox>
        <LabelStyle>이메일</LabelStyle>
        <InputStyle 
          type="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
          data-testid='email-input'
          required
        />
      </InputBox>
      <InputBox>
        <LabelStyle>비밀번호</LabelStyle>
        <InputStyle 
          type="password"
          name='password'
          value={formData.password}
          onChange={handleChange}
          data-testid='password-input'
          required
        />
      </InputBox>
      {errors.email && <p>{errors.email}</p>}
      {errors.password && <p>{errors.password}</p>}
      <ButtonBox>
        <ButtonStyle type="submit">{buttonText}</ButtonStyle>
      </ButtonBox>
      
    </form>
  )
}

const InputBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`

const ButtonBox = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const InputStyle = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
`

const ButtonStyle = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`

const LabelStyle = styled.label`
  margin-top: 10px;
  color: #333;
  font-weight: bold;
`