import { useEffect } from "react";

const AdBanner: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && "adsbygoogle" in window) {
      try {
        (window as unknown as { adsbygoogle: { push: () => void } }).adsbygoogle.push();
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "100px", margin: "20px 0" }}
      data-ad-client="ca-pub-4500183381967931"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
