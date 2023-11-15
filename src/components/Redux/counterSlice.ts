import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ItemType = {
  id: string;
  text: string;
};

type AppStateType = {
  list: ItemType[];
};

const appState: AppStateType = {
  list: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState: appState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      const { list } = state;
      state.list = [...list, action.payload];
    },
  },
});

export const { addItem } = appSlice.actions;
export default appSlice.reducer;
