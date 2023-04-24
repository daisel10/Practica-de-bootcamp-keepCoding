import client from '../API/client';

const AdvertsUrl = '/api/v1/adverts';

export const getLatestTweets = () => {
  const url = `${AdvertsUrl}`;
  return client.get(url);
};

export const getTweetDetail = AdvertsId => {
  const url = `${AdvertsUrl}/${AdvertsId}`;
  return client.get(url);
};

export const createTweet = adverst => {
  const url = AdvertsUrl;
  return client.post(url, adverst);
};

export const deleteAdverts = AdvertsId => {
  const url = `${AdvertsUrl}/${AdvertsId}`;
  return client.delete(url)
}