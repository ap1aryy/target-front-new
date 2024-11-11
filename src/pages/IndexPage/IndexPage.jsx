import { Section, Cell, Title, Link, Card, Info, Placeholder, Avatar, Badge, Divider, Button } from '@telegram-apps/telegram-ui';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './IndexPage.css';

import { UserContext } from '@/contexts/UserContext';
import WebApp from '@twa-dev/sdk';

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

  const courseConfig  = {
    "2925675": {
      img: "https://import.cdn.thinkific.com/999858/r676HFMETTqeDFcWXdP6_photo_2024-11-05_15-03-56.jpg",
      chapters: "9 chapters",
      videos: "32 videos",
      duration: "15 hours"
    },
    "2926478": {
      img: "ProProduct",
      chapters: "3 chapters",
      videos: "0 videos",
      duration: "3.5 hours"
    },
    "2930629": {
      img: "https://import.cdn.thinkific.com/999858/1S51nlgTuqOqzfwOyBvy_image_2024-11-10_23-40-27.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930630": {
      img: "https://import.cdn.thinkific.com/999858/A8eR3MtBT7eVWGIzTOjR_image_2024-11-10_23-40-39.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930631": {
      img: "https://import.cdn.thinkific.com/999858/bNYERdoYSOa5r1mgZpPb_image_2024-11-10_23-40-51.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930632": {
      img: "https://import.cdn.thinkific.com/999858/AfSeEPtIQaO17HA4krxu_image_2024-11-10_23-41-01.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    // Добавьте данные для других курсов здесь
  };
  

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
 WebApp.BackButton.isVisible && WebApp.BackButton.hide();
 const filteredCourses = courses?.filter(course => course.id !== 2926478);


console.log(i18n.language); 
  return (
    <div>
     <div style={{
               padding:16, gap:8
            }}>
<Title weight="2" style={{
              marginBottom:4
            }}
        > {t('Popular_courses')}</Title>
    {filteredCourses?.map(course => (
        <Card
          key={course.id}
          style={{
            width: "100%",
            textAlign: "left",
            height: "265px",
            marginTop: 8
          }}
          onClick={() => handleGoToCourse(course)}
        >
          <img
            alt="Course Image"
            src={courseConfig[course.id]?.img || "default_image_path_here"}
            style={{
              display: 'block',
              height: "170px",
              objectFit: 'cover',
              width: "100%"
            }}
          />
          <Card.Cell readOnly
            subtitle={
              // <div>
              //   {t('Course')}
              //   <div className='card-items-inf'>
              //     <div>{courseConfig[course.id]?.chapters || "N/A"}</div>
              //     •
              //     <div>{courseConfig[course.id]?.videos || "N/A"}</div>
              //     •
              //     <div>{courseConfig[course.id]?.duration || "N/A"}</div>
              //   </div>
              // </div>
              <div>
  {t('Course')}
  <div className='card-items-inf'>
    <div>{courseConfig[course.id]?.chapters || "N/A"}</div>
    •
    {courseConfig[course.id]?.videos !== "0 videos" && (
      <>
        <div>{courseConfig[course.id].videos}</div>
        •
      </>
    )}
    <div>{courseConfig[course.id]?.duration || "N/A"}</div>
  </div>
</div>

            }
          >
          {t(course.id.toString() + '.Course_name')}
          </Card.Cell>
        </Card>
      ))}
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

      <Section style={{ height: "100%", margin:" 0 16px 80px 16px"}}>

        {/* <Section
          header={
            <Cell
              style={{ pointerEvents: 'none' }} 
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
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar
              src='https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png'
              size={48} style={{borderRadius: "5px"}} />}
            subtitle={`3 ${t("chapters2")}`}
            onClick={() => handleGoToCourse(courses[1])}
          >
            ProProduct
          </Cell>

        </Section>

        <Section
          header={
            <Cell
               style={{ pointerEvents: 'none' }} 
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
               style={{ pointerEvents: 'none' }} 
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
            subtitle={`3  ${t("chapters2")}`}
            onClick={() => handleGoToCourse(courses[1])}
          >
            ProProduct
          </Cell>

        </Section> */}
        
        <Cell
          style={{border:'none',alignItems:"flex-start"}}
              hint=""
              interactiveAnimation=""
              subhead=""
          titleBadge=""
          children={t('more_courses')}
          subtitle={t('more_courses_soon')}
          description={<Button style={{borderRadius:40,margin:"8px 0",height:"5vh"}}>{t('follow_us')}</Button>}
          after=''
          before={
                    <Avatar
                      size={48}
                      style={{ borderRadius: "5px", marginTop:"30%" }}
                      src="https://i.ibb.co/CtPSccK/photo-2024-11-10-13-12-28.jpg" 
                    />
                  }
        onClick={() => window.open(i18n.language === 'ru' ? "https://t.me/thetarget_courses_ru" : "https://t.me/thetarget_courses", "_blank")}

        >
        </Cell>
      </Section>
        {!courses &&
        <Placeholder style={{paddingTop: 20, paddingBottom: 20}} description="Gotcha! That's the end!">
          <img
            width="75%"
            alt="Telegram sticker"
            src="https://s1.gifyu.com/images/Sy9DJ.gif"
          />
        </Placeholder>  }

    </div>
  );
}
