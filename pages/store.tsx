import Breadcrumb from "../components/Breadcrumb"; // ✅ Add this at the top
import { CSSProperties } from "react";

const Store: React.FC = () => {
  return (
    <div style={containerStyle}>
      {/* ✅ Display breadcrumb navigation */}
      <Breadcrumb />

      <h1 style={titleStyle}>🛍️ Shop Cultural Items</h1>
      <p style={messageStyle}>
        Stay tuned! Discover authentic Ethiopian and Kambata treasures right here, 
        and support our page in the process.
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
};

const titleStyle: CSSProperties = {
  fontSize: "2rem",
  color: "#333",
  marginBottom: "15px",
};

const messageStyle: CSSProperties = {
  fontSize: "1.2rem",
  color: "#555",
  textAlign: "center",
  marginTop: "30px",
};

export default Store;
