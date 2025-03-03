import axios from "axios";

const apiKey: string | undefined = process.env.API_KEY;
const sheetsApiUrl: string | undefined = process.env.SHEETS_API_URL;
const youtubeApiUrl: string | undefined = process.env.YOUTUBE_API_URL;

// NOT TESTED !!!!!!!
export const getScheduleResults = async (
  level?: string,
  season?: string
): Promise<any> => {
  const url = `${sheetsApiUrl}${level}-schedule?alt=json&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

export const getAlumni = async (): Promise<any> => {
  const url = `${sheetsApiUrl}alumni?alt=json&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

export const getAnnouncements = async (): Promise<any> => {
  const url = `${sheetsApiUrl}announcements?alt=json&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

export const getRoster = async (): Promise<any> => {
  const url = `${sheetsApiUrl}roster?alt=json&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

export const getLinks = async (): Promise<any> => {
  const url = `${sheetsApiUrl}links?alt=json&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

export const getSponsors = async (): Promise<any> => {
  const url = `${sheetsApiUrl}sponsors?alt=json&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

export const getStoriedRivals = async (): Promise<any> => {
  const url = `${youtubeApiUrl}${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
