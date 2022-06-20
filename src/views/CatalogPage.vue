<template>
  <div class="catalog">
    <Container
      v-for="(item, key) of categories"
      :key="key"
      :title="item.category"
    >
      <Table
        :data="item.items"
        :columns="columns"
        @add-to-cart="addToCart"
      />
    </Container>
    <cart-modal
      v-if="isCartModalActive"
      is-outside-clickable
      @close="closeModal"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Container from '../components/Container.vue'
import Table from '../components/table/Table.vue'
import config from '../config'

export default {
  components: {
    Container,
    Table,
    CartModal: () => import('../components/modals/CartModal'),
  },

  data: () => ({
    interval: null,
  }),

  computed: {
    ...mapGetters({
      getCatalogData: 'getCatalogData',
      isCartModalActive: 'isCartModalActive',
    }),
    categories() {
      return this.getCatalogData
    },
    columns() {
      return config.catalog.columns
    },
  },

  methods: {
    ...mapActions({
      callLoadCart: 'loadCart',
      callLoadCatalogData: 'loadCatalogData',
      callAddToCart: 'addToCart',
      callCloseCartModal: 'closeCartModal',
    }),
    loadData() {
      try {
        this.callLoadCatalogData()
      } catch (error) {
        throw error
      }
    },
    setLoadingInterval() {
      this.interval = setInterval(() => {
        this.loadData()
      }, config.fetchInterval)
    },
    addToCart(item) {
      this.callAddToCart(item)
    },
    closeModal() {
      this.callCloseCartModal()
    }
  },

  created() {
    try {
      this.callLoadCart()
      this.loadData()
      this.setLoadingInterval()
    } catch (error) {
      console.error(error)
    }
  },

  beforeDestroy() {
    this.interval = null
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 760px;
  gap: 5px;
}
</style>
