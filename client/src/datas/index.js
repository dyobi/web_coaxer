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
	getHookupOverview,
	postHookup
} from './hookup';

import {
	getChatroom,
	deleteMessage
} from './chatroom';

import {
	getLog,
	postLog
} from './log';

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

	getHookupOverview,
	postHookup,

	getChatroom,
	deleteMessage,

	getLog,
	postLog,

	requestGoogleToken,
	requestGoogleProfile,
	requestFacebookToken,
	requestFacebookProfile,
	requestGithubToken,
	requestGithubProfile
};