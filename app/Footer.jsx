// components/Footer.js
const Footer = () => (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Landing Page. All rights reserved.</p>
    </footer>
  );
  
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    background: '#333',
    color: '#fff',
  };
  
  export default Footer;
  