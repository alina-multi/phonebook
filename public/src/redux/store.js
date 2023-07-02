import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contactsSlice";
import { filterReducer} from "./filterSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactReducer = persistReducer(persistConfig, contactsReducer )

export const store = configureStore({
  reducer: {
    contactsPersist: persistedContactReducer,
    filter: filterReducer,
  },
});

export let persistor = persistStore(store);