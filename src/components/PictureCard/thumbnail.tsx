import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ThemeModeContext } from '../../screens/HomeScreen';

export const IMAGE_HEIGHT = 180;

export type ThumbnailProps = {
  title: string;
  thumbnail?: string;
  score: number;
  numComments: number;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  title,
  thumbnail,
  score,
  numComments,
}) => {

    const {theme, mode} = useContext(ThemeModeContext);

    return (
        <View style={styles.thumbnail}>
            <Image style={styles.thumbnail} source={{uri: thumbnail}} />
            {mode == "info" && (
                <LinearGradient colors={["#ffffff00", "#000000ff"]} style={styles.gradient}>
                <Text numberOfLines={3} style={styles.titleText} >{title}</Text>
                <View style={styles.statsLine}>
                    <View style={styles.commentsLine}>
                        <Feather name="message-square" size={15} color="#ffffff" />
                        <Text style={styles.numCommentText}>{numComments}</Text>
                    </View>
                    <View style={styles.scoreLine}>
                        <Feather name="arrow-up" size={15} color="#ffffff" />
                        <Text style={styles.scoreText}>{score}</Text>
                        <Feather name="arrow-down" size={15} color="#ffffff" />
                    </View>
                </View>
            </LinearGradient>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    maxWidth: wp(46),
    height: IMAGE_HEIGHT,
    borderRadius: 15,
    backgroundColor: "black",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5
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
  },
  titleText: {
    fontWeight: "bold", 
    color: "white",
    margin: 10,
    marginTop: 5,
    fontSize: 12
  },
  statsLine: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  commentsLine: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5
  },
  scoreLine: {
    flexDirection: "row",
    alignItems: "center"
  },
  scoreText: {
    paddingHorizontal: 2,
    color: "white"
  },
  numCommentText: {
    paddingHorizontal: 5,
    color: "white"
  }
});

export default Thumbnail;