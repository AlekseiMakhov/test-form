<template>
  <modal-layout
    :is-outside-clickable="isOutsideClickable"
    @close="close"
  >
    <div class="modal modal-width-l">
      <h2 class="modal__title">
        {{ title }}
      </h2>
      <Table
        :data="cart"
        :columns="columns"
        empty-text="Корзина пуста"
        @delete-from-cart="deleteFromCart"
        @change-value="changeCount"
        @set-error="setError"
      />
      <div class="modal__btns">
        <v-btn
          :disabled="disabled"
          class="btn btn_normal btn_primary"
          type="submit"
          label="Сохранить корзину"
          @click="changeCart"
        />
      </div>
    </div>
  </modal-layout>
</template>

<script>
import Table from '../table/Table'
import { mapActions, mapGetters } from 'vuex'
import ModalLayout from '../ModalLayout'
import config from '../../config'

const findIndex = (items, data) => items.findIndex(el => el.T === data.T && el.G === data.G)

export default {
  name: 'CartModal',

  components: {
    Table,
    ModalLayout,
  },

  data: () => ({
    errors: [],
    items: [],
    loading: false,
  }),

  props: {
    isOutsideClickable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Корзина',
    },
  },

  computed: {
    ...mapGetters({ cart: 'cart' }),

    columns() {
      return config.cart.columns
    },
    disabled() {
      return !this.cart.length || this.hasError || this.loading
    },
    hasError() {
      return !!this.errors.length
    }
  },

  methods: {
    ...mapActions({
      callDeleteFromCart: 'deleteFromCart',
      callChangeCart: 'changeCart',
    }),

    deleteFromCart(item) {
      this.callDeleteFromCart(item)
      this.checkItems(item)
    },

    close() {
      this.$emit('close')
    },

    changeCount(value, item) {
      const idx = findIndex(this.items, item)
      this.items.map((el, i) => {
        if (i === idx) {
          el.count = value
        }
        return el
      })
    },

    setError(bVal, data) {
      const idx = findIndex(this.errors, data)
      if (bVal && idx < 0) {
        this.errors.push(data)
      } else if (!bVal && idx >= 0) {
        this.errors.splice(idx, 1)
      }
    },

    checkItems(item) {
      const idx = findIndex(this.items, item)
      this.items.splice(idx, 1)
    },

    changeCart() {
      if (this.disabled) return
      try {
        this.loading = true
        this.callChangeCart(this.items)
        alert('Корзина сохранена')
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  },

  mounted() {
    this.items = [...this.cart]
  }
}
</script>

<style lang="scss" scoped>
.modal {
  padding: 30px;
  background: $white;
  display: flex;
  z-index: 450;
  flex-direction: column;
  position: relative;
  font-weight: 500;
  letter-spacing: 0.01em;
  overflow: initial;
  border-radius: $border-radius;

  &__title {
    font-size: 16px;
    line-height: 23px;
    color: $black;
    margin-bottom: 30px;
    max-width: 80%;
  }

  &__btns {
    display: flex;
    justify-content: end;
  }
}

.modal-width-l {
  width: 90vw;
  min-width: 760px;
}
</style>