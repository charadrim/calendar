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
    <div>
      <h2>Upcoming Events</h2>
      <div className={styles.calendarBox}>
        <Calendar
          tileContent={({ date }) => {
            const dateKey = date.toISOString().split('T')[0];
            const events = getEventsByDate(sportData, dateKey);

            return (
              <div className={styles.calendarBox}>
                {events.map((event, index) => (
                  <div key={index} className={styles.eventLink}>
                    <Link href={`/events/${event.id}`} passHref>
                      <p>
                        {event.homeTeam && event.homeTeam.name} vs{' '}
                        {event.awayTeam && event.awayTeam.name}
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
      <AddEventForm onAddEvent={handleAddEvent} />
    </div>
  );
}
