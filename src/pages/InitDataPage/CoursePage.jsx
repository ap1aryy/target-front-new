import { Section, Chip, Title, Cell, List, Button, Image, Card, Text, FixedLayout, Avatar, Divider, Placeholder, Subheadline } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from 'react';
import './p.css'
import { UserContext } from '@/contexts/UserContext';
import { getAllChapters } from '@/Utils/thinkificAPI';
import { PopUp } from '../LaunchParamsPage/PopUp';
import { Chapters } from '../Courses/Chapters1';
import { Icon24Clock, Icon20PlayCircle, Icon16StarAlt , Icon24Message,Icon16CheckCircleLarge} from '@vkontakte/icons';
import { groupedVideos } from '@/Utils/Constants';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import * as amplitude from '@amplitude/analytics-browser';
/**
 * @returns {JSX.Element}
 */
const BASE_URL = "https://mini-app-back.friendsdao.com/dev";

const getInitData = () => {
  const initData = window.Telegram?.WebApp?.initData || "";
  return btoa(initData);
};

export function CoursePage() {
  const location = useLocation();
  const course = location.state?.course;
  const [chapters, setChapters] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isWaitList, setIsWaitList] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
 const { t, i18n  } = useTranslation();
  const waitlistRequestSent = useRef(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    amplitude.track('load_my_course');
    if (course.my) {
      window.Telegram.WebApp.MainButton.hide();
    } else if (course.id === 2930632) {
      amplitude.track('load_waitlist');
      setIsWaitList(true)
      setupMainButtonForWaitlist();
    } else {
      setupMainButtonForRegularCourse();
    }
    const handleGetAllChapters = async () => {
      try {
        const courseList = await getAllChapters(course.id, user.id);
        setChapters(courseList);
      } catch (error) {
        console.error("Не удалось загрузить главы:", error);
      }
    };

   
    handleGetAllChapters();

    return () => {
      window.Telegram.WebApp.MainButton.offClick(handleOpenPopUp);
    };
  }, [course.id, user, navigate]);
const formattedTimestamp = course.timestamp ? format(new Date(course.timestamp * 1000), "dd.MM.yyyy HH:mm") : null;
 const setupMainButtonForWaitlist = () => {
    if (course.my) {
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(null);
      

    } else {
      window.Telegram.WebApp.MainButton.text = "Join to waitlist";
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(handleJoinWaitlist);
    }
  };
  const starIconSvg = `
<svg width="14" height="15" viewBox="0 0 14 15" fill="#24A1DE" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="000"></path>
</svg>
`;
  const setupMainButtonForRegularCourse = () => {
    if(window.Telegram.WebApp.MainButton.text != "You have new course!"){
    window.Telegram.WebApp.MainButton.text = t("get_course_from");
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);}
  };
 const handleJoinWaitlist = async () => {
  if (waitlistRequestSent.current) {
    console.log("Запрос уже отправлен, повторное отправление не требуется");
    return; // Якщо запит вже був відправлений, не відправляємо його ще раз
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/enroll`,
      { user_id: user.id, app_id: course.id, count: 1 },
      {
        params: { type: 3 },
        headers: { User: getInitData() },
      }
    );

    console.log("Запрос на добавление в waitlist отправлен:", response.data);
    amplitude.track('add_course_to_waitlist');
    // Установим флаг, что запрос был отправлен
    waitlistRequestSent.current = true;

    // Показуем пользователю сообщение о добавлении в waitlist
    if (i18n.language === 'ru') {
      alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
    } else {
      alert(`Course ${course_data?.title} was added to your Waitlist`);
    }

    // Изменим текст кнопки
    window.Telegram.WebApp.MainButton.text = "You in waitlist";

  } catch (error) {
    console.error("Ошибка при добавлении в waitlist:", error);
     window.Telegram.WebApp.MainButton.text = "You in waitlist";
    // Выводим сообщение об ошибке или другие действия при ошибке
    if (i18n.language === 'ru') {
     alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
    } else {
       alert(`Course ${course_data?.title} was added to your Waitlist`);
    }
  } finally {
    // В любом случае вызываем handleOpenPopUp, даже если произошла ошибка
         window.Telegram.WebApp.MainButton.text = "You in waitlist";
if (i18n.language === 'ru') {
     alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
    } else {
       alert(`Course ${course_data?.title} was added to your Waitlist`);
    }
  }
};


const handleOpenChapters = (index) => {
  amplitude.track('open_chapters');
    setSelectedChapterIndex(index); // Set the selected chapter index
    navigate(`/courses/${course.id}/chapters/${index}`); // Navigate to the chapter page
    window.Telegram.WebApp.MainButton.hide();
};

const handleOpenPopUp = () => {
  amplitude.track('open_buy_choise_menu');
  navigate('/buy', { state: { course: course } });
};
  const handleClosePopUp = () => {
    setupMainButtonForRegularCourse();
    setPopUpOpen(false);
  };

  // Function to check if a chapter is completed
  const isChapterCompleted = (courseId, index) => {
    
  console.log(courseId + " " + index)
  const completedChapters = JSON.parse(localStorage.getItem('completedChapters')) || {};
  return completedChapters[parseInt(courseId, 10)]?.includes(parseInt(index, 10)) || false;
};
 const courseTagsConfig = {
  "2925675": ["Digital", "TON", "Telegram"],
  "2926478": ["Managment", "Product"],
  "2930629": ["Analytic", "Beginners"],
  "2930630": ["Digital", "UX"],
  "2930631": ["Digital", "Beginners", "Data"],
  "2930632": ["Telegram", "TON", "Digital", "TMA"]
};

const getTranslatedTags = (courseId) => {
  return (courseTagsConfig[courseId] || []).map(tag => t(`course_tags.${tag}`));
};
//   const star = <svg width="14" height="15" viewBox="0 0 14 15" fill="#24A1DE" xmlns="http://www.w3.org/2000/svg">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="000"></path>
// </svg>
  useEffect(() => {
    function onClick() {
      navigate('/');
    }
    !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    WebApp.BackButton.onClick(onClick);
    amplitude.track('back_to_home');
    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);
  
  const courseConfig  = {
    "2925675": {
      img: "https://import.cdn.thinkific.com/999858/pyyc0rCgRaa3ekSGO7VK_image_2024-11-11_12-22-24.png",
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
      img: "https://import.cdn.thinkific.com/999858/t3mgnOnyQhWCbUwcTIU5_image_2024-11-11_12-22-33.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930630": {
      img: "https://import.cdn.thinkific.com/999858/xZCJxhsvTmWvV0UVvhJe_image_2024-11-11_12-22-43.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930631": {
      img: "https://import.cdn.thinkific.com/999858/KUfY4NlShCypqsMNRQy6_image_2024-11-11_12-22-54.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930632": {
      img: "https://import.cdn.thinkific.com/999858/Z281jNKKSTKQcQsMne2K_image_2024-11-11_12-23-03.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    // Добавьте данные для других курсов здесь
  };
  return (
    <div>
      <div style={{ width: "100%", maxWidth: "500px", overflow: "hidden", margin: "-2vh 0 auto" }}>
        <img
         src={courseConfig[course.id]?.img || "default_image_path_here"}
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
  {getTranslatedTags(course.id).map((translatedTag, index) => (
          <Chip key={index} mode="mono">{translatedTag}</Chip>
        ))}
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
          <Divider />
          {course.id ==2925675 &&<><Cell multiline subhead={t('Video_lan')} children="English" />
           <Divider/>
            <Cell multiline subhead={t('Video_dur')} children={t('Video_val')} />
          </>
          }
        </Card>

        <Text weight="1">{t('Chapters')}</Text>

        {course?.my && course.id != 2930632 ? (
          <div>
            <Section style={{ marginTop: 8 }}>
             {chapters.map((chapter, index) => (
  <Cell
    key={chapter.id}
    subhead={`${t('Chapter')} ${index + 1}`} // Заголовок "Chapter X"
    multiline={true}
   onClick={!isWaitList ? () => handleOpenChapters(chapter.id) : null}
    subtitle={<div  style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        style={{ marginTop: 8 }}
        before={<Icon20PlayCircle />}
        size="s"
        mode="bezeled"
      >
        {t('Open')} {/* Кнопка открытия */}
      </Button>
       {isChapterCompleted(course.id,index + 1) && (
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
           style={{ pointerEvents: course.id === 2930632 ? "none" : "auto" }}

            subhead={`${t('Chapter')} ${index + 1}`}
            children={t(course.id.toString() + "." + "chapters." + chapter.id)} 
            subtitle={<div>
                <div className='card-items-inf'>
                  <div>{`${t('Less_len')} ${chapter.chapter_item_id}`}</div>
                 {course.id === 2925675 && (
  <>
    •<div>{`${t('Video_count')} ${videoCount}`}</div>
  </>
)}

                 </div>
            </div>}
            onClick={!isWaitList ? handleOpenPopUp : null}
            multiline={true}
          />
          {index < chapters.length - 1 && <Divider />}
        </div>
      );
    })}
  </Section>
</>

        )}

        {/* <Text weight="1">{t('Menthors')}</Text>

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
        )} */}

    
       {course.id === 2930632 && course.my &&  <FixedLayout style={{
      padding: 16
    }}>
        <Button size="l" stretched>
          {t('YouWaitlist')}
        </Button>
      </FixedLayout>}
      </List>
    </div>
  );
}
