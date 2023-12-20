'use client';
import React from 'react';
import Calendar from 'react-calendar';
import styles from './EventList.module.css';
import jsonData from './sportData.json';

export default function EventList() {
  const sportData = jsonData.data;

  const eventsByDate = new Map();
  sportData.forEach((event) => {
    const date = new Date(event.dateVenue);
    date.setDate(date.getDate() - 1);
    const dateKey = date.toISOString().split('T')[0];
    if (!eventsByDate.has(dateKey)) {
      eventsByDate.set(dateKey, []);
    }
    eventsByDate.get(dateKey).push(event);
  });

  return (
    <div>
      <h2>Upcoming Events</h2>

      <div className={styles.calendarBox}>
        <Calendar
          tileContent={({ activeStartDate, date, view }) => {
            const dateKey = date.toISOString().split('T')[0];
            const events = eventsByDate.get(dateKey) || [];

            return (
              <div>
                {events.map((event: any, index: any) => (
                  <div key={index}>
                    <p>
                      {event.homeTeam && event.homeTeam.name} vs{' '}
                      {event.awayTeam && event.awayTeam.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          }}
          tileClassName={styles.sameSizeDateBox}
        />
      </div>
    </div>
  );
}
