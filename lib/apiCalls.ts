import axios from 'axios';

import {
  LastRace, NextRace, Schedule,
} from '../types';

export const fetchNextRace = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current/next.json');
    const nextRace: NextRace = {
      season: data.MRData.RaceTable.season,
      round: data.MRData.RaceTable.round,
      raceData: data.MRData.RaceTable.Races[0],
    };
    return nextRace;
  } catch (err) { throw new Error('Error fetching next race.'); }
};

export const fetchLastRace = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current/last/results.json');
    const lastRace: LastRace = {
      season: data.MRData.RaceTable.season,
      round: data.MRData.RaceTable.round,
      raceData: data.MRData.RaceTable.Races[0],
    };
    return lastRace;
  } catch (err) { throw new Error('Error fetching last race.'); }
};

export const fetchSchedule = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current.json');
    const schedule: Schedule = {
      year: data.MRData.RaceTable.season,
      totalRaces: data.MRData.total,
      races: data.MRData.RaceTable.Races,
    };
    return schedule;
  } catch (err) { throw new Error('Error fetching schedule.'); }
};
