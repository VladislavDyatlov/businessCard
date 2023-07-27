import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Projects } from '../../../model/model';

interface PayloadProject{
    project: Projects;
    error: string;
}

const initialState: PayloadProject = {
    project: {} as Projects,
    error: '',
}

export const newSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        stateProjects: (state, action: PayloadAction<Projects>) =>{
            state.project.project = action.payload.project;
        },
        stateErrors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateProjects, stateErrors} = newSlice.actions;
export default newSlice.reducer;