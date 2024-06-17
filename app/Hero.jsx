// components/Hero.js
import Link from 'next/link';

const Hero = () => (
  <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 text-center px-4">
    <h1 className="text-4xl font-bold">Welcome to Tech Craze Shop</h1>
    <p className="mt-4 text-lg">Your one-stop shop for all computer software solutions.</p>
    <p className="mt-2 text-md">We provide a wide range of software products to boost your business efficiency and productivity.</p>
    <Link href="/login" className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
        Go to Login
    </Link>
    <Link href="/signup" className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
        Sign Up
    </Link>
    <p className="mt-6 text-md">Stay updated with the latest offers and updates:</p>
    <form className="mt-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
    <div className="mt-6">
      <Link href="/products" className="mx-2 text-blue-600 hover:underline">
        Products
      </Link>
      <Link href="/about" className="mx-2 text-blue-600 hover:underline">
        About Us
      </Link>
      <Link href="/contact" className="mx-2 text-blue-600 hover:underline">
        Contact
      </Link>
    </div>
  </div>
);
export default Hero;