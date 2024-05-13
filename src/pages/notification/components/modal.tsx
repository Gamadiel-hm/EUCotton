import { ReactNode } from 'react';
import './modal.css';

interface Props {
  children: ReactNode;
  closeModal: (set: boolean) => void;
  statusModal: boolean;
}

export const Modal: React.FC<Props> = ({
  children,
  closeModal,
  statusModal
}) => {
  const openModal = statusModal ? 'openModal' : 'closeModal';

  const stopPropagation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`container-modal ${openModal}`}
        onClick={() => closeModal(false)}>
        <article
          className='modal'
          onClick={e => stopPropagation(e)}>
          {children}
          <div
            className='close-container'
            onClick={() => closeModal(false)}>
            <div className='leftRight'></div>
            <div className='rightLeft'></div>
            <label className='close'>close</label>
          </div>
        </article>
      </div>
    </>
  );
};
