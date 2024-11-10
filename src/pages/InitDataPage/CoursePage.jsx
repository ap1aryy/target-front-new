import { Section, Chip, Title, Cell, List, Button, Image, Card, Text, AvatarStack, Avatar, Divider, Placeholder, Subheadline } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import './p.css'
import { UserContext } from '@/contexts/UserContext';
import { getAllChapters } from '@/Utils/thinkificAPI';
import { PopUp } from '../LaunchParamsPage/PopUp';
import { Chapters } from '../Courses/Chapters1';
import { Icon24Clock, Icon20PlayCircle, Icon16StarAlt , Icon24Message,Icon16CheckCircleLarge} from '@vkontakte/icons';
import { groupedVideos } from '@/Utils/Constants';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
/**
 * @returns {JSX.Element}
 */
export function CoursePage() {
  const location = useLocation();
  const course = location.state?.course;
  const [chapters, setChapters] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
 const { t, i18n  } = useTranslation();
  const formattedTimestamp = course.timestamp ? format(new Date(course.timestamp * 1000), "dd.MM.yyyy HH:mm") : null;

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    if (course.my) {
      window.Telegram.WebApp.MainButton.hide();
    }

    const handleGetAllChapters = async () => {
      try {
        const courseList = await getAllChapters(course.id, user.id);
        setChapters(courseList);
      } catch (error) {
        console.error("Не удалось загрузить главы:", error);
      }
    };

    if (!course.my) {
      window.Telegram.WebApp.MainButton.text = t("get_course_from");
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);
    }

    handleGetAllChapters();

    return () => {
      window.Telegram.WebApp.MainButton.offClick(handleOpenPopUp);
    };
  }, [course.id, user, navigate]);

const handleOpenChapters = (index) => {
    setSelectedChapterIndex(index); // Set the selected chapter index
    navigate(`/courses/chapters/${index}`);  // Navigate to the chapter page
    window.Telegram.WebApp.MainButton.hide();
};

  const handleOpenPopUp = () => setPopUpOpen(true);
  const handleClosePopUp = () => {
    window.Telegram.WebApp.MainButton.text = t("get_course_from");
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);
    setPopUpOpen(false);
  };

  // Function to check if a chapter is completed
  const isChapterCompleted = (index) => {
    const completedChapters = JSON.parse(localStorage.getItem('completedChapters')) || [];
  return completedChapters.includes(index); // Проверяем, завершена ли глава
};

  const star = <svg width="14" height="15" viewBox="0 0 14 15" fill="#24A1DE" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="000"></path>
</svg>
  useEffect(() => {
    function onClick() {
      navigate(-1);
    }
    !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    WebApp.BackButton.onClick(onClick);

    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);
  
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

      <List style={{padding: "10px 10px"}}>
        <Title level="1" weight="2">
          {t(course.id.toString() + '.Course_name')}
        </Title>
        <Text weight="3">{t('Course')}</Text>

        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <Chip mode="mono">Digital</Chip>
          <Chip mode="mono">TON</Chip>
          <Chip mode="mono">Telegram</Chip>
        </div>

        {/* If the course belongs to the user, show validity date */}
        {course.my && course.type == 1 && (
          <Section style={{ marginTop: 8 }}>
            <Cell
                             style={{ pointerEvents: 'none' }} 

              before={<Icon24Clock />}
              hint={formattedTimestamp}
              subhead={t('valid')}
            />
          </Section>
        )}

        <Card>
          <Cell multiline subhead={t('Description')} children={t(course.id.toString() + '.Description')}  />
          <Divider/>
          <Cell multiline subhead={t('Video_lan')} children="English" />
           <Divider/>
          <Cell multiline subhead={t('Video_dur')} children={t('Video_val')}/>
        </Card>

        <Text weight="1">{t('Chapters')}</Text>

        {course?.my ? (
          <div>
            <Section style={{ marginTop: 8 }}>
             {chapters.map((chapter, index) => (
  <Cell
    key={chapter.id}
    subhead={`${t('Chapter')} ${index + 1}`} // Заголовок "Chapter X"
    multiline={true}
    onClick={() => handleOpenChapters(chapter.id)} // Действие при клике на главу
    subtitle={<div  style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        style={{ marginTop: 8 }}
        before={<Icon20PlayCircle />}
        size="s"
        mode="bezeled"
      >
        {t('Open')} {/* Кнопка открытия */}
      </Button>
       {isChapterCompleted(chapter.id) && (
        <>
          <Icon16StarAlt style={{ marginLeft: '8px' ,marginTop: 8 }} />
          <Text style={{ marginLeft: '8px', fontSize: '14px' ,marginTop: 8 }}>{t('Completed')}</Text>
        </>
      )}
      </div>
    }
  >
    {t(course.id.toString() + "." + "chapters." + chapter.id)} {/* Замените на нужный ключ перевода */}
  </Cell>
))}
            </Section>
          </div>
        ) : (
          <>
  <Section style={{ marginTop: 8 }}>
    {chapters.map((chapter, index) => {
      const videosInChapter = groupedVideos[chapter.id]; // Получаем видео для этого раздела
      const videoCount = videosInChapter ? videosInChapter.length : 0; // Подсчитываем количество видео

      return (
        <div key={index}>
          <Cell
            style={{ pointerEvents: 'none' }} 
            subhead={`${t('Chapter')} ${index + 1}`}
            children={t(course.id.toString() + "." + "chapters." + chapter.id)} 
            subtitle={<div>
                <div className='card-items-inf'>
                  <div>{`${t('Less_len')} ${chapter.chapter_item_id}`}</div>
                  •
                  <div>{`${t('Video_count')} ${videoCount}`} </div>
                 </div>
              </div>}
            multiline={true}
          />
          {index < chapters.length - 1 && <Divider />}
        </div>
      );
    })}
  </Section>
</>

        )}

        <Text weight="1">{t('Menthors')}</Text>

        {!course?.my ? (
          <Section style={{ marginTop: 8 }}>
            <Cell
              subtitle="Krud Live"
              children="David Kruel"
              before={<Avatar size={32} src={`https://t.me/i/userpic/320/markokhman.jpg`} />}
              after={<Button mode="plain" style={{ borderRadius: "50px" }} after={star}>50</Button>}
            />
          </Section>
        ) : (
          <Section style={{ marginTop: 8 }}>
            <Cell
              hint="David Kruel"
                subhead="Krud Live"
                 onClick={() => window.open('https://t.me/markokhman', '_blank')}
              subtitle={
                <Button
                  style={{ marginTop: 8 }}
                  before={<Icon24Message />}
                  size="s"
                  mode="bezeled"
                >
                  {t('Contact_via_Telegram')}
                </Button>
              }
            />
          </Section>
        )}

        {isPopUpOpen && <PopUp course_data={course} onClose={handleClosePopUp} />}
       
      </List>
    </div>
  );
}
