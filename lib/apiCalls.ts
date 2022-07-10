import axios from 'axios';

import {
  ConstructorStandings, DriverStandings, LastRace, NextRace, Schedule,
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
      season: data.MRData.RaceTable.season,
      raceData: data.MRData.RaceTable.Races,
    };
    return schedule;
  } catch (err) { throw new Error('Error fetching schedule.'); }
};

export const fetchDriverStandings = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current/driverStandings.json');
    const driverStandings: DriverStandings = {
      season: data.MRData.StandingsTable.StandingsLists[0].season,
      round: data.MRData.StandingsTable.StandingsLists[0].round,
      dataTable: data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
    };
    return driverStandings;
  } catch (err) { throw new Error('Error fetching driver standings.'); }
};

export const fetchConstructorStandings = async () => {
  try {
    const { data } = await axios.get('https://ergast.com/api/f1/current/constructorStandings.json');
    const constructorStandings: ConstructorStandings = {
      season: data.MRData.StandingsTable.StandingsLists[0].season,
      round: data.MRData.StandingsTable.StandingsLists[0].round,
      dataTable: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
    };
    return constructorStandings;
  } catch (err) { throw new Error('Error fetching constructor standings.'); }
};
