import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Panchakarma from './pages/therapies/panchakarma';
import AyurvedicMassage from './pages/therapies/ayurvedic-massage';
import Shirodhara from './pages/therapies/shirodhara';
import HerbalRemedies from './pages/therapies/herbal-remedies';
import AyurvedicConsultation from './pages/therapies/ayurvedic-consultation';
import YogaMeditation from './pages/therapies/yoga-meditation';

import PrivacyPolicy from './pages/privacy-policy';
import TermsOfService from './pages/terms-of-service';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/therapies/panchakarma',
    element: <Panchakarma />,
  },
  {
    path: '/therapies/ayurvedic-massage',
    element: <AyurvedicMassage />,
  },
  {
    path: '/therapies/shirodhara',
    element: <Shirodhara />,
  },
  {
    path: '/therapies/herbal-remedies',
    element: <HerbalRemedies />,
  },
  {
    path: '/therapies/ayurvedic-consultation',
    element: <AyurvedicConsultation />,
  },
  {
    path: '/therapies/yoga-meditation',
    element: <YogaMeditation />,
  },
  
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService />
  }
]);