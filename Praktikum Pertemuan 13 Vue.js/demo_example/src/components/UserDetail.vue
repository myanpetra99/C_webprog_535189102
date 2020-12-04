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
    console.log(this.$route.params.id)
    if (this.$route.params.id === 123) {
      this.user.fullname = 'Tester'
      this.user.email = 'test@mail.net'
      this.user.username = 'testtest'
    }
  },
  methods: {
    saveUser () {
      this.$buefy.snackbar.open({
        message: 'Success!',
        type: 'is-success',
        position: 'is-top'
      })
      this.$router.push('/user')
    }
  }
}
</script>
