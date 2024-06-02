import Head from 'next/head';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <LoginForm />
    </div>
  );
};

export default Login;
