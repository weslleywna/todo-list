import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

// COMPONENTS 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Footer from '../../components/TaskCard';

// API
import api from '../../services/api';

export default function Home() {
    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);

    async function loadTasks() {
        setLoad(true);
        await api.get('/task/filter/all/11:11:11:11:11:11').then(response => {
            setTasks(response.data);
            setLoad(false);
        });
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <View style={styles.container}>
            <Header showNotification={true} showBack={false}></Header>

            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>
                        Todos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInative}>
                        Hoje
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>
                        Mês
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>
                        Semana
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>
                        Ano
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
                {
                    load ? <ActivityIndicator color='#EE6B26' size={50}></ActivityIndicator> :
                        tasks.map(t => {
                            <TaskCard done={t.done} title={t.title} when={t.when} type={t.type}></TaskCard>
                        })
                }
            </ScrollView>

            <Footer icon={'add'}></Footer>
        </View>
    );
}
