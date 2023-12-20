import React, { useState } from 'react';

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
    <div>
      <h3>Add New Event:</h3>
      <label>
        Home Team:
        <input
          type="text"
          name="homeTeam"
          value={newEvent.homeTeam}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Away Team:
        <input
          type="text"
          name="awayTeam"
          value={newEvent.awayTeam}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Date Venue:
        <input
          type="date"
          name="dateVenue"
          value={newEvent.dateVenue}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default AddEventForm;
