<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Edit User</h1>
      <hr>
      <section>
        <b-field label="Full Name">
          <b-input v-model="user.fullname" />
        </b-field>

        <b-field label="Email">
          <b-input v-model="user.email" type="email" maxlength="255" />
        </b-field>

        <b-field label="Username">
          <b-input v-model="user.username" maxlength="30" />
        </b-field>

        <b-field label="Password">
          <b-input v-model="user.password" type="password" maxlength="30" />
        </b-field>

        <b-button type="is-success" @click="saveUser" expanded>Save</b-button>
        <br>
        <router-link to="/user">Cancel</router-link>
      </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        fullname: '',
        email: '',
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    axios.get(`http://localhost:9999/users/${this.$route.params.id}`)
      .then((r) => {
        if (r.data) {
          this.user.fullname = r.data.fullname
          this.user.email = r.data.email
          this.user.username = r.data.username
        }
      })
    // console.log(this.$route.params.id)
    // if (this.$route.params.id === 123) {
    //   this.user.fullname = 'Tester'
    //   this.user.email = 'test@mail.net'
    //   this.user.username = 'testtest'
    // }
  },
  methods: {
    saveUser () {
      axios.put(`http://localhost:9999/users/${this.$route.params.id}`, {
        fullname: this.user.fullname,
        email: this.user.email,
        username: this.user.username,
        password: this.user.password
      })
        .then((r) => {
          this.$buefy.snackbar.open({
            message: 'Success!',
            type: 'is-success',
            position: 'is-top'
          })
          this.$router.push('/user')
        })
        .catch((e) => {
          this.$buefy.snackbar.open({
            message: e.response.data.errors.message,
            type: 'is-danger',
            position: 'is-top'
          })
        })
    }
  }
}
</script>
