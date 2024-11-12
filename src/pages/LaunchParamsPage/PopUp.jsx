import React, { useContext, useRef, useState } from 'react';
import {
  Section, Cell, List, Button, Text
} from '@telegram-apps/telegram-ui';
import { UserContext } from '@/contexts/UserContext';
import { options } from '@/Utils/Constants';
import { Icon16StarAlt, Icon24PenOutline, Icon16Clear } from '@vkontakte/icons';
import './PopUp.css';
import { generateInvoice, getAllCourses } from '@/Utils/thinkificAPI';
import { CoursesContext } from '@/contexts/CoursesContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
export function PopUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const course_data = location.state?.course;
  const { t, i18n } = useTranslation();
  const { courses, setCourses } = useContext(CoursesContext);
  const { user } = useContext(UserContext);
  const [stage, setStage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const invoiceGenerated = useRef(false);

  window.Telegram.WebApp.MainButton.hide();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.BackButton) {
      window.Telegram.WebApp.BackButton.onClick(handleClose);
      window.Telegram.WebApp.BackButton.show();
    }


    return () => {
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.BackButton) {
        window.Telegram.WebApp.BackButton.offClick(handleClose);
        window.Telegram.WebApp.BackButton.hide();
      }
    };
  }, []);

  const handleClose = () => {
    amplitude.track('close_buy_course');
    navigate(`/courses/${course_data.id}`, { state: { course: course_data } });
  };

  const handlePlanSelect = (option) => {
    amplitude.track('select_plan');
    setSelectedPlan(option);
    setStage(3); 
  };

  const handleConfirmPurchase = async () => {
  const price = selectedPlan.price;
  amplitude.track({ event_type: 'click_buy', price });
  try {
    const result = await generateInvoice(user.id, course_data.id, price, invoiceGenerated, selectedPlan.type,user.startappParams, async () => {
          if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.MainButton) {
            window.Telegram.WebApp.MainButton.hide();
             window.Telegram.WebApp.MainButton.text = "You have new course!";
          }
      try {
        
        const courses = await getAllCourses(user.id);

        const courseDetails = courses.find(course => course.id === course_data.id);
        if (!courseDetails) {
          console.error("Course not found");
          return;
        }

      if (i18n.language === 'ru') {
        alert(`${t(course_data.id.toString() + '.Course_name')} был добавлен в ваш аккаунт`);
      } else {
        alert(`${t(course_data.id.toString() + '.Course_name')} was added to your account`);
      }

        navigate(`/courses/${course_data.id}`, { state: { course: courseDetails } });

      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    });
  } catch (error) {
    console.error("Error during the purchase process:", error);
  }
};
  return (
      <div
        className={`popup-menu`}
        onClick={(e) => e.stopPropagation()}
      >
        <List>
         
          <Section style={{ marginTop: 8 }}>
            <Cell subhead={t('Course_name')} style={{ pointerEvents: 'none', border: 'none', marginBottom: 5 }} children={`${t(course_data.id.toString() + '.Course_name')}`} />

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
  );
}
