import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api'

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length);
      });
  }

  useEffect(() => {
    lateVerify();
  })

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"></img>
      </S.LeftSide>
      <S.RightSide>
        <Link to='/'>INÍCIO</Link>
        <span className='dividir'></span>
        <Link to='/task'>NOVA TAREFA</Link>
        <span className='dividir'></span>
        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        {
          lateCount && 
          <>
            <span className='dividir'></span>
            <button onClick={clickNotification} id="notification">
              <img src={bell} alt="Notificação"></img>
              <span>{lateCount}</span>
            </button>
          </>
        }
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
