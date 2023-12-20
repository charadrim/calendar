import React from 'react';
import { getEvent } from '../DateEvents.js';
import styles from './page.module.css';

export default function SingleEvent(props: any) {
  const singleEvent = getEvent(Number(props.params.eventId));

  if (!singleEvent) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h2>
        {singleEvent.homeTeam?.name || 'N/A'} vs{' '}
        {singleEvent.awayTeam?.name || 'N/A'}
      </h2>
      <div className={styles.singleEventBox}>
        <h2>Event Details</h2>
        <div>
          <div>
            <div>Season: </div>
            <p>{singleEvent.season}</p>
          </div>
          <div>
            <div>Status: </div>
            <p>{singleEvent.status}</p>
          </div>
          <div>
            <div>Date: </div>
            <p>{singleEvent.dateVenue}</p>
          </div>
          <div>
            <div>Time (UTC): </div>
            <p>{singleEvent.timeVenueUTC}</p>
          </div>
          <div>
            <div>Stadium: </div>
            <p>{singleEvent.stadium}</p>
          </div>
        </div>
        <div>
          <div>
            <div>Home Team: </div>
            <p>{singleEvent.homeTeam?.name || 'N/A'}</p>
          </div>
          <div>
            <div>Official Name: </div>
            <p>{singleEvent.homeTeam?.officialName || 'N/A'}</p>
          </div>
          <div>
            <div>Slug: </div>
            <p>{singleEvent.homeTeam?.slug || 'N/A'}</p>
          </div>
          <div>
            <div>Abbreviation: </div>
            <p>{singleEvent.homeTeam?.abbreviation || 'N/A'}</p>
          </div>
          <div>
            <div>Team Country Code: </div>
            <p>{singleEvent.homeTeam?.teamCountryCode || 'N/A'}</p>
          </div>
          <div>
            <div>stage Position: </div>
            <p>{singleEvent.homeTeam?.stagePosition || 'N/A'}</p>
          </div>
        </div>
        <div>
          {' '}
          <div>
            <div>Away Team: </div>
            <p>{singleEvent.awayTeam ? singleEvent.awayTeam.name : 'N/A'}</p>
          </div>
          <div>
            <div>Official Name: </div>
            <p>{singleEvent.awayTeam?.officialName || 'N/A'}</p>
          </div>
          <div>
            <div>Slug: </div>
            <p>{singleEvent.awayTeam?.slug || 'N/A'}</p>
          </div>
          <div>
            <div>Abbreviation: </div>
            <p>{singleEvent.awayTeam?.abbreviation || 'N/A'}</p>
          </div>
          <div>
            <div>Team Country Code: </div>
            <p>{singleEvent.awayTeam?.teamCountryCode || 'N/A'}</p>
          </div>
          <div>
            <div>stage Position: </div>
            <p>{singleEvent.awayTeam?.stagePosition || 'N/A'}</p>
          </div>
        </div>
        <div>
          <div>
            <div>Result: </div>
            <p>
              {singleEvent.result
                ? `${singleEvent.result.homeGoals} - ${singleEvent.result.awayGoals}`
                : 'N/A'}
            </p>
          </div>
          <div>
            <div>Home Goals: </div>
            <p>{singleEvent.result?.homeGoals || 'N/A'}</p>
          </div>
          <div>
            <div>Away Goals: </div>
            <p>{singleEvent.result?.awayGoals || 'N/A'}</p>
          </div>
          <div>
            <div>Winner: </div>
            <p>{singleEvent.result?.winner || 'N/A'}</p>
          </div>
          <div>
            <div>Message: </div>
            <p>{singleEvent.result?.message || 'N/A'}</p>
          </div>
          <div>
            <div>Goals: </div>
            <p>{singleEvent.result?.goals || 'N/A'}</p>
          </div>
          <div>
            <div>Yellow Cards: </div>
            <p>{singleEvent.result?.yellowCards || 'N/A'}</p>
          </div>
          <div>
            <div>Second Yellow Cards: </div>
            <p>{singleEvent.result?.secondYellowCards || 'N/A'}</p>
          </div>
          <div>
            <div>Direct Red Cards: </div>
            <p>{singleEvent.result?.directRedCards || 'N/A'}</p>
          </div>
        </div>
        <div>
          {' '}
          <div>
            <div>Stage: </div>
            <p>{singleEvent.stage?.name || 'N/A'}</p>
          </div>
          <div>
            <div>Id: </div>
            <p>{singleEvent.stage.id}</p>
          </div>
          <div>
            <div>Name: </div>
            <p>{singleEvent.stage.name}</p>
          </div>
          <div>
            <div>Ordering: </div>
            <p>{singleEvent.stage.ordering}</p>
          </div>
        </div>
        <div>
          <div>
            <div>Group: </div>
            <p>{singleEvent.group}</p>
          </div>
          <div>
            <div>Competition Id: </div>
            <p>{singleEvent.originCompetitionId}</p>
          </div>
          <div>
            <div>Competition: </div>
            <p>{singleEvent.originCompetitionName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
