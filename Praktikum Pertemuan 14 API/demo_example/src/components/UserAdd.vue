<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Add New User</h1>
      <hr>
      <section>
        <b-field label="Full Name">
          <b-input v-model="user.fullname" required />
        </b-field>

        <b-field label="Email">
          <b-input v-model="user.email" type="email" maxlength="255" required />
        </b-field>

        <b-field label="Username">
          <b-input v-model="user.username" maxlength="30" required />
        </b-field>

        <b-field label="Password">
          <b-input v-model="user.password" type="password" maxlength="30" required />
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
  methods: {
    saveUser () {
      axios.post('http://localhost:9999/users', {
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
