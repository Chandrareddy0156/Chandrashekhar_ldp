import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/home')}>
      Login
    </button>
  );
}
export default Login;