import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';

interface UserState {
  byId: Record<string, User>;
  allIds: string[];
  isLoading: boolean;
}

const initialState: UserState = {
  byId: {},
  allIds: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      const user = action.payload;
      if (!state.byId[user.uid]) {
        state.byId[user.uid] = {
          ...user,
          bio: user.bio || 'No bio yet',
          isHost: false,
          eventsHosted: [],
          eventsAttending: [],
        };
        state.allIds.push(user.uid);
      }
    },
    updateUser(state, action: PayloadAction<User>) {
      const user = action.payload;
      if (state.byId[user.uid]) {
        state.byId[user.uid] = user;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      const userId = action.payload;
      delete state.byId[userId];
      state.allIds = state.allIds.filter(id => id !== userId);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { addUser, updateUser, deleteUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
