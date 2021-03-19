<template>
  <default-layout />
</template>

<script>
import DefaultLayout from "./DefaultLayout.vue";

export default {
  name: "MainLayout",
  components: { DefaultLayout },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
