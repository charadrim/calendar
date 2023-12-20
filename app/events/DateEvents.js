import React from 'react';
import jsonData from './sportData.json';

const sportData = jsonData.data;

export function getEvents() {
  return sportData;
}

export function getEvent(id) {
  return sportData.find((event) => event.id === id);
}

export function getEventsByDate(sportData, dateVenue) {
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

  return eventsByDate.get(dateVenue) || [];
}
