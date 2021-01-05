import React from 'react';
import { TEST_IDS } from '../../utils/constants';

import './modal.scss';

interface Props {
  handleModal(): void,
  children: React.ReactElement<any, string>
}
const Modal: React.FC<Props> = ({ handleModal, children} : Props) => {

  const closeModal = () => {
    handleModal()
  }

  return (
    <div data-testid={TEST_IDS.RULES_MODAL}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <button data-testid={TEST_IDS.CLOSE_MODAL_BUTTON} onClick={() => closeModal()} className="close">&times;</button>
          <div className="children-container">{children}</div>
        </div>
      </div>
    </div>
    )
}

export default Modal;
