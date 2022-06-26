import axios from 'axios';

import { LastRace, Schedule } from '../types';

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
