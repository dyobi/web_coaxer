import {
	requestGoogleToken,
	requestGoogleProfile,
	requestFacebookToken,
	requestFacebookProfile,
	requestGithubToken,
	requestGithubProfile
} from './oAuth';

import {
	checkEmail,
	getUser,
	postUser,
	putUserLastName,
	putUserFirstName,
	putUserDob,
	putUserGender,
	putUserBio,
	putUserNotification,
	putUserPreferredGender,
	putUserPreferredAgeRange,
	putUserPreferredMaxRange,
	putUserSocialType,
	deleteUser
} from './user';

export {
	checkEmail,
	getUser,
	postUser,
	putUserLastName,
	putUserFirstName,
	putUserDob,
	putUserGender,
	putUserBio,
	putUserNotification,
	putUserPreferredGender,
	putUserPreferredAgeRange,
	putUserPreferredMaxRange,
	putUserSocialType,
	deleteUser,

	requestGoogleToken,
	requestGoogleProfile,
	requestFacebookToken,
	requestFacebookProfile,
	requestGithubToken,
	requestGithubProfile
};