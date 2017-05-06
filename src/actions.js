import {
    ADD_CLASSIFCATION,
    SET_URL,
    ANALYZE_CONTENT
} from './constants';

export function addClassification({value}) {
    return {
        type: ADD_CLASSIFICATION,
        value
    };
}

export function setUrl({url}) {
    console.log('setUrl', url);
    return {
        type: SET_URL,
        url
    }
}

export function analyzeContent({}) {
    return {
        type: ANALYZE_CONTENT
    };
}