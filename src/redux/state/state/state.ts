import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { States } from '../../../model/model';

interface PayloadState{
    states: States;
    error: string;
}

const initialState: PayloadState = {
    states: {} as States,
    error: '',
}

export const newState = createSlice({
    name: 'state',
    initialState,
    reducers:{
        stateProjects: (state, action: PayloadAction<States>) =>{
            state.states.states = action.payload.states;
        },
        stateErrors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateProjects, stateErrors} = newState.actions;
export default newState.reducer;