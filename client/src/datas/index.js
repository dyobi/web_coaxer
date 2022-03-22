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
	getIdealUsers,
	postUser,
	putUserLastName,
	putUserFirstName,
	putUserDob,
	putPosition,
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

import {
	postHookup
} from './hookup';

import {
	getChatroom
} from './chatroom';

export {
	checkEmail,
	getUser,
	getIdealUsers,
	postUser,
	putUserLastName,
	putUserFirstName,
	putUserDob,
	putPosition,
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

	postHookup,

	getChatroom,

	requestGoogleToken,
	requestGoogleProfile,
	requestFacebookToken,
	requestFacebookProfile,
	requestGithubToken,
	requestGithubProfile
};