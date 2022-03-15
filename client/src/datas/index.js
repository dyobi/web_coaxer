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

import {
	getPicture,
	postPicture,
	deletePicture
} from './picture';

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

	getPicture,
	postPicture,
	deletePicture,

	requestGoogleToken,
	requestGoogleProfile,
	requestFacebookToken,
	requestFacebookProfile,
	requestGithubToken,
	requestGithubProfile
};