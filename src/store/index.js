import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://i.pinimg.com/originals/a2/50/03/a25003d26a35ace681cf28fd3e57613d.jpg',
        id: 'asdfasdf123',
        title: 'Meetup in Istanbul',
        date: '2017-07-17',
        location: 'Istanbul',
        description: 'Istanbul, Europe'
      }, {
        imageUrl: 'https://c1.staticflickr.com/3/2463/3598596311_84211f2566_b.jpg',
        id: 'asdfasdf123123',
        title: 'Meetup in Paris',
        date: '2017-07-18',
        location: 'Paris',
        description: 'Paris, West'
      }
    ],
    user: {
      id: '789789ff1',
      registeredMeetups: ['2']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      // payload'da var olan fakat kullanmak istemeyeceğimiz propertyler olduğunu düşündüğümüz için farklı bir nesne oluşturuyoruz
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'sadfsadf'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },

    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },

    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
