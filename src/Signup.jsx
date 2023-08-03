import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
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

    try {
      //API 주소
      const apiUrl = 'https://www.pre-onboarding-selection-task.shop/api/signup';

      // 회원가입 데이터 전송
      const response = await axios.post(apiUrl, formData);
      console.log('API 호출 성공!!');
      console.log('응답 데이터:', response.data);
    } catch (error) {
      console.error('API 호출 에러', error);
    }
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label>이름</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            data-testid="username-input"
            required
          />
        </div>
        <div className='input-box'>
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="email-input"
            required
          />
        </div>
        <div className='input-box'>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            data-testid="password-input"
            required
          />
          <div className="error">{errors.password}</div>
        </div>
        <button type="submit" data-testid="signup-button" disabled={!!errors.email || !!errors.password}>회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
