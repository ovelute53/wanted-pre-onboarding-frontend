import { Link, useNavigate } from 'react-router-dom';
import { SignForm } from '../../components/SignForm/SignForm';
import { api } from '../../utils/api';

function Signin (){
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      // 로그인 데이터 전송
      const response = await api.post('/auth/signin', {
        email: formData.email,
        password: formData.password
      });
      console.log('API 호출 성공');
      console.log('응답 데이터:', response.data);

      localStorage.setItem('access_token', response.data.access_token);

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