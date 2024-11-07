import { Section, Chip, Title, Cell, List, Button, Image, Card, Info, AvatarStack, Avatar, Badge, Divider, Placeholder, Subheadline, Text} from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link.jsx';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { UserContext } from '@/contexts/UserContext';

import { getAllChapters } from '@/Utils/thinkificAPI';

import { PopUp } from '../LaunchParamsPage/PopUp';

/**
 * @returns {JSX.Element}
 */
import { useLocation } from 'react-router-dom';

export function CoursePage() {
  const location = useLocation();
  const course = location.state?.course;
  const [chapters, setChapters] = useState([]);
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  
    const handleGetAllChapters = async () => {
      try {
        const courseList = await getAllChapters(course.id, user.id);
        setChapters(courseList);
      } catch (error) {
        console.error("Не удалось загрузить главы:", error);
      }
    };
  
    // Настройка кнопки Telegram WebApp
    window.Telegram.WebApp.MainButton.text = "Get course";
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);
  
    handleGetAllChapters();
  
    return () => {
      // Очистка обработчика события при размонтировании
      window.Telegram.WebApp.MainButton.offClick(handleOpenPopUp);
    };
  }, [course.id, user, navigate]);
  

  const handleOpenPopUp = () => setPopUpOpen(true);
  const handleClosePopUp = () => setPopUpOpen(false);

  return (
    <div>

      <div style={{ width: "100%", maxWidth: "500px", overflow: "hidden", margin: "0 auto" }}>
        <img 
          src="https://i.ibb.co/zmv0JD2/image-2024-11-06-19-37-49.png"
          width="100%"
          height="150px"
          style={{ objectFit: "cover", display: "block" }}
        />
      </div>
      <List>

        <Title
            level="1"
            weight="2"
        >
          {course.title}
        </Title>
        <Text
          weight="3"
        >Course</Text>

        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 8
          }}
        >
          <Chip mode="mono">
            Digital
          </Chip>
          <Chip mode="mono">
            TON
          </Chip>
          <Chip mode="mono">
            Telegram
          </Chip>
        </div>

        {/* <Info
          avatarStack={
            <Info avatarStack={
              <AvatarStack>
                <Avatar size={28} />
                <Avatar size={28} />
                <Avatar size={28} />
              </AvatarStack>
              } 
              type="avatarStack"
            >
              1K+ Enrolled
            </Info>}
          type="avatarStack"
        /> */}

        <Card>
          <Cell multiline subhead="Description" children={course.description} />
        </Card>

        <div>

          <Text weight="1">Chapters</Text>

          <Section style={{ marginTop: 8 }}>
            {chapters.map((chapter, index) => (
              <div>
                <Cell
                  key={index}
                  subhead={`Chapter ${index + 1}`}
                  children={chapter.name}
                  
                />
                <Divider/>
              </div>
            ))}
          </Section>
          </div>
        <div>

          <Text weight="1">Mentors</Text>

          <Section
            style={{
              marginTop: 8
            }}
          >
            
            <Cell 
              subtitle="Engage Labs"
              children="Mark Okhman"
              before={
                <Avatar size={32} />
              }
              after={
                <Text>50 Stars</Text>
              }
            />
                
          </Section>

        </div>

      </List>
      {isPopUpOpen && <PopUp course_data={course} onClose={handleClosePopUp} />}
    </div>
  );
}
