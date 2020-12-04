<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Add New User</h1>
      <hr>
      <section>
        <b-field label="Full Name">
          <b-input />
        </b-field>

        <b-field label="Email">
          <b-input type="email" maxlength="255" />
        </b-field>

        <b-field label="Username">
          <b-input maxlength="30" />
        </b-field>

        <b-field label="Password">
          <b-input type="password" maxlength="30" />
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
