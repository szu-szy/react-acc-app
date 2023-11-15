import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// stworzenie typu dla pojedynczego elementu
type ItemType = {
  id: string;
  text: string;
};

// stworzenie typu stanu
type AppStateType = {
  list: ItemType[];
};

const appState: AppStateType = {
  list: [
    {
      id: "list-item-type-1",
      text: "list item type text 1",
    },
  ],
};

// reducers jest to obiekt ktory przechowuje akcje - aktualizuja stan w odpowiedzi na konkretne akcje
// np addItem
export const appSlice = createSlice({
  name: "app",
  initialState: appState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      const { list } = state;
      state.list = [...list, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const { list } = state;
      state.list = list.filter(({ id }) => id !== action.payload);
    },
  },
});

// wyciaganie pojedynczych akcji sluzacych do aktualizacji stanu
export const { addItem, removeItem } = appSlice.actions;

// udostepnienie reducera - aby nasz store mial dostep do akcji i stanu
export default appSlice.reducer;
