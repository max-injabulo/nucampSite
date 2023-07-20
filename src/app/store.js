

import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { partnersReducer } from '../features/partners/partnerSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }
});

