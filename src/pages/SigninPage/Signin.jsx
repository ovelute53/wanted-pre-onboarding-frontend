import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignForm } from '../../components/SignForm/SignForm';


function Signin (){
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      // API 주소
      const apiUrl = 'https://www.pre-onboarding-selection-task.shop/';

      // 로그인 데이터 전송
      const response = await axios.post(apiUrl, formData);
      console.log('API 호출 성공');
      console.log('응답 데이터:', response.data);

      navigate('/todo')
    } catch (error) {
      console.error('API 호출 에러', error);
    }
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <SignForm buttonText='로그인' onSubmit={handleSubmit} />
      <p><Link to='/'>회원이 아니신가요?</Link></p>
    </div>
  )
}

export default Signin;