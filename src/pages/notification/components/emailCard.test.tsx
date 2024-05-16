import { mockNotification } from '../../../test/mockData/notificationListMock';
import { render, userEvent, screen } from '../../../utils/test-utils';
import { objectString } from '../helper/convertType';
import { EmailCard } from './emailCard';

describe('Component Email Card', () => {
  let containerElement: HTMLElement;
  const userRef = { current: null };
  const userRefModal = { current: false };
  const handleChangeRef = (idNotification: boolean) => {
    userRefModal.current = idNotification;
  };
  beforeEach(() => {
    const mock = mockNotification.data[0];
    const { container } = render(
      <EmailCard
        date={mock.date}
        clickModal={handleChangeRef}
        isView={mock.isView}
        messageId={mock.messageId}
        roomAreaId={mock.roomAreaId}
        sendMessage={mock.sendMessage}
        type={mock.type}
        userCreate={mock.userCreate}
        userInfoId={mock.userInfoId}
        userRef={userRef}
      />
    );
    containerElement = container;
  });

  test('should be render a container card with class container-card-email', () => {
    const className = containerElement.querySelector('.container-card-email');
    expect(className).not.toBeNull();
  });

  test('should be a render structure with card email', () => {
    const array = [
      '.container-card-email',
      '.header-card-email',
      '.body-card-email'
    ];
    array.map((item) => {
      const classInComponent = containerElement.querySelector(item);
      expect(classInComponent).not.toBeNull();
    });
  });

  test('should render Button Name Action', () => {
    const className = containerElement.querySelector('.button-actions');
    expect(className).not.toBeNull();
  });

  test('should click the action button', async () => {
    await userEvent.click(screen.getByText('Action'));
    expect(userRefModal.current).toBe(true);
  });

  test('should be render a icon for type notification', () => {
    const mock = mockNotification.data[0];

    for (let i = 1; i <= 4; i++) {
      const typeNotification = objectString[i as keyof typeof objectString];

      const { container } = render(
        <EmailCard
          date={mock.date}
          clickModal={handleChangeRef}
          isView={mock.isView}
          messageId={mock.messageId}
          roomAreaId={mock.roomAreaId}
          sendMessage={mock.sendMessage}
          type={typeNotification}
          userCreate={mock.userCreate}
          userInfoId={mock.userInfoId}
          userRef={userRef}
        />
      );
      const className = container.querySelector(`.${typeNotification}`);
      expect(className).not.toBeNull();
    }
  });
});
