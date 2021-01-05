import React, { useState, useContext, useEffect } from 'react';
import Game from '../../components/Game/Game';

import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import Pentagon from '../../components/Pentagon/Pentagon';
import RulesButton from '../../components/Rules-button/rules-button';
import RulesModal from '../../components/Rules-modal/RulesModal';

import DashboardContext from '../../context/dashboard-context';

import './dashboard.scss';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGameOptionSelected, setIsGameOptionSelected] = useState(false)
  
  const { selectedGameOption } = useContext(DashboardContext);

  useEffect(() => {
    if (selectedGameOption !== "") {
      setIsGameOptionSelected(isGameOptionSelected => !isGameOptionSelected);
    }
  }, [selectedGameOption])


  const handleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  }

  return (
    <div>
      <div className="dashboard-container">
        <Header context={DashboardContext} />
        {!isGameOptionSelected && <Pentagon context={DashboardContext} />}
        {isGameOptionSelected && <Game context={DashboardContext}/>}
      </div>
      <RulesButton handleModal={handleModal}/>
      {isModalOpen &&  <Modal handleModal={handleModal} children={<RulesModal />}/>}
    </div>

  )
}

export default Dashboard;
