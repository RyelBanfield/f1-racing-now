import axios from 'axios';

import { LastRace, LocationPhoto, Schedule } from '../types';

export const fetchCurrentSeason = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current.json');
    const schedule: Schedule = {
      year: data.MRData.RaceTable.season,
      totalRaces: data.MRData.total,
      races: data.MRData.RaceTable.Races,
    };
    return schedule;
  } catch (err) { throw new Error('Error fetching current season.'); }
};

export const fetchLastRaceResults = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current/last/results.json');
    const lastRace: LastRace = {
      date: data.MRData.RaceTable.Races[0].date,
      time: data.MRData.RaceTable.Races[0].time,
      round: data.MRData.RaceTable.round,
      raceName: data.MRData.RaceTable.Races[0].raceName,
      circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
      results: data.MRData.RaceTable.Races[0].Results,
    };
    return lastRace;
  } catch (err) { throw new Error('Error fetching last race.'); }
};

export const fetchPhotoOfLocation = async (raceLocation: string) => {
  try {
    const { data } = await axios.get(`https://f1-racing-now-api.herokuapp.com/get-photos?location=${raceLocation}`);
    const locationPhoto: LocationPhoto = {
      url:
      data.response.results[Math.floor(Math.random() * data.response.results.length)].urls.regular,
    };
    return locationPhoto;
  } catch (err) { throw new Error('Error fetching photo of location.'); }
};
