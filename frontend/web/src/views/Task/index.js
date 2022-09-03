import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Navigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
    const [redirect, setRedirect] = useState(false);
    const { id } = useParams();
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [_id, setId] = useState();
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

    async function loadTaskDetails() {
        await api.get(`/task/${id}`)
            .then(response => {
                setType(response.data.type);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setDone(response.data.done);
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
                setHour(format(new Date(response.data.when), 'HH:mm'));
            });
    }

    async function save() {
        // Validação dos dados
        if (!title) {
            return alert("Voce precisa informar o titulo da tarefa");
        }
        if (!description) {
            return alert("Voce precisa informar a descrição da tarefa");
        }
        if (!type) {
            return alert("Voce precisa informar o tipo da tarefa");
        }
        if (!date) {
            return alert("Voce precisa informar a data da tarefa");
        }
        if (!hour) {
            return alert("Voce precisa informar a hora da tarefa");
        }

        if (id) {
            await api.put(`/task/${id}`, {
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => {
                setRedirect(true);
            }).catch((error) => {
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
        } else {
            await api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => {
                setRedirect(true);
            }).catch((error) => {
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
    }

    useEffect(() => {
        lateVerify();
        loadTaskDetails();
    }, []);

    return (
        <S.Container>
            {redirect && <Navigate to="/"></Navigate>}
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
                    <span>Título</span>
                    <input type='text' placeholder='Título da tarefa...' onChange={e => setTitle(e.target.value)} value={title}></input>
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder='Detalhes da tarefa...' onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type='date' placeholder='Título da tarefa...' onChange={e => setDate(e.target.value)} value={date}></input>
                    <img src={iconCalendar} alt='Calendário'></img>
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type='time' placeholder='Título da tarefa...' onChange={e => setHour(e.target.value)} value={hour}></input>
                    <img src={iconClock} alt='Relógio'></img>
                </S.Input>

                <S.Options>
                    <div>
                        <input type='checkbox' checked={done} onChange={() => setDone(!done)} value={done}></input>
                        <span>CONCLUÍDO</span>
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
