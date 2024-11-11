import React, { useContext, useRef, useState } from 'react';
import {
  Section, Cell, List, Button, Text
} from '@telegram-apps/telegram-ui';
import { UserContext } from '@/contexts/UserContext';
import { options } from '@/Utils/Constants';
import { Icon16StarAlt, Icon24PenOutline, Icon16Clear } from '@vkontakte/icons';
import './PopUp.css';
import { generateInvoice } from '@/Utils/thinkificAPI';
import { CoursesContext } from '@/contexts/CoursesContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function PopUp({ course_data, onClose }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { courses, setCourses } = useContext(CoursesContext);
  const { user } = useContext(UserContext);
  const [isClosing, setIsClosing] = useState(false);
  const [stage, setStage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const invoiceGenerated = useRef(false);

  window.Telegram.WebApp.MainButton.hide();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const handlePlanSelect = (option) => {
    setSelectedPlan(option);
    setStage(3); // Skip directly to the payment confirmation stage
  };

  const handleConfirmPurchase = async () => {
    const price = selectedPlan.price;

    try {
      const result = await generateInvoice(user.id,
        course_data.id,
        price,
        invoiceGenerated,
        selectedPlan.type,
        async () => {
          if (i18n.language === 'ru') {
            alert(`Курс ${course_data?.title} был добавлен в ваш аккаунт`);
          } else {
            alert(`Course ${course_data?.title} was added to your account`);
          }
          window.Telegram.WebApp.MainButton.hide();
          navigate('/');
          handleClose();
          
        });
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
          <div className="header-pop">
            <Text weight="1">{stage === 1 ? "Get this course" : "Overview"}</Text>
            <span className="" onClick={handleClose}><Icon16Clear /></span>
          </div>
          <Section style={{ marginTop: 8 }}>
            <Cell subhead={t('Course_name')} style={{ pointerEvents: 'none', border: 'none', marginBottom: 5 }} children={course_data?.title} />

            {/* Conditionally render the selectedPlan cell */}
            {stage > 1 && selectedPlan ? (
              <Cell style={{ borderColor: 'hsl(0deg 0% 0% / 0%)' }}
                className='custom-cell'
                multiline
                subhead={t('Plan')}
                children={t(selectedPlan.name)}
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
          </Section>

          {/* Stage 1: Select Plan */}
          {stage === 1 && (
            <div>
              <Text weight="1">{t("Plan")}</Text>
              <Section style={{ marginTop: 8 }}>
                {options.map((option) => (
                  <Cell
                    multiline
                    key={option.id}
                    subtitle={option.benefits.map(benefit => t(benefit)).join(', ')}
                    children={t(option.name)}
                    after={
                      <Button
                        style={{ marginTop: 8 }}
                        after={<Icon16StarAlt />}
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

          {/* Stage 3: Confirm and Pay */}
          {stage === 3 && (
            <div>
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
                    children={`${t("Confirm_and_pay")} ${selectedPlan.price}`}
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
