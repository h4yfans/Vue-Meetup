// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBjoaHdhc9MScDKHn8dYe13b4wQLpCPnOg',
      authDomain: 'meetup-vue-h4yfans.firebaseapp.com',
      databaseURL: 'https://meetup-vue-h4yfans.firebaseio.com',
      projectId: 'meetup-vue-h4yfans',
      storageBucket: 'gs://meetup-vue-h4yfans.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    this.$store.dispatch('loadMeetups')
  }
})
