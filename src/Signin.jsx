import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';


function Signin (){
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // API 주소
      const apiUrl = 'https://www.pre-onboarding-selection-task.shop/api/signin';

      // 로그인 데이터 전송
      const response = await axios.post(apiUrl, formData);
      console.log('API 호출 성공');
      console.log('응답 데이터:', response.data);
    } catch (error) {
      console.error('API 호출 에러', error);
    }
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit}>
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
        </div>
        <button type="submit" data-testid="signin-button">로그인</button>        
      </form>
    </div>
  )
}

export default Signin;