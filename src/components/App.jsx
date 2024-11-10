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
import { useTranslation } from 'react-i18next';


import { routes } from '@/navigation/routes.jsx';
import { UserContext } from '@/contexts/UserContext';
import { Navbar } from './NavBar';
import * as amplitude from '@amplitude/analytics-browser';
import { useContext } from 'react';
amplitude.init('fd29d14d4b8f347fb378fe00c445fe7a', {"autocapture":true});


/**
 * @return {JSX.Element}
 */
export function App() {
  const { i18n } = useTranslation();
  amplitude.track('Sign Up');
  const {setInitData, setUser }= useContext(UserContext);
  useEffect(() => {
   

    const initializeTelegramWebApp = async () => {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.isSwipeBackEnabled = false;
        window.Telegram.WebApp.isClosingConfirmationEnabled = true; 

        const webAppData = window.Telegram.WebApp.initDataUnsafe;
        const user = webAppData.user;
        
        if (user) {
          setUser(user);
          setInitData(window.Telegram.WebApp.initData)

          const userLanguage = user.language_code || 'en';
          i18n.changeLanguage(userLanguage);
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
  
const platform = WebApp.platform;
  const appearance = WebApp.colorScheme;
  return (
    <AppRoot
      appearance={appearance}
      platform={
        platform === 'android'
          ? 'android'
          : platform === 'desktop'
          ? 'desktop'
          : ['macos', 'ios'].includes(platform)
          ? 'ios'
          : 'base'
      }
    >
      <BrowserRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path='*' element={<Navigate to='/'/>}/>
         
        </Routes>
        <Navbar/>
      </BrowserRouter>
      
    </AppRoot>
  );
}
