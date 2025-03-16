import Breadcrumb from "../components/Breadcrumb"; // ✅ Add this at the top
import { CSSProperties } from "react";

const Store: React.FC = () => {
  return (
    <div style={containerStyle}>
      {/* ✅ Display breadcrumb navigation */}
      <Breadcrumb />

      <h1 style={titleStyle}>🛍️ Coming Soon: Shop Cultural Treasures</h1>
      <p style={messageStyle}>
        We are bringing authentic cultural items right to you! 🎉  
        Explore a unique collection of traditional clothing, handcrafted accessories, and meaningful artifacts that celebrate our rich heritage.  
        <br />
        <br />
        ✨ Stay tuned! Our shop is launching soon. 
        Be the first to explore and order your favorite items. 
        Don’t miss out!
      </p>
    </div>
  );
};

// ✅ Typed Styles
const containerStyle: CSSProperties = {
  padding: "20px",
  maxWidth: "900px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
};

const titleStyle: CSSProperties = {
  fontSize: "2.2rem",
  color: "#222",
  marginBottom: "15px",
  fontWeight: "bold",
};

const messageStyle: CSSProperties = {
  fontSize: "1.3rem",
  color: "#444",
  marginTop: "30px",
  lineHeight: "1.6",
};

export default Store;
