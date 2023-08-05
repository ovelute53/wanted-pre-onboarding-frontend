//validation util

// 이메일 유효성 검사
export const validateEmail = (email) => {
  if (!email.includes('@')) {
    return '이메일 형식이 올바르지 않습니다.';
  } 
  return '';
};

// 비밀번호 유효성 검사
export const validatePassword = (password) => {
  if (password.length < 8) {
    return '비밀번호는 8자리 이상이어야 합니다.';
  }
  return '';
};