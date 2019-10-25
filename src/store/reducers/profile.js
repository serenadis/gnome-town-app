import {GET_PROFILES, LOADING_PROFILES, GET_PROFILE, LOADING_PROFILE} from '../actions/profile';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.profiles.Brastlewark,
                loading: false
            };
        case LOADING_PROFILES:
            return{
                ...state,
                loading: true
            };
        case GET_PROFILE:
            return {
                ...state,
                profile:action.profile,
                loading_profile:false
            };
        case LOADING_PROFILE:
            return {
                ...state,
                loading_profile: true
            };
        default:
            return state;
    }
};