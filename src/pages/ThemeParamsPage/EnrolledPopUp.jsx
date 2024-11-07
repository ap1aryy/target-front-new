import React, { useContext, useState } from 'react';
import {
  Section, Cell, List, Button, Text, Divider
} from '@telegram-apps/telegram-ui';
import { UserContext } from '@/contexts/UserContext';
import { options, mentors } from './Constants';
import './EnrolledPopUp.css';

export function EnrolledPopUp({ course_data, onClose }) {
  const { user } = useContext(UserContext);
  const [isClosing, setIsClosing] = useState(false);
  const [stage, setStage] = useState(1); // Tracks current stage (1, 2, or 3)
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // 300ms animation duration
  };

  const handlePlanSelect = (option) => {
    setSelectedPlan(option);
    setStage(2); // Move to stage 2
  };

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
    window.Telegram.WebApp.MainButton.text = "Confirm and pay " + selectedPlan.price + " ⭐";
    setStage(3); // Move to stage 3
  };

  const handleSkipMentor = () => {
    setSelectedMentor(null);
    setStage(3);
  };

  const handleChangeStage = (targetStage) => {
    setStage(targetStage);
  };

  return (
    <div className="EnrolledPopUp-overlay" onClick={handleClose}>
      <div
        className={`EnrolledPopUp-menu ${isClosing ? 'EnrolledPopUp-slide-out' : 'EnrolledPopUp-slide-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        
      </div>
    </div>
  );
}
