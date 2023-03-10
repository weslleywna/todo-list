import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Qr from 'qrcode.react'

function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    const isConnected = localStorage.getItem('@todo/macaddress');

    async function saveMac() {
        if (!mac) {
            alert('Você precisa informar o número que apareceu no celular!');
        }

        await localStorage.setItem('@todo/macaddress', mac);

        setRedirect(true);
    }

    return (
        <S.Container>
            {redirect && isConnected && <Navigate to="/"></Navigate>}

            <Header></Header>

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Seus atividades serão sincronizadas com a de seu celular.</p>

                <S.QrCodeArea>
                    <Qr value='getMacaddress' size={350}></Qr>
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite o código presente no seu celular</span>
                    <input type='text' onChange={e => setMac(e.target.value)} value={mac} />
                    <button type='button' onClick={saveMac}>
                        SINCRONIZAR
                    </button>
                </S.ValidationCode>
            </S.Content>

            <Footer></Footer>
        </S.Container>
    );
}

export default QrCode;