import { AppDispatch } from "../..";
import axios from "axios";
import { stateErrors, stateProjects } from "../../state/state/state";
import { States } from "../../../model/model";

export const fetchStates = (categoty: string) =>{
    return async (dispatch: AppDispatch) =>{
        try{
            const res = await axios.post<States>(`${process.env.REACT_APP_API_PATH}article/state`,{
                category: categoty 
            });
            dispatch(stateProjects(res.data));

        } catch(e){
            dispatch(stateErrors(e as Error));
        }
    }
}