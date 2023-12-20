import React from 'react';
import { getEvent } from '../DateEvents.js';

export default function SingleEvent(props: any) {
  const singleEvent = getEvent(Number(props.params.eventId));

  if (!singleEvent) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{singleEvent.dateVenue}</h2>
      <p>This is a single Event page</p>
      <h2>Event Details</h2>
      <p>Event ID: {singleEvent.id}</p>
      <p>Season: {singleEvent.season}</p>
      <p>Status: {singleEvent.status}</p>
      <p>Date: {singleEvent.dateVenue}</p>
      <p>Time (UTC): {singleEvent.timeVenueUTC}</p>
      <p>
        Home Team: {singleEvent.homeTeam ? singleEvent.homeTeam.name : 'N/A'}
      </p>
      <p>
        Away Team: {singleEvent.awayTeam ? singleEvent.awayTeam.name : 'N/A'}
      </p>
      <p>
        Result:{' '}
        {singleEvent.result
          ? `${singleEvent.result.homeGoals} - ${singleEvent.result.awayGoals}`
          : 'N/A'}
      </p>
      <p>Winner: {singleEvent.result ? singleEvent.result.winner : 'N/A'}</p>
      <p>Stage: {singleEvent.stage ? singleEvent.stage.name : 'N/A'}</p>
      <p>Competition: {singleEvent.originCompetitionName}</p>
    </div>
  );
}
