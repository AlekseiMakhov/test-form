<template>
  <div class="header">
    <div class="header__icons">
      <div
        class="header__cart"
        @click="openCartModal"
      >
        <icon-switch
          is-button
          name="cart"
        />
        <span class="header__cart-size">{{ count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconSwitch from "@/components/ui/IconSwitch";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { IconSwitch },

  computed: {
    ...mapGetters({
      cartSize: 'cartSize',
    }),
    count() {
      return this.cartSize > 9 ? 9 : this.cartSize;
    }
  },

  methods: {
    ...mapActions({ callOpenCartModal: 'openCartModal' }),
    openCartModal() {
      this.callOpenCartModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 30;
  position: fixed;
  top: 0;
  width: 100vw;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 21px 30px;
  color: $gray;
  background: $white;
  border-bottom: 1px solid lightgray;

  &__cart {
    position: relative;
    &:hover > &-size{
      background-color: $active;
    }
    &-size {
      z-index: 40;
      position: absolute;
      top: -8px;
      right: -8px;
      border-radius: 50%;
      text-align: center;
      font-size: 13px;
      line-height: 20px;
      font-weight: bold;
      cursor: pointer;
      color: $white;
      background-color: $black;
      width: 20px;
      height: 20px;
      &:hover {
        background-color: $active;
      }
    }
  }

  &__icons {
    display: flex;
    align-items: center;
  }
}
</style>
