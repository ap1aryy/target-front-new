import { Section, Cell, Text, Placeholder, Card, Info, AvatarStack, Avatar, Badge, Divider } from '@telegram-apps/telegram-ui';
import {Icon20ChevronRightOutline, Icon20FireAltOutline} from '@vkontakte/icons';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Enrolled.css';

import { UserContext } from '@/contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { getAllCourses } from '@/Utils/thinkificAPI';

import { EnrolledPopUp } from './EnrolledPopUp';
import { CoursesContext } from '@/contexts/CoursesContext';
/**
 * @returns {JSX.Element}
 */
export function EnrollmentsPage() {
  const { user } = useContext(UserContext);
  const { courses, setCourses } = useContext(CoursesContext);
  
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

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpUrl, setPopUpUrl] = useState('');
  const navigate = useNavigate();

  window.Telegram.WebApp.MainButton.hide();

  const handleGoToCourse = (course) => {
    navigate(`/courses/${course.id}`, { state: { course } });
  };

  const handleOpenPopUp = (url) => {
    setPopUpUrl(url);
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  if (!courses) {
    return <Spinner />;
  }

  return (
    <div>
      <div style={{
              padding:16, gap:8
            }}>


<Text weight="1">You</Text>

<Section
  style={{
    marginTop: 8,
    borderRadius:5
  }}
>
  
  <Cell 
    subtitle="Researcher"
    children={user.first_name}
    before={
      <Avatar size={42} src={`https://t.me/i/userpic/320/${user.username}.jpg`} />
    }
  />
      
</Section>

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
             
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              Enrolled courses
            </Cell>
          }
        >
          
          {Array.isArray(courses) && courses.length > 0 && 
  courses.filter(course => course.my === true) // Only show courses where `my` is true
    .map((course, index) => (
      <Cell
        key={index}
        after={<Icon20ChevronRightOutline />}
        before={
          <Avatar
            size={48}
            style={{ borderRadius: "5px" }}
            src="https://i.ibb.co/zrJfDsc/image-2024-11-07-04-31-19.png"
          />
        }
        subtitle="9 chapters"
        onClick={() => handleGoToCourse(course)}
      >
        {course.title}
      </Cell>
    ))}

{/* https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png */}

        </Section>
        <Section>
        <Placeholder style={{paddingTop: 20, paddingBottom: 20}} description="Gotcha! That's the end!">
          <img
            width="75%"
            alt="Telegram sticker"
            src='https://s1.gifyu.com/images/Sy9DJ.gif'
          />
        </Placeholder>  
      </Section>

      </Section>
      {isPopUpOpen && (
        <EnrolledPopUp url={popUpUrl} onClose={handleClosePopUp} />
      )}
    </div>
  );
}
