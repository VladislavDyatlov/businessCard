import { AppDispatch } from "../..";
import axios from "axios";
import { Project } from "../../../model/model";
import { stateErrors, stateProjectsId } from "../../state/projectID/projectID";

export const fetchProjectID = (id: string | undefined) =>{
    return async (dispatch: AppDispatch) =>{
        try{
            const res = await axios.get<Project>(`${process.env.REACT_APP_API_PATH}user/project/${id}`);
            dispatch(stateProjectsId(res.data));

        } catch(e){
            dispatch(stateErrors(e as Error));
        }
    }
} 