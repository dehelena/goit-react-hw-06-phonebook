import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
// console.log('store', store);

// ============== OLD REDUX ======================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = (rootReducer, enhancer);
