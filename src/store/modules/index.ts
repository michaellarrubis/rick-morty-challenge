import { combineReducers } from 'redux';
import characterReducer from 'store/modules/character/characterReducer';

const reducers = combineReducers({
    characters: characterReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;