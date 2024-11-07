import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { routes } from '@/navigation/routes.jsx';
import { UserContext } from '@/contexts/UserContext';
import { CoursesProvider } from '@/contexts/CoursesContext';
import { Navbar } from './NavBar';

import { useContext } from 'react';


function BackButtonManipulator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onClick() {
      navigate(-1);
    }
    WebApp.BackButton.onClick(onClick);

    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/') {
      WebApp.BackButton.isVisible && WebApp.BackButton.hide();
    } else {
      !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    }
  }, [location]);

  return null;
}

/**
 * @return {JSX.Element}
 */
export function App() {
  const {user, setUser }= useContext(UserContext);
  useEffect(() => {
    window.Telegram.WebApp.isVerticalSwipesEnabled = false

    const initializeTelegramWebApp = async () => {
      if (window.Telegram && window.Telegram.WebApp) {
        const webAppData = window.Telegram.WebApp.initDataUnsafe;
        const user = webAppData.user;
  
        if (user) {
          setUser(user);
        } else {
          const defaultUser = {
            username: "bogdan_krvsk",
            first_name: "Bogdan",
            last_name: "",
            id: 874423521,
            is_premium: true,
          };
          setUser(defaultUser);
        }
      }
    };
    initializeTelegramWebApp();
  }, [setUser]);
  

  return (
    <AppRoot
      appearance={WebApp.colorScheme}
      platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      <BrowserRouter>
        <BackButtonManipulator/>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path='*' element={<Navigate to='/'/>}/>
         
        </Routes>
        <Navbar/>
      </BrowserRouter>
    </AppRoot>
  );
}
