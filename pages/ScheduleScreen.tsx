import React from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import Calendar from '../components/Calendar';
import Error from '../components/Error';
import LoadingCircle from '../components/LoadingCircle';
import { fetchSchedule } from '../lib/apiCalls';

export default function ScheduleScreen() {
  const scheduleQuery = useQuery('schedule', fetchSchedule);

  if (scheduleQuery.isLoading) return <LoadingCircle />;
  if (scheduleQuery.isError) return <Error />;

  return (
    <ScrollView>
      <Calendar schedule={scheduleQuery.data!} />
    </ScrollView>
  );
}
