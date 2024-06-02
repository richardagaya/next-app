// components/Hero.js
const Hero = () => (
    <div style={heroStyle}>
      <h1>Welcome to My Landing Page</h1>
      <p>This is a simple landing page created with Next.js</p>
      <button style={buttonStyle}>Get Started</button>
    </div>
  );
  
  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    background: '#f5f5f5',
    textAlign: 'center',
  };
  
  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    background: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
  export default Hero;
  