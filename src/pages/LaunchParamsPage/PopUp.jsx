import React, { useContext, useRef, useState } from 'react';
import {
  Section, Cell, List, Button, Text
} from '@telegram-apps/telegram-ui';
import { UserContext } from '@/contexts/UserContext';
import { options, mentors } from '@/Utils/Constants';
import { Icon16StarAlt, Icon24PenOutline } from '@vkontakte/icons';
import './PopUp.css';
import { generateInvoice , getAllCourses} from '@/Utils/thinkificAPI';
import { CoursesContext } from '@/contexts/CoursesContext';
import { useTranslation } from 'react-i18next';
export function PopUp({ course_data, onClose }) {
   const { t, i18n  } = useTranslation();
  const {courses, setCourses} = useContext(CoursesContext)
  const { user } = useContext(UserContext);
  const [isClosing, setIsClosing] = useState(false);
  const [stage, setStage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const invoiceGenerated = useRef(false)

  window.Telegram.WebApp.MainButton.hide();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const handlePlanSelect = (option) => {
    setSelectedPlan(option);
    setStage(2); 
  };

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
    setStage(3);
  };

  const handleSkipMentor = () => {
    setSelectedMentor(null);
    setStage(3);
  };

  const handleConfirmPurchase = async () => {
  const price = selectedPlan.price + (selectedMentor ? selectedMentor.price : 0);

  try {
    const result = await generateInvoice(user.id, course_data.id, price, invoiceGenerated, selectedPlan.type);
    if (result) {
      // Close the popup
      handleClose();
      
      // Fetch updated courses after successful purchase
      const updatedCourses = await getAllCourses(user.id);
      setCourses(updatedCourses);
    }
  } catch (error) {
    console.error("Error during the purchase process:", error);
  }
};


  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
        className={`popup-menu ${isClosing ? 'popup-slide-out' : 'popup-slide-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <List>
          <div className="centered">
            <Text weight="1">{stage === 1 ? "Get this course" : "Overview"}</Text>
          </div>
          
          {/* Overview Section */}
       {/* Overview Section */}
<Section style={{ marginTop: 8 }}>
  <Cell subhead={t('Course_name')} children={course_data?.title} />
  
  {/* Conditionally render the selectedPlan cell */}
  {stage > 1 && selectedPlan ? (
    <Cell 
    multiline
      subhead={t('Plan')}
      children={selectedPlan.name} 
      subtitle={
        <Button
          style={{ marginTop: 8 }}
          before={<Icon24PenOutline />}
          onClick={() => setStage(1)}
          size="s"
          mode="bezeled"
          children={t('Change')}
        />
      }
    />
  ) : null}
  
  {/* Conditionally render the selectedMentor cell */}
  {stage === 3 ? (
    <Cell 
    multiline
      subhead={t('Mentor')}
      children={selectedMentor?.name || t("Not selected")} 
      subtitle={
        <Button
          style={{ marginTop: 8 }}
          before={<Icon24PenOutline />}
          onClick={() => setStage(2)}
          size="s"
          mode="bezeled"
          children={t("Change")} 
        />
      }  
    />
  ) : null}
</Section>


          
          {/* Stage 1: Select Plan */}
          {stage === 1 && (
            <div>
              <Text weight="1">{t("Plan")} </Text>
              <Section style={{ marginTop: 8 }}>
                {options.map((option) => (
                  <Cell
                    multiline
                    key={option.id}
                    subtitle={option.benefits.join(', ')}
                    children={`${option.name}`}
                    after={
                      <Button style={{marginTop:8}}
                      after={<Icon16StarAlt size={24} />}
                      size="s"
                      mode="bezeled"
                      onClick={() => handlePlanSelect(option)}
                      >
                        {t("Buy_for")} {option.stars}
                      </Button>
                    }
                  />
                ))}
              </Section>
            </div>
          )}

          {/* Stage 2: Select Mentor */}
          {stage === 2 && (
            <div>
              <Text weight="1">{t("Choose_a_menthor")}</Text>
              <Section style={{ marginTop: 8, marginBottom:"5%" }}>
                {mentors.map((mentor, index) => (
                  <Cell
                    key={index}
                    subhead={`${mentor.company}`}
                    hint={mentor.name}
                    after={
                      <Button
                        children={mentor.price}
                        after={<Icon16StarAlt />}
                        mode="bezeled"
                        size="s"
                        onClick={() => handleMentorSelect(mentor)}
                      />
                    }
                  />
                ))}
              </Section>


              {/* Skip button */}
              <Button 
                style={{ width: "100%", marginTop: "16px" }} 
                size="l" 
                mode="gray" 
                onClick={handleSkipMentor}
              >
                {t("Skip_this_step")}
              </Button>
            </div>
          )}

          {/* Stage 3: Confirm and Pay */}
          {stage === 3 && (
            <div>

              {/* Confirm and Pay button */}
              <Button 
                style={{ width: "100%", marginTop: "16px" }} 
                size="l" 
                mode="filled" 
                onClick={handleConfirmPurchase}
                after={
                  <Button
                    mode="filled"
                    size="s"
                    after={<Icon16StarAlt width="24" height="24" />}
                    children={`${t("Confirm_and_pay")} ${selectedPlan.price + (selectedMentor ? selectedMentor.price : 0)}`}
                  />
                }
              />
            </div>
          )}
        </List>
      </div>
    </div>
  );
}
