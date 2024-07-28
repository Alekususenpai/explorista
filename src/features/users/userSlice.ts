import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';

interface UserState {
  currentUser: User | null;
  value: User[];
}

const initialState: UserState = {
  currentUser: null,
  value: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.value.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.value.findIndex(user => user.uid === action.payload.uid);
      if (index !== -1) {
        state.value[index] = action.payload;
        if (state.currentUser?.uid === action.payload.uid) {
          state.currentUser = action.payload;
        }
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.value = state.value.filter(user => user.uid !== action.payload);
      if (state.currentUser?.uid === action.payload) {
        state.currentUser = null;
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
