<template>
<div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link :key="i" v-for="(item, i) in menu" :to="{path: item.path}">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>        
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>HR Management System</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="shrink">
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$vuetify.theme.dark = true
  },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      menu: [
        {
        icon: 'mdi-desktop-mac-dashboard',
        title: 'Dashboard',
        path: '/'
      },
      {
        icon: 'mdi-account-multiple',
        title: 'HR Manage',
        path: '/users'
      },
      ],
      right: true,
      rightDrawer: false,
      title: "HR Management System"
    }
  },
}
</script>