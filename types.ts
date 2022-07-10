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

export type LastRace = {
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
    Results: [{
      position: string,
      points: string,
      Driver: {
        driverId: string,
        permanentNumber: string,
        code: string,
        givenName: string,
        familyName: string,
        dateOfBirth: string,
        nationality: string,
      }
      Constructor: {
        constructorId: string,
        name: string,
        nationality: string,
      }
      FastestLap: {
        rank: string,
      }
    }]
  }
}

export type Schedule = {
  season: string,
  raceData: [{
    round: string,
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
      time: string
    }
  }]
};

export type DriverStandings = {
  season: string,
  round: string,
  dataTable: [{
    position: string,
    points: string,
    wins: string,
    Driver: {
      driverId: string,
      permanentNumber: string,
      code: string,
      givenName: string,
      familyName: string,
      dateOfBirth: string,
      nationality: string,
    }
    Constructors: [{
      constructorId: string,
      name: string,
      nationality: string,
    }]
  }]
}

export type ConstructorStandings = {
  season: string,
  round: string,
  dataTable: [{
    position: string,
    points: string,
    wins: string,
    Constructor: {
      constructorId: string,
      name: string,
      nationality: string,
    }
  }]
}
