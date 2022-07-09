export type StackParamList = {
  Home: undefined,
  Schedule: undefined,
};

export type NextRace = {
  season: string,
  round: string,
  raceData: {
    raceName: string,
    Circuit: {
      circuitName: string,
      Location: {
        locality: string,
        country: string,
      }
    }
    date: string,
    time: string,
    Qualifying: {
      date: string,
      time: string,
    }
  }
}

export type Schedule = {
  year: string,
  totalRaces: string,
  races: [{
      date: string,
      time: string,
      round: string,
      raceName: string,
      Circuit: {
        circuitName: string,
        Location: {
          locality: string,
        }
      },
      Qualifying: {
        date: string,
        time: string
      }
  }],
};

export type LastRace = {
  date: string,
  time: string,
  round: string,
  raceName: string,
  circuitName: string,
  results: [{
    points: string,
    FastestLap: {
      rank: string,
    },
    Driver: {
      givenName: string,
      familyName: string,
      code: string,
      permanentNumber: string,
      dateOfBirth: string,
      nationality: string
    }
    Constructor: {
      name: string,
      nationality: string,
    },
  }],
}

export type LocationPhoto = {
  url: string,
}
