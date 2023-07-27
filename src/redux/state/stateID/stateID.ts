import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../../model/model';

interface PayloadState{
    state: State;
    error: string;
}

const initialState: PayloadState = {
    state: {} as State,
    error: '',
}
 
export const newStateID = createSlice({
    name: 'newStateID',
    initialState,
    reducers:{
        stateArticleID: (state, action: PayloadAction<State>) =>{
            state.state = action.payload;
        },
        stateErrors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateArticleID, stateErrors} = newStateID.actions;
export default newStateID.reducer;