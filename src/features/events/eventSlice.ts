import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event as EventType } from '../../types/event';
import { events } from '../../data'

interface EventState {
    events: EventType[];
}

const initialState: EventState = {
    events: events
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<Event>) {
            state.events.push(action.payload);
        },
        updateEvent(state, action: PayloadAction<Event>) {
            const index = state.events.findIndex(event => event.id === action.payload.id);
            if (index !== -1) {
                state.events[index] = action.payload;
            }
        },
        deleteEvent(state, action: PayloadAction<number>) {
            state.events = state.events.filter(event => event.id !== action.payload);
        },
    },
});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
