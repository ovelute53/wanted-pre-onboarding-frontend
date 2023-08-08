import React, { Children } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../utils/api';
import { SignForm } from '../../components/SignForm/SignForm';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      // 회원가입 데이터 전송
      const response = await api.post('/auth/signup', {
        email: formData.email,
        password: formData.password
      });
      console.log('API 호출 성공!!');
      console.log('응답 데이터:', response.data);

      // 회원가입이 정상적으로 완료되었을 때 /signin 경로로 이동
      navigate('/signin');
    } catch (errors) {
      console.error('API 호출 에러', errors);
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
