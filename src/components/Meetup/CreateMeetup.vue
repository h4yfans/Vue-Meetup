<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="secondary--text">Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout>
            <v-flex row xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                v-model="title"
                id="title"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex row xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                v-model="location"
                id="location"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex row xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image Url"
                v-model="imageUrl"
                location="imageUrl"
                id="image-url"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex row xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150"/>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex row xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                v-model="description"
                id="description"
                multi-line
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"
              >Create Meetup
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        description: '',
        imageUrl: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>
