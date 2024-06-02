import Head from 'next/head';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Create a new account" />
      </Head>
      <SignupForm />
    </div>
  );
};

export default Signup;
