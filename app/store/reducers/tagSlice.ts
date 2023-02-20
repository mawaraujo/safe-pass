import { createSlice } from '@reduxjs/toolkit';
import { NStore, NTag } from '../../types';

const initialState = [] as NTag.Tags;

export default createSlice({
  name: 'tags',
  initialState,
  reducers: {
    add(state, action: NStore.Action<NTag.Tag>) {
      state.unshift(action.payload);
    },

    edit(state, action: NStore.Action<NTag.Tag>) {
      const itemIndex = state.findIndex((tag) => tag.id === action.payload.id);

      if (itemIndex !== -1) {
        state[itemIndex] = action.payload;
      }
    },

    delete(state, action: NStore.Action<NTag.Tag>) {
      const itemIndex = state.findIndex((tag) =>
        tag.id === action.payload.id);

      state.splice(itemIndex, 1);
    },

    import(state, action: NStore.Action<NTag.Tags>) {
      action.payload.forEach((newTag) => {
        state.unshift(newTag);
      });
    },
  },
});
