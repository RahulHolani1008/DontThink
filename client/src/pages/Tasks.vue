<template>
  <q-table
    grid
    :card-container-class="cardContainerClass"
    title="Tasks"
    :data="data"
    :columns="columns"
    row-key="name"
    :filter="filter"
    hide-header
    :pagination.sync="pagination"
    :rows-per-page-options="rowsPerPageOptions"
  >
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <template v-slot:item="props">
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <q-card :class="'bg-' + determineColor('priority', props.row.priority)">
          <q-card-section class="text-center">
            <strong>{{ props.row.title }}</strong>
            <div>{{ props.row.dueDate }}</div>
          </q-card-section>
          <q-separator />
          <q-card-section
            class="flex flex-center"
            :style="{ fontSize: props.row.severity + 'rem' }"
          >
            <div>{{ props.row.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-table>
</template>
<script>
import { date } from "quasar";
const deserts = [
  "Frozen Yogurt",
  "Ice cream sandwich",
  "Eclair",
  "Cupcake",
  "Gingerbread",
  "Jelly bean",
  "Lollipop",
  "Honeycomb",
  "Donut",
  "KitKat",
];
const data = [];

deserts.forEach((name) => {
  for (let i = 0; i < 24; i++) {
    data.push({
      title: name,
      description: "THIS IS A NOTE. A note can contain multiple lines",
      dueDate: date.formatDate(new Date(), "dddd, MMM Do YYYY"),
      severity: 1,
      priority: Math.random(0, 1),
    });
  }
});

data.sort(() => -1 + Math.floor(3 * Math.random()));

export default {
  data() {
    return {
      filter: "",
      pagination: {
        page: 1,
        rowsPerPage: this.getItemsPerPage(),
      },
      columns: [
        { name: "title", label: "Title", field: "title" },
        { name: "description", label: "Description", field: "description" },
        { name: "dueDate", label: "Due Date", field: "dueDate" },
      ],
      data,
    };
  },

  computed: {
    cardContainerClass() {
      if (this.$q.screen.gt.xs) {
        return (
          "grid-masonry grid-masonry--" + (this.$q.screen.gt.sm ? "3" : "2")
        );
      }

      return void 0;
    },

    rowsPerPageOptions() {
      if (this.$q.screen.gt.xs) {
        return this.$q.screen.gt.sm ? [5, 10, 50] : [3, 6, 10];
      }

      return [10, 20, 50];
    },
  },

  watch: {
    "$q.screen.name"() {
      this.pagination.rowsPerPage = this.getItemsPerPage();
    },
  },

  methods: {
    getItemsPerPage() {
      const { screen } = this.$q;
      if (screen.lt.sm) {
        return 10;
      }
      if (screen.lt.md) {
        return 20;
      }
      return 50;
    },
    determineColor(type, value) {
      switch (type) {
        case "priority":
          return value > 0.75
            ? "negative"
            : value > 0.5
            ? "warning"
            : value > 0.25
            ? "info"
            : "positive";
      }
    },
  },
};
</script>