import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '../../../utils/test-utils';
import { Modal } from './modal';

describe('Component Modal', () => {
  let closeModal: boolean = true;
  const handleCloseModal = (set: boolean) => {
    closeModal = set;
  };
  let containerElement: HTMLElement;

  beforeEach(() => {
    const { container } = render(
      <Modal closeModal={handleCloseModal} statusModal={closeModal}>
        <>
          <p>Context modal</p>
        </>
      </Modal>
    );
    containerElement = container;
  });

  test('should be render modal container', () => {
    const modalContainer = containerElement.querySelector('.container-modal');
    expect(modalContainer).toBeDefined();
  });

  test('should be close modal if, user click in background-color container modal', async () => {
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeDefined();
    await userEvent.click(dialog);
    expect(closeModal).toBe(false);
  });

  test('should be close modal if, user click in cross icon modal', () => {
    fireEvent.click(screen.getByText('close'));
    expect(closeModal).toBe(false);
  });
});
