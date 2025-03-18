import { useEffect } from "react";

const AdBanner: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        ((window as any).adsbygoogle as { push: (arg?: object) => void }).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "250px", margin: "20px 0" }}
      data-ad-client="ca-pub-4500183381967931"
      data-ad-slot="1234567890" // ✅ Replace with your actual Ad Slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;
