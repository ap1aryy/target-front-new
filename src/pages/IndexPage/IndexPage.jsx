import { Section, Cell, Title, Link, Card, Info, Placeholder, Avatar, Badge, Divider } from '@telegram-apps/telegram-ui';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './IndexPage.css';

import { UserContext } from '@/contexts/UserContext';


import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { getAllCourses } from '@/Utils/thinkificAPI';

import {Icon20ChevronRightOutline, Icon20FireAltOutline, Icon24Clock } from '@vkontakte/icons';
import { CoursesContext } from '@/contexts/CoursesContext';
/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
 const { t, i18n  } = useTranslation();

  const {user, setUser} = useContext(UserContext)
  const {courses, setCourses} = useContext(CoursesContext)
  const navigate = useNavigate()
  window.Telegram.WebApp.MainButton.hide(); 
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseList = await getAllCourses(user.id);
        setCourses(courseList);
      } catch (error) {
        console.error('Не удалось загрузить курсы:', error);
      }
    };

    fetchCourses();
  }, [user]);
  
  const handleGoToCourse = (course) => {
        navigate(`/courses/${course.id}`, { state: { course } });
  }

  if (!courses) {
        return <Spinner/>;  // Показать текст загрузки, пока данные курса не загружены
  }

console.log(i18n.language); 
  return (
    <div>
      <div style={{
              padding:16, gap:8
            }}>
<Title weight="2" style={{
              marginBottom:4
            }}
        > {t('best_choice')}</Title>
<Card
            style={{
              width: "100%",
              textAlign: "left",
              height: "250px",
              marginTop:8
            }}
            onClick={() => handleGoToCourse(courses[0])}
          >
            <img
              alt="Course Image"
              src="https://i.ibb.co/zmv0JD2/image-2024-11-06-19-37-49.png"
              style={{
                display: 'block',
                height: "170px", 
                objectFit: 'cover',
                width: "100%"
              }}
            />
            <Card.Cell readOnly
              subtitle={<div>
                {t('Course')}
                
              </div>}
            >
            TON Blockchain & Telegram
            </Card.Cell>
          </Card>
          </div>
      {/* <List>

        <Section
          header={<Cell
           
            before=""
            description=""
            hint=""
            interactiveAnimation=""
            subhead=""
            subtitle=""
            titleBadge=""
          >
            Choise of the day
          </Cell>} />




            <div className='centered'>
          {courses.map((course, index) => (
          <Card
            key={index}
            style={{
              width: "85%",
              textAlign: "left",
              height: "250px" 
            }}
            onClick={() => handleGoToCourse(course)}
          >
            <img
              alt="Course Image"
              src="https://i.ibb.co/zmv0JD2/image-2024-11-06-19-37-49.png"
              style={{
                display: 'block',
                height: "170px", 
                objectFit: 'cover',
                width: "100%"
              }}
            />
            <Card.Cell readOnly
              subtitle={<div>
                Course
                
              </div>}
            >
              {course.title}
            </Card.Cell>
          </Card>
        ))}
</div>
      </List> */}

      <Section style={{ height: "100%", marginBottom:80}}>

        <Section
          header={
            <Cell
             
              before={<Icon20FireAltOutline style={{marginRight:-10}}/>}
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              {t('Popular_courses')}
            </Cell>
          }
        >
          
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar 
              size={48}
              style={{borderRadius: "5px"}} 
              src='https://i.ibb.co/zrJfDsc/image-2024-11-07-04-31-19.png'
            />}
            subtitle={`9 ${t("chapters")}`}
            onClick={() => handleGoToCourse(courses[0])}
          >
            TON Blockchain & Telegram
          </Cell>
{/* https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png */}
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar
              src='https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png'
              size={48} style={{borderRadius: "5px"}} />}
            subtitle={`3 ${t("chapters")}`}
            onClick={() => handleGoToCourse(courses[1])}
          >
            ProProduct
          </Cell>

        </Section>

        <Section
          header={
            <Cell
              
              before=""
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              TON & Telegram {t("courses")}
            </Cell>
          }
        >
          
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar 
              size={48}
              style={{borderRadius: "5px"}} 
              src='https://i.ibb.co/zrJfDsc/image-2024-11-07-04-31-19.png'
            />}
            subtitle={`9 ${t("chapters")}`}
            onClick={() => handleGoToCourse(courses[0])}
          >
            TON Blockchain & Telegram
          </Cell>

          <Cell
          before={<Avatar 
            size={48}
            style={{borderRadius: "5px"}} 
            children={<Icon24Clock />}
          />}
          subtitle={
            <Link>{t('Coming_sson')}</Link>
          }
        >
          Telegram Mini Apps
        </Cell>

        </Section>

        <Section
          header={
            <Cell
              
              before=""
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              Product Management {t('courses')}
            </Cell>
          }
        >
          
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar
              src='https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png'
              size={48} style={{borderRadius: "5px"}} />}
            subtitle={`3 ${t("chapters")}`}
            onClick={() => handleGoToCourse(courses[1])}
          >
            ProProduct
          </Cell>

        </Section>

        <Section>
        <Placeholder style={{paddingTop: 20, paddingBottom: 20}} description="Gotcha! That's the end!">
          <img
            width="75%"
            alt="Telegram sticker"
            src="https://s1.gifyu.com/images/Sy9DJ.gif"
          />
        </Placeholder>  
      </Section>

      </Section>
    </div>
  );
}
