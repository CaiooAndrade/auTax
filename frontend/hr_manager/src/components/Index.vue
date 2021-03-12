<template>
  <v-container>
      <div class="text-center">
    <v-chip
      class="ma-2"
      color="success"
      outlined
    >
      <v-icon left>
        mdi-server-plus
      </v-icon>
      Total Users: {{totalUsers}}
    </v-chip>
  </div>
  </v-container>
</template>

<script>
  import axios from 'axios';
  export default {
     data: () => ({
       totalUsers:0
      
    }),
     methods: {
      initialize () {
        axios.get(`/users`)
        .then(data=>{
          this.totalUsers = data.data.users.length;
        })
        .finally(()=>{
          this.loading=false;
        })
      },
    },
    created () {
      this.initialize()
    },
  }
</script>
