import {createStore, applyMiddleware} from 'redux';
import {createBackgroundStore} from 'redux-webext';
import {ADD_CLASSIFICATION, CHANGE_CLASSIFICATION, UI_REQUEST_ACTIVE_URL, ANALYZE_CONTENT} from './constants';
import reducers from './reducers';
import {addClassification, setUrl, analyzeContent, requestActiveUrl} from './actions';
import {actions as formActions} from 'redux-form';
import {actionTypes as formActionTypes} from 'redux-form';
import thunk from 'redux-thunk';

const actions = {}

// Pass through Redux-Form action types
actions[formActionTypes.INITIALIZE] = (data) => { return { type: formActionTypes.INITIALIZE, ...data }; }
actions[formActionTypes.REGISTER_FIELD] = (data) => { return { type: formActionTypes.REGISTER_FIELD, ...data }; }
actions[formActionTypes.SUBMIT] = (data) => { return { type: formActionTypes.SUBMIT, ...data }; }
actions[formActionTypes.SET_SUBMIT_SUCCEEDED] = (data) => { return { type: formActionTypes.SET_SUBMIT_SUCCEEDED, ...data }; }
actions[formActionTypes.TOUCH] = (data) => { return { type: formActionTypes.TOUCH, ...data }; }
actions[formActionTypes.CHANGE] = (data) => { return { type: formActionTypes.CHANGE, ...data }; }
actions[formActionTypes.BLUR] = (data) => { return { type: formActionTypes.BLUR, ...data }; }
actions[formActionTypes.FOCUS] = (data) => { return { type: formActionTypes.FOCUS, ...data }; }
actions[formActionTypes.UPDATE_SYNC_ERRORS] = (data) => { return { type: formActionTypes.UPDATE_SYNC_ERRORS, ...data }; }
actions[CHANGE_CLASSIFICATION] = (data) => { return { type: CHANGE_CLASSIFICATION, ...data }; }
actions[ADD_CLASSIFICATION] = (data) => { return { type: ADD_CLASSIFICATION, ...data }; }
actions[UI_REQUEST_ACTIVE_URL] = (data) => { return requestActiveUrl(); }

const store = createStore(
    reducers,
    applyMiddleware(thunk))

export default createBackgroundStore({
    store,
    actions: actions
})
