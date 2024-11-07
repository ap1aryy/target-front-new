import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import { useState } from 'react';
import { Icon24HomeOutline, Icon24BookmarkCheckOutline } from '@vkontakte/icons'; // Import icons
import { Tabbar } from '@telegram-apps/telegram-ui';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const tabs = [
    { id: 'home', text: 'Home', Icon: Icon24HomeOutline, path: '/' },
    { id: 'enrolled', text: 'Enrolled', Icon: Icon24BookmarkCheckOutline, path: '/enrollments' },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get current location

  // Check if the current location starts with '/courses'
  if (location.pathname.startsWith('/courses')) {
    return <></>; // Return empty fragment if the condition is met
  }

  const handleNavigation = (selected) => {
    setCurrentTab(selected.id); // Update the active tab using selected.id
    navigate(selected.path); // Navigate to the selected path
  };

  return (
    <div>
      <Tabbar>
        {tabs.map(({ id, text, Icon, path }) => (
          <Tabbar.Item 
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
