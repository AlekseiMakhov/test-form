<template>
  <div class="table">
    <Row
      :columns="columns"
      class="row__header"
      is-header
    />
    <div v-if="data.length">
      <Row
        v-for="(item, key) of data"
        :key="key"
        :data="item"
        :columns="columns"
        class="row__normal"
        has-icon
        @action="actionHandler"
      />
    </div>
    <div v-else class="table__empty">
      {{ emptyText }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Row from './Row'

export default {
  components: { Row },

  name: 'Table',

  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
    columns: {
      type: Object,
      default: () => {},
    },
    emptyText: {
      type: String,
      default: 'Нет данных',
    }
  },

  computed: {
    ...mapGetters({ cart: 'cart' }),
  },

  methods: {
    actionHandler(value, action, data) {
      this.$emit(action, value, data)
    },
  }
}
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &__empty {
    width: 100%;
    margin: 20px 0;
    text-align: center;
    color: $active;
  }
}
</style>