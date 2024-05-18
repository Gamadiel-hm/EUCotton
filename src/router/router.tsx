import { createHashRouter } from 'react-router-dom';
import { Routes_Public } from './routerConst';
import ErrorPage from '../ErrorPage';

export const router = createHashRouter([
  {
    path: '/',
    async lazy() {
      const { default: App } = await import('../App');
      return {
        Component: App
      };
    },
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${Routes_Public.notification}/:userId/:room/:roomId`,
        async lazy() {
          const { NotificationPage } = await import(
            '../pages/notification/notificationPage'
          );
          return {
            Component: NotificationPage
          };
        }
      }
    ]
  }
]);
