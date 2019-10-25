import _ from "lodash";
export const GET_PROFILES = "GET_PROFILES";
export const LOADING_PROFILES = "LOADING_PROFILES";
export const GET_PROFILE = "GET_PROFILE";
export const LOADING_PROFILE = "LOADING_PROFILE";

export function getProfiles(profiles = {}) {
    return { type: GET_PROFILES, profiles };
}

export function getProfile(profile = {}) {
    return { type: GET_PROFILE, profile };
}

export function loadingProfiles() {
    return { type: LOADING_PROFILES };
}

export function loadingProfile() {
    return { type: LOADING_PROFILE };
}


export function startGetProfiles() {
  return (dispatch) => {
    dispatch(loadingProfiles());
    return fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
          throw new Error("error");
        }
      })
        .then(data => {
            if (data !== null) {
                console.log("response profiles ", data);
                findProfessions(data.Brastlewark);
                dispatch(getProfiles(data));            }
        })
      .catch(err => {
        console.log(err);
      });
  };
}

export function startGetProfileById(id) {
    console.log("startGetProfileById " + id);
    return (dispatch) => {
        dispatch(loadingProfile());
        return fetch(
            "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("error");
                }
            })
            .then(data => {
                if (data !== null) {
                    console.log("response profile ", data.Brastlewark.find(o => o.id === id));
                    dispatch(getProfile(adjustJsonProfile(data.Brastlewark, data.Brastlewark.find(o => o.id === id))));
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
}


const adjustJsonProfile = (profiles, profile) => {
    let friendsInfo = profiles.filter(o => profile.friends.includes(o.name));
    profile.friendsInfo = friendsInfo;
    console.log(friendsInfo);
    return profile;
}

const findProfessions = (profiles) => {
    let professions = [];
    for(let i = 0; i<profiles.length; i++){
        for(let l=0; l<profiles[i].professions.length; l++)
                professions.push(profiles[i].professions[l]);
    }
    let p = _.uniq(professions);
    console.log(p);

}



