import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';

interface UserState {
  byId: Record<string, User>;
  allIds: string[];
  isLoading: boolean;
}

const testInfo = {
  'tH1Dnm1zZISidaLFqlXOounsllx1': {
    "uid": "tH1Dnm1zZISidaLFqlXOounsllx1",
    "email": "sinonsenpai2@gmail.com",
    "displayName": "Unauthorized person",
    "photoURL": "",
    "bio": "No bio yet",
    "isHost": false,
    "eventsHosted": [],
    "eventsAttending": []
  }
}

const initialState: UserState = {
  byId: testInfo,
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
    updateUser(state, action: PayloadAction<Partial<User> & { uid: string }>) {
      const { uid, ...updates } = action.payload;
      if (state.byId[uid]) {
        state.byId[uid] = { ...state.byId[uid], ...updates };
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
