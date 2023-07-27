import { configureStore } from "@reduxjs/toolkit";
import newSlice from "./state/project/projct";
import newProject from "./state/projectID/projectID";
import newState from "./state/state/state";
import newStateID from "./state/stateID/stateID";

export const store = configureStore({
    reducer:{
        project: newSlice,
        projectId: newProject,
        stateId: newStateID,
        state: newState,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;