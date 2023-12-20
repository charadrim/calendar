'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import AddEventForm from './AddEventForm';
import { getEventsByDate } from './DateEvents.js';
import styles from './page.module.css';
import jsonData from './sportData.json';

export default function EventList() {
  const [sportData, setSportData] = useState(jsonData.data);

  const handleAddEvent = (newEvent) => {
    setSportData((prevSportData) => [...prevSportData, newEvent]);
  };

  return (
    <div className={styles.container}>
      <h2>Upcoming Events</h2>
      <div className={styles.calendarBox}>
        <Calendar
          tileContent={({ date }) => {
            const dateKey = date.toISOString().split('T')[0];
            const events = getEventsByDate(sportData, dateKey);

            return (
              <div className={styles.dateBox}>
                {events.map((event, index) => (
                  <div key={index} className={styles.eventLink}>
                    <style jsx>{`
                      p:hover {
                        color: #ff0000;
                      }
                    `}</style>
                    <Link href={`/events/${event.id}`} passHref>
                      <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                        {event.homeTeam?.name || 'N/A'} -{' '}
                        {event.awayTeam?.name || 'N/A'}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            );
          }}
          tileClassName={styles.sameSizeDateBox}
        />
      </div>
      <div className={styles.newEvent}>
        <h2>Add New Event</h2>
        <div>
          <AddEventForm onAddEvent={handleAddEvent} />
        </div>
      </div>
    </div>
  );
}
