import { ReactNode } from 'react';
import './modal.css';

interface Props {
  children: ReactNode;
  closeModal: (set: boolean) => void;
  statusModal: boolean;
  userRef: React.MutableRefObject<Date | null>;
}

export const Modal: React.FC<Props> = ({
  children,
  closeModal,
  statusModal,
  userRef
}) => {
  const openModal = statusModal ? 'openModal' : 'closeModal';

  const stopPropagation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleModalClose = () => {
    closeModal(false)
    userRef.current = null;
  }

  return (
    <>
      <div
        role='dialog'
        className={`container-modal ${openModal}`}
        onClick={() => handleModalClose()}
      >
        <article className='modal' onClick={(e) => stopPropagation(e)}>
          {children}
          <div className='close-container' onClick={() => handleModalClose()}>
            <div className='leftRight'></div>
            <div className='rightLeft'></div>
            <label className='close'>close</label>
          </div>
        </article>
      </div>
    </>
  );
};
