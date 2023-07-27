import { AppDispatch } from "../..";
import axios from "axios";
import { stateErrors, stateProjects } from "../../state/project/projct";
import { Projects } from "../../../model/model";

export const fetchProject = () =>{
    return async (dispatch: AppDispatch) =>{
        try{
            const res = await axios.get<Projects>(`${process.env.REACT_APP_API_PATH}user/project`);
            dispatch(stateProjects(res.data));

        } catch(e){
            dispatch(stateErrors(e as Error));
        }
    }
}