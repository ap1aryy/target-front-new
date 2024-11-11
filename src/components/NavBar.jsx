import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import { useState } from 'react';
import { Icon24HomeOutline, Icon24BookmarkCheckOutline } from '@vkontakte/icons'; // Import icons
import { Tabbar } from '@telegram-apps/telegram-ui';
import { useLocation } from 'react-router-dom';
import './NavBar.css'
import { useTranslation } from 'react-i18next';
import * as amplitude from '@amplitude/analytics-browser';
export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const tabs = [
    { id: 'home', text: t('Home'), Icon: Icon24HomeOutline, path: '/' },
    { id: 'enrolled', text: t('Enrolled'), Icon: Icon24BookmarkCheckOutline, path: '/enrollments' },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get current location

  // Check if the current location starts with '/courses'
  if (location.pathname.startsWith('/courses') || location.pathname.startsWith('/buy')) {
    return <></>; // Return empty fragment if the condition is met
  }
  

  const handleNavigation = (selected) => {
    amplitude.track(`navigate-${selected.id}`);

    setCurrentTab(selected.id); // Update the active tab using selected.id
    navigate(selected.path); // Navigate to the selected path
  };

  return (
    <div >
      <Tabbar >
        {tabs.map(({ id, text, Icon, path }) => (
          <Tabbar.Item  style={{paddingBottom:20}}
            key={id} 
            text={text} 
            selected={id === currentTab} 
            onClick={() => handleNavigation({ id, text, Icon, path })} // Pass the whole selected tab object
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
    </div>
  );
};
