import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Switch } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import typeIcons from '../../utils/typeIcons';

export default function Task() {
    const [done, setDone] = useState(false);

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>

            <Header showBack={true}></Header>

            <ScrollView style={{ width: '100%' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
                    {typeIcons.map(icon =>
                        icon &&
                        <TouchableOpacity>
                            <Image source={icon} style={styles.imageIcon}></Image>
                        </TouchableOpacity>)
                    }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer...'></TextInput>

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder='Detalhes da atividade'></TextInput>

                <View style={styles.inLine}>
                    <View style={styles.inputInline}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'}></Switch>
                        <Text style={styles.switchLabel}>CONCLUÍDO</Text>
                    </View>

                    <TouchableOpacity style={styles.removeLabel}>EXCLUIR</TouchableOpacity>
                </View>

            </ScrollView>

            <Footer icon={'save'}></Footer>

        </KeyboardAvoidingView>
    );
}
