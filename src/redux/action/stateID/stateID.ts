import { AppDispatch } from "../..";
import axios from "axios";
import { State } from "../../../model/model";
import { stateErrors, stateArticleID } from "../../state/stateID/stateID";

export const fetchArticleID = (id: string | undefined) =>{
    return async (dispatch: AppDispatch) =>{
        try{
            const res = await axios.get<State>(`${process.env.REACT_APP_API_PATH}article/state/${id}`);
            dispatch(stateArticleID(res.data));

        } catch(e){
            dispatch(stateErrors(e as Error));
        }
    }
} 