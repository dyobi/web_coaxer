/***************************************************/

export const user_data = (value) => {
    return {
        type: 'USER_DATA',
        payload: {
            id: value.id,
            userId: value.userId,
            email: value.email,
            firstName: value.firstName,
            lastName: value.lastName,
            dateOfBirth: value.dateOfBirth,
            gender: value.gender,
            bio: value.bio,
            latitude: value.latitude,
            longitude: value.longitude,
            notification: value.notification,
            preferredGender: value.preferredGender,
            preferredMinAge: value.preferredMinAge,
            preferredMaxAge: value.preferredMaxAge,
            preferredMaxDistance: value.preferredMaxDistance
        }
    };
};

export const user_firstName = (value) => {
    return {
        type: 'USER_FIRSTNAME',
        payload: value
    };
};

export const user_lastName = (value) => {
    return {
        type: 'USER_LASTNAME',
        payload: value
    };
};

export const user_dob = (value) => {
    return {
        type: 'USER_DOB',
        payload: value
    };
};

export const user_gender = (value) => {
    return {
        type: 'USER_GENDER',
        payload: value
    };
};

export const user_bio = (value) => {
    return {
        type: 'USER_BIO',
        payload: value
    };
};

export const user_latitude = (value) => {
    return {
        type: 'USER_LATITUDE',
        payload: value
    };
};

export const user_longitude = (value) => {
    return {
        type: 'USER_LONGITUDE',
        payload: value
    };
};

export const user_notification = (value) => {
    return {
        type: 'USER_NOTIFICATION',
        payload: value
    };
};

export const user_p_gender = (value) => {
    return {
        type: 'USER_P_GENDER',
        payload: value
    };
};

export const user_p_minAge = (value) => {
    return {
        type: 'USER_P_MINAGE',
        payload: value
    };
};

export const user_p_maxAge = (value) => {
    return {
        type: 'USER_P_MAXAGE',
        payload: value
    };
};

export const user_p_maxDistance = (value) => {
    return {
        type: 'USER_P_MAXDISTANCE',
        payload: value
    };
};

/***************************************************/

export const ui_lang = (value) => {
    return {
        type: 'UI_LANG',
        payload: value
    };
};

export const ui_color = (value) => {
    return {
        type: 'UI_COLOR',
        payload: value
    };
};

/***************************************************/
