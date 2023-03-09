import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Qr from 'qrcode.react'

function QrCode() {
    return (
        <S.Container>
            <Header></Header>

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Seus atividades serão sincronizadas com a de seu celular.</p>

                <S.QrCodeArea>
                    <Qr value='getMacaddress' size={350}></Qr>
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite o código presente no seu celular</span>
                    <input type='text' />
                    <button type='button'>
                        SINCRONIZAR
                    </button>
                </S.ValidationCode>
            </S.Content>

            <Footer></Footer>
        </S.Container>
    );
}

export default QrCode;