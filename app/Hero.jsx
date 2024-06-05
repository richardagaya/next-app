// components/Hero.js
import Link from 'next/link';

const Hero = () => (
  <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 text-center">
    <h1 className="text-4xl font-bold">Welcome to My Landing Page</h1>
    <p className="mt-4 text-lg">This is a simple landing page created with Next.js</p>
    <Link href="/login" className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
      Go to Login
    </Link>
    <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Get Started</button>
  </div>
);

export default Hero;
 

