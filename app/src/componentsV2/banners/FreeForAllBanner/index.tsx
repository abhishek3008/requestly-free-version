import React, { useEffect, useState } from "react";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import "./index.scss";

export const FreeForAllBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("__rq_free_forall_banner_dismissed");
    if (!isDismissed) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("__rq_free_forall_banner_dismissed", "true");
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="free-forall-banner">
      <div className="free-forall-banner-content">
        <span className="free-forall-banner-badge">ANNOUNCEMENT</span>
        <span className="free-forall-banner-text">
          🚀 Requestly is now <strong>Free for All!</strong> All premium limits and features are unlocked for everyone.
        </span>
      </div>
      <IoMdClose className="free-forall-banner-close-btn" onClick={handleDismiss} />
    </div>
  );
};
