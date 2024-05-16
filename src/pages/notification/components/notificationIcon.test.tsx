import { render } from '@testing-library/react';
import { NotificationIcon } from './notificationIcon';

describe('Component Icon Modal', () => {
  test('should be render icon for class property type', () => {
    const { container } = render(<NotificationIcon nameIcon='error' />);

    const className = container.querySelector('.icon-error');
    expect(className).toBeDefined();
  });
});
