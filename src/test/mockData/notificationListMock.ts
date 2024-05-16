import { notificationFetch } from '../../pages/notification/types/notification';

interface Mock {
  succeeded: boolean;
  message: boolean;
  errors: [];
  data: notificationFetch;
}

export const mockNotification: Mock = {
  succeeded: true,
  message: false,
  errors: [],
  data: [
    {
      messageId: 12,
      userInfoId: 1,
      roomAreaId: 1,
      sendMessage: 'Modificando el repositorio para ver nuevos cambios',
      type: 3,
      isView: true,
      userCreate: 'gerencia',
      date: new Date('2024-05-13T10:58:34.79')
    },
    {
      messageId: 11,
      userInfoId: 1,
      roomAreaId: 1,
      sendMessage: 'Modificando el repositorio para ver nuevos cambios',
      type: 3,
      isView: true,
      userCreate: 'gerencia',
      date: new Date('2024-05-13T10:47:31.73')
    },
    {
      messageId: 10,
      userInfoId: 1,
      roomAreaId: 1,
      sendMessage: 'Modificando el repositorio para ver nuevos cambios',
      type: 3,
      isView: true,
      userCreate: 'gerencia',
      date: new Date('2024-05-13T10:23:43.117')
    },
    {
      messageId: 9,
      userInfoId: 1,
      roomAreaId: 1,
      sendMessage: 'Deberia aparecer el nombre del grupo',
      type: 4,
      isView: true,
      userCreate: 'gerencia',
      date: new Date('2024-05-13T10:20:32.03')
    }
  ]
};
