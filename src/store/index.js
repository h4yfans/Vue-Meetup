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
        date: '2017-07-17'
      }, {
        imageUrl: 'https://c1.staticflickr.com/3/2463/3598596311_84211f2566_b.jpg',
        id: 'asdfasdf123123',
        title: 'Meetup in Paris',
        date: '2017-07-18'
      }
    ],
    user: {
      id: '789789ff1',
      registeredMeetups: ['2']
    }
  },
  mutations: {},
  actions: {},
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
