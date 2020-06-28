import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import {Permissions} from "expo-permissions"

const NOTIFICATION_KEY = 'mobile-flashcards:notifications'

function createNotification () {
  return {
    title: 'Take a Quiz',
    body: "👋 Don't forget to practice today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }


export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              //Set for 12pm
              tomorrow.setHours(12)  

              Notifications.scheduleLocalNotificationAsync(
                  createNotification(), 
                  { time: tomorrow, 
                    repeat: 'day' })
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
