import Breadcrumb from '../components/Breadcrumb';  // ✅ Add this at the top

export default function Store() {
  return (
    <div style={containerStyle}>
      {/* ✅ Display breadcrumb navigation */}
      <Breadcrumb />

      <h1 style={titleStyle}>🛍️ Shop Cultural Items</h1>
      <p style={messageStyle}>Stay tuned! Discover authentic Ethiopian and Kambata treasures right here, 
        and support our page in the process.</p>
    </div>
  );
}

// Style for container
const containerStyle = {
  padding: '20px',
  maxWidth: '900px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
};

// Style for the title
const titleStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '15px',
};

// Style for the message
const messageStyle = {
  fontSize: '1.2rem',
  color: '#555',
  textAlign: 'center',
  marginTop: '30px',
};
