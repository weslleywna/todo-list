import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

// ICONS
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';

export default function Header({ showNotification, showBack }) {
    return (
        <View style={styles.header}>

            {showBack ?
                <TouchableOpacity style={styles.leftIcon}>
                    <Image source={back} style={styles.leftIconImage}></Image>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.leftIcon}>
                    <Image source={qrcode} style={styles.leftIconImage}></Image>
                </TouchableOpacity>
            }

            <Image source={logo} style={styles.logo}></Image>

            {showNotification &&
                <TouchableOpacity style={styles.notification}>

                    <Image source={bell} style={styles.notificationImage}></Image>

                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>3</Text>
                    </View>

                </TouchableOpacity>
            }

        </View>
    );
}