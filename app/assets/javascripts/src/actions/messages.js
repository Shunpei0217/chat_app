import dispatcher from '../dispatcher'

export default {
	changeOpenChat(newUserID) {
		Dispatcher.handleViewAction({
			type: 'pudateOpenChatID',
			userID: newUserID,
		})
	},
	sendMessage(userID, message) {
		Dispatcher.handleViewAction({
			type: 'sendMessage',
			userID: userID,
			message: message,
			timestamp: +new Date(),
		})
	}
}