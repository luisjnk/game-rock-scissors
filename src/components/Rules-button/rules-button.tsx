import React from 'react';
import { TEST_IDS } from '../../utils/constants';

import './rules-button.scss';

interface Props {
  handleModal(): void
}
const RulesButton: React.FC<Props> = ({handleModal}: Props) => {
  
  return (
    <button data-testid={TEST_IDS.RULES_MODAL_BUTTON} onClick={() => handleModal()} className="rules-button">
      <span>Rules</span>
    </button>
  )
}

export default RulesButton;
