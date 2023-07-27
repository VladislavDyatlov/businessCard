import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../../model/model';

interface PayloadProject{
    project: Project;
    error: string;
}

const initialState: PayloadProject = {
    project: {} as Project,
    error: '',
}
 
export const newProject = createSlice({
    name: 'projectId',
    initialState,
    reducers:{
        stateProjectsId: (state, action: PayloadAction<Project>) =>{
            state.project = action.payload;
        },
        stateErrors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateProjectsId, stateErrors} = newProject.actions;
export default newProject.reducer;