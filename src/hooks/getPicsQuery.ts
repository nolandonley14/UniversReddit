import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const getFilteredPictures = async (filter: string) => {
  const filteredPicsURL = `https://api.reddit.com/r/pics/${filter}.json`;
  const response = await axios.get(filteredPicsURL);
  return response.data.data.children;
};

export const UseGetFilteredPictures = (filter: string) => {
  const {isLoading, data: filteredData} = useQuery(
    ['getPics', filter],
    () => getFilteredPictures(filter),
  );
  return {filteredData, isLoading};
};
