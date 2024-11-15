import React, { useContext, useState } from "react";
import {
  Section,
  Cell,
  List,
  Button,
  Text,
  Divider,
} from "@telegram-apps/telegram-ui";
import { UserContext } from "@/contexts/UserContext";
import "./EnrolledPopUp.css";

export function EnrolledPopUp({ url, onClose }) {
  const { user } = useContext(UserContext);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // 300ms animation duration
  };

  return (
    <div className="EnrolledPopUp-overlay" onClick={handleClose}>
      <div
        className={`EnrolledPopUp-menu ${
          isClosing ? "EnrolledPopUp-slide-out" : "EnrolledPopUp-slide-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe src={url} width="100%" height="1000vh"></iframe>
      </div>
    </div>
  );
}
