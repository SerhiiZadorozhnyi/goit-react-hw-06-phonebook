import contactReducer from "./contact/contact-reduce";
import { 
    configureStore, 
    getDefaultMiddleware, 
    combineReducers, 
} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
};

const rootReducer =  combineReducers({ contacts: contactReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware,
});

export const persistor = persistStore(store);