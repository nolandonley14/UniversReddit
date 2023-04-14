import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const getUserPic = async (username: string) => {
    const userInformation = `https://api.reddit.com/user/${username}/about`;
    const response = await axios.get(userInformation);
    return response.data.data.snoovatar_img;
};

export const UseGetUserInfo = (username: string) => {
  const {isLoading, data: userData} = useQuery(
    ['getUser', username],
    () => getUserPic(username),
  );
  return {userData, isLoading};
};
