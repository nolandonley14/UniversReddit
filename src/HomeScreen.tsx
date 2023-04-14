import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { createContext, useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Animated,
    View,
    StatusBar
} from 'react-native';
import CustomHeader from './components/CustomHeader';
import RedditPicCard from './components/RedditPicCard';
import { UseGetFilteredPictures } from './hooks/getPicsQuery';
import { MainStackParamList } from './navigation/MainStack';

export const ThemeModeContext = createContext({theme: 'dark', mode: 'info'});

export type Theme = "light" | "dark";
export type Mode = "clean" | "info";
export type Filter = "top" | "new" | "hot" | "controversial";

const HomeScreen = () => {

    const [theme, setTheme] = useState<Theme>('dark');
    const [mode, setMode] = useState<Mode>('info');
    const [currentFilter, setCurrentFilter] = useState<Filter>("hot")
    const {filteredData, isLoading} = UseGetFilteredPictures(currentFilter);
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList, "Pic">>();

    const renderItem = ({item}: any) => {
        const pic = item.data
        return (
            <RedditPicCard 
                title={pic.title} 
                author={pic.author} 
                score={pic.score} 
                thumbnail={pic.thumbnail != "nsfw" ? pic.thumbnail : "https://static.vecteezy.com/system/resources/previews/005/476/277/original/under-18-forbidden-round-icon-sign-illustration-eighteen-or-older-persons-adult-content-18-plus-only-rating-isolated-on-white-background-free-vector.jpg"}
                numComments={pic.num_comments} 
                creationDate={pic.created_utc} 
                onPress={() => {
                    navigation.push('Pic', {url: "https://reddit.com" + pic.permalink, name: pic.author + "'s Photo"});
                }}
            />
        )
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme == "dark" ? "#000000" : "#ffffff"}]}>
            <StatusBar barStyle={theme == "dark" ? "light-content" : "dark-content"}/>
            <ThemeModeContext.Provider value={{theme, mode}}>
                <View style={[styles.headerContainer, {backgroundColor: theme == "dark" ? "black" : "white"}]}>
                    <CustomHeader setTheme={setTheme} setMode={setMode} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
                </View>
                {isLoading ? (
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Loading...</Text>
                    </View>
                ) : filteredData ? (
                    <View>
                        <Animated.FlatList
                            columnWrapperStyle={styles.columnWrapperStyle}
                            data={filteredData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.listContainer}
                            numColumns={2}
                        />
                    </View>
                ) : (
                    <Text>Whoops No Data Available</Text>
                )}
            </ThemeModeContext.Provider>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        paddingBottom: 75,
    },
    headerContainer: {
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 4,
        paddingVertical: 5,
    },
    themeButton: {
        position: "absolute"
    },
    searchBar: {
        width: "80%",
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        borderColor: "lightgray",
        borderWidth: 1,
    },
    columnWrapperStyle: {
      padding: 5
    },
    cardView: {
        padding: 5,
        width: wp("50%"),
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: 15,
        zIndex: 9,
        flexDirection: 'column-reverse'
    }
  });

export default HomeScreen;
