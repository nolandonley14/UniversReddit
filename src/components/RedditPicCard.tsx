import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { UseGetUserInfo } from '../hooks/getUserQuery';
import Thumbnail from './PictureCard/thumbnail';
import CardInfo from './PictureCard/cardInfo';

export const IMAGE_HEIGHT = 180;

export type RedditCardProps = {
  title: string;
  author: string;
  thumbnail?: string;
  score: number;
  numComments: number;
  creationDate: number;
  onPress: () => void;
};

const RedditPicCard: React.FC<RedditCardProps> = ({
  title,
  author,
  thumbnail,
  score,
  numComments,
  creationDate,
  onPress
}) => {

    const {userData, isLoading} = UseGetUserInfo(author);
    
    if (isLoading) return null

    return (
        <Pressable style={styles.container} onPress={() => onPress()}>
            <Thumbnail title={title} thumbnail={thumbnail} score={score} numComments={numComments} />
            <CardInfo author={author} userData={userData} creationDate={creationDate} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
    flex: 1,
  }
});

export default RedditPicCard;