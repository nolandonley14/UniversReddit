import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import { MainStackParamList } from '../navigation/MainStack';
import Feather from 'react-native-vector-icons/Feather';

type Props = NativeStackScreenProps<MainStackParamList, 'Pic'>;

const CustomWebView = ({route, navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: () => (<Text numberOfLines={1} style={styles.headerTextStyle}>{route.params.name}</Text>),
            headerShadowVisible: false,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
                <Feather name="chevron-left" size={20} color="#000000" />
              </Pressable>
            ),
          });
    }, [])
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView source={{ uri: route.params.url }} style={{ flex: 1 }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerTextStyle: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "500"
    },
    icon: {
        justifyContent: "center", 
        alignItems: "center", 
        width: 30, 
        height: 30
    }
})

export default CustomWebView;