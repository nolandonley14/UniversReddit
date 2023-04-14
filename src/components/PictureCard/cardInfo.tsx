import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ThemeModeContext } from '../../screens/HomeScreen';
import moment from "moment";

export const IMAGE_HEIGHT = 180;

export type CardInfoProps = {
    author: string;
    creationDate: number;
    userData: string;
};

const CardInfo: React.FC<CardInfoProps> = ({
  author,
  creationDate,
  userData
}) => {

    const {theme, mode} = useContext(ThemeModeContext);

    

    const getNewTime = (time: number) => {
        moment.updateLocale('en', {
            relativeTime : {
                future: "in %s",
                past:   "%s ago",
                s: function (number) {
                    return  number + ' minutes';
                },
                m:  "a minute",
                mm: function (number) {
                    return number + ' minutes';
                },
                h:  "an hour",
                hh: "%d hours",
                d:  "a day",
                dd: "%d days",
                M:  "a month",
                MM: "%d months",
                y:  "a year",
                yy: "%d years"
            }
        });
        var commentTime = moment(new Date(time)).fromNow();
        return commentTime.toString()
    }

    return (
        <View style={styles.imageInfoContainer}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                {userData ? (
                <Image style={styles.avatar} source={{uri: userData}} />
                ) : (
                <Feather name="user" size={20} color={theme == "dark" ? "white" : "black"} />
                )}
                <View style={{paddingLeft: 5, flex: 1 }}>
                    <Text numberOfLines={1} style={[styles.authorText, {
                        color: theme == "dark" ? "white" : "black"
                    }]}>{author}</Text>
                    <Text style={[styles.createdText, {
                        color: theme == "dark" ? "lightgray" : "gray"
                    }]}>{getNewTime(creationDate * 1000)}</Text> 
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
      imageInfoContainer: {
        width: "100%",
        marginTop: 5,
        paddingHorizontal: 10,
      },
      avatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
      },
      authorText: {
        fontWeight: "bold",
        fontSize: 14,
      },
      createdText: {
        fontWeight: "bold",
        fontSize: 10
      },
});

export default CardInfo;