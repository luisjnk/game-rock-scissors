import React from 'react';

import { ReactComponent as ImageRulesBonus } from "../../assets/svg/image-rules-bonus.svg"

import './rulesmodal.scss';

const RulesModal: React.FC = () => {
  return (
    <div className={"rulesModal"}>
      <h1>Rules</h1>
      <ImageRulesBonus />
    </div>
  )
}

export default RulesModal;
