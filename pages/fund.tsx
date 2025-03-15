import Link from 'next/link';
import { CSSProperties } from 'react';

const Fund: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>💰 Support our page as we work to enhance 
          and improve your experience! 
        </h1>
        
        <p style={textStyle}>
          We are the Kambata Community based in Atlanta, 
          dedicated to preserving, documenting, and sharing 
          the untold history of the Kambata people. Your support is 
          essential in ensuring that future generations—regardless of 
          where they live—can access and celebrate their rich heritage. 
          Join us in this important mission!
        </p>
        
        {/* ✅ CashApp Donation Buttons */}
        <div style={buttonContainer}>
          {/* One-Time Donation */}
          <a
            href="https://cash.app/$kambatapage" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={primaryButtonStyle}>💵 Donate via CashApp</button>
          </a>

          {/* Recurring Donations (Guide Users) */}
          <p style={recurringTextStyle}>
            Want to support monthly? You can set up a <strong>recurring donation</strong> in your <strong>CashApp 
            settings</strong> to send a fixed amount every month to support the community development <strong>$kambatapage</strong>.
          </p>

          {/* ✅ Back to Home */}
          <Link href="/">
            <button style={secondaryButtonStyle}>⬅️ Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Styling for the page (Typed with CSSProperties)
const containerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
  padding: '20px',
};

const cardStyle: CSSProperties = {
  padding: '40px',
  maxWidth: '500px',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const titleStyle: CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0072ff',
  marginBottom: '15px',
};

const textStyle: CSSProperties = {
  fontSize: '16px',
  color: '#333',
  marginBottom: '15px',
  lineHeight: '1.6',
};

const recurringTextStyle: CSSProperties = {
  fontSize: '14px',
  color: '#555',
  marginTop: '10px',
  fontStyle: 'italic',
};

const buttonContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
};

const primaryButtonStyle: CSSProperties = {
  padding: '12px 20px',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  background: '#0070ba', // CashApp blue
  color: 'white',
  transition: 'background-color 0.3s ease',
};

const secondaryButtonStyle: CSSProperties = {
  padding: '12px 20px',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  background: '#28a745', // Green
  color: 'white',
  transition: 'background-color 0.3s ease',
};

export default Fund;
