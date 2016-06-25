import Dispatcher from '../dispatcher'
import BaseStore from '../base/store'
import UserStore from '../stores/user'

MessagesStore.dispatchToken = Dispatcher.register(payload => {
	const actions = {
		updateOpenChatID(payload) {
			openChatID = payload.action.userID
			messages[openChatID].lastAccess.currentUser = +new Date()
			MessagesStore.emitChange()
		},
		sendMessage(payload) {
			const userID = payload.action.userID
			messages[userID].messages.push({
				contents: payload.action.message,
				timestamp: payload.action.timestamp,
				from: UserStore.user.id,
			})
			messages[userID].lastAccess.currentUser = +new Date()
			MessagesStore.emitChange()
		},
	}

	actions[payload.action.type] && actions[payload.action.type](payload)
})