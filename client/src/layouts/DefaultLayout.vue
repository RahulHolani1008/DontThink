<template>
  <q-layout view="hhh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title> Don't Think™️ </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            clickable
            v-ripple
            v-for="(header, index) in headers"
            :key="index"
            @click="goTo(header.goTo)"
          >
            <q-item-section avatar>
              <q-icon :name="header.icon" />
            </q-item-section>

            <q-item-section> {{ header.title }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="user.selectedProfilePicture" />
          </q-avatar>
          <div class="text-weight-bold">
            {{
              user.firstName +
              " " +
              (user.middleName ? user.middleName + " " : user.lastName)
            }}
          </div>
          <div>{{ user.userName }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      headers: [
        {
          title: "Tasks",
          icon: "task_alt",
          goTo: "tasks",
        },
        {
          title: "Reminders",
          icon: "notifications_active", //Can be notifications / notifications_off
          goTo: "reminders",
        },
        {
          title: "Passwords",
          icon: "password",
          goTo: "passwords",
        },
        {
          title: "Settings",
          icon: "settings",
          goTo: "settings",
        },
      ],
      user: {
        firstName: "Rahul",
        lastName: "Holani",
        userName: "RahulHolani1008",
        selectedProfilePicture:
          "https://media-exp1.licdn.com/dms/image/C4D03AQHMU-qTHshCxw/profile-displayphoto-shrink_800_800/0/1590912655149?e=1621468800&v=beta&t=MF03vvDhBIW23SYHwZ1x-JBKdVnVfcQYBZ7bQeHok-g",
      },
    };
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
  },
};
</script>