import React, { useState } from 'react';
import styles from './page.module.css';

const AddEventForm = ({ onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    homeTeam: '',
    awayTeam: '',
    dateVenue: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleAddEvent = () => {
    onAddEvent(newEvent);
    setNewEvent({
      homeTeam: '',
      awayTeam: '',
      dateVenue: '',
    });
  };

  return (
    <div className={styles.newEventBox}>
      <div className={styles.newEventDetails}>
        <label>
          <div>Home Team:</div>

          <input
            type="text"
            name="homeTeam"
            value={newEvent.homeTeam}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className={styles.newEventDetails}>
        <label>
          <div>Away Team:</div>

          <input
            type="text"
            name="awayTeam"
            value={newEvent.awayTeam}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className={styles.newEventDetails}>
        <label>
          <div>Date Venue:</div>
          <input
            type="date"
            name="dateVenue"
            value={newEvent.dateVenue}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className={styles.newEventDetails}>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default AddEventForm;
