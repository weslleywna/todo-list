import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length);
            });
    }

    async function save() {
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        }).then(() => {
            alert('TAREFA CADASTRADA COM SUCESSO!')
        }).catch((error)=> {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        });
    }

    useEffect(() => {
        lateVerify();
    }, []);

    return (
        <S.Container>
            <Header lateCount={lateCount} />

            <S.Form>

                <S.TypeIcons>
                    {
                        typeIcons
                            .map((icon, index) =>
                            (index > 0 &&
                                <button type="button" onClick={() => setType(index)}>
                                    <img src={icon} alt="Tipo da Tarefa" className={type && type === index && 'active'}></img>
                                </button>))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>T??tulo</span>
                    <input type='text' placeholder='T??tulo da tarefa...' onChange={e => setTitle(e.target.value)} value={title}></input>
                </S.Input>

                <S.TextArea>
                    <span>Descri????o</span>
                    <textarea rows={5} placeholder='Detalhes da tarefa...' onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type='date' placeholder='T??tulo da tarefa...' onChange={e => setDate(e.target.value)} value={date}></input>
                    <img src={iconCalendar} alt='Calend??rio'></img>
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type='time' placeholder='T??tulo da tarefa...' onChange={e => setHour(e.target.value)} value={hour}></input>
                    <img src={iconClock} alt='Rel??gio'></img>
                </S.Input>

                <S.Options>
                    <div>
                        <input type='checkbox' checked={done} onChange={() => setDone(!done)} value={done}></input>
                        <span>CONCLU??DO</span>
                    </div>

                    <button type='button'>EXCLUIR</button>
                </S.Options>

                <S.Save>
                    <button type='button' onClick={save}>SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    );
}

export default Task;
