<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Users</h1>
      <hr>
      <div class="buttons">
        <b-button class="is-primary" tag="router-link" to="/user-add">Add New User</b-button>
        <!--
        <b-button class="is-secondary" tag="router-link" :to="{ name: 'UserDetail', params: { id: 123 }}">Edit Dummy User</b-button>
        <b-button class="is-danger" @click="trashModal">Delete Dummy User</b-button>
        -->
      </div>
      <!-- <b-table :data="users" :columns="columns" /> -->
      <b-table :data="users" :loading="isLoading">
        <b-table-column label="No" field="no" v-slot="props" width="50">
          {{ props.index + 1 }}
        </b-table-column>
        <b-table-column label="Full Name" field="fullname" v-slot="props" sortable>
          {{ props.row.fullname }}
        </b-table-column>
        <b-table-column label="Email" field="email" v-slot="props" sortable>
          {{ props.row.email }}
        </b-table-column>
        <b-table-column label="Username" field="username" v-slot="props" sortable>
          {{ props.row.username }}
        </b-table-column>
        <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
          <div class="buttons is-right">
            <b-button class="is-secondary" tag="router-link" :to="{ name: 'UserDetail', params: { id: props.row._id }}">Edit</b-button>
            <b-button class="is-danger" @click="trashModal(props.row._id, props.row.fullname)">Delete</b-button>
          </div>
        </b-table-column>
      </b-table>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: [],
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get('http://localhost:9999/users')
        .then((r) => {
          if (r.data) {
            this.users = r.data
          }
        })
        .catch((e) => {
          this.$buefy.snackbar.open({
            message: 'Error!',
            type: 'is-danger',
            position: 'is-top'
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    trashModal (id, name) {
      this.$buefy.dialog.confirm({
        title: 'Delete Confirmation',
        message: `Are you sure want to delete <b>${name}</b>?`,
        confirmText: 'Yes',
        cancelText: 'Cancel',
        type: 'is-danger',
        onConfirm: () => {
          axios.delete(`http://localhost:9999/users/${id}`)
            .then((r) => {
              this.loadData()
              this.$buefy.snackbar.open({
                message: 'Success!',
                type: 'is-success',
                position: 'is-top'
              })
            })
            .catch((e) => {
              this.$buefy.snackbar.open({
                message: 'Error!',
                type: 'is-danger',
                position: 'is-top'
              })
            })
        }
      })
    }
  }
}
/*
export default {
  data () {
    return {
      users: [
        {
          'no': 1,
          'username': 'johndoe',
          'email': 'john.doe@gmail.com',
          'fullname': 'John Doe'
        },
        {
          'no': 2,
          'username': 'janedoe',
          'email': 'jane.doe@gmail.com',
          'fullname': 'Jane Doe'
        },
        {
          'no': 3,
          'username': 'jansonh',
          'email': 'jansonh@fti.untar.ac.id',
          'fullname': 'Janson Hendryli'
        }
      ],
      columns: [
        {
          field: 'no',
          label: 'No',
          width: '40',
          numeric: true,
          centered: true
        },
        {
          field: 'username',
          label: 'Username',
          centered: true
        },
        {
          field: 'email',
          label: 'Email Address',
          centered: true
        },
        {
          field: 'fullname',
          label: 'Full Name',
          centered: true
        }
      ]
    }
  },
  methods: {
    trashModal () {
      this.$buefy.dialog.confirm({
        title: 'Delete Confirmation',
        message: 'Are you sure want to delete <b>Dummy User</b>?',
        confirmText: 'Yes',
        cancelText: 'Cancel',
        type: 'is-danger',
        onConfirm: () => { }
      })
    }
  }
}
*/
</script>
