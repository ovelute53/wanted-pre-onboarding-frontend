import React, { Children, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { SignForm } from '../../components/SignForm/SignForm';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      //API 주소
      const apiUrl = 'https://www.pre-onboarding-selection-task.shop/';

      // 회원가입 데이터 전송
      const response = await axios.post(apiUrl, formData);
      console.log('API 호출 성공!!');
      console.log('응답 데이터:', response.data);

      // 회원가입이 정상적으로 완료되었을 때 /signin 경로로 이동
      navigate('/signin');
    } catch (error) {
      console.error('API 호출 에러', error);
    }
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <SignForm buttonText='회원가입' onSubmit={handleSubmit} >{Children}</SignForm>
      <p><Link to='/signin'>이미 회원이신가요?</Link></p>
    </div>
  );
}

export default Signup;
