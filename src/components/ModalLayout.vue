<template>
  <transition mode="out-in" name="fade">
    <div class="modal-layout">
      <div class="modal-layout__overlay" />
      <div class="modal-layout__box" @click.self="handleClose">
        <div class="modal-layout__wrap" @click.self="handleClose">
          <div class="modal-layout__content" @click.self="close">
            <div class="modal-layout__close" @click.prevent.stop="close">
              <icon-switch name="close" is-button />
            </div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconSwitch from './ui/IconSwitch';
export default {
  components: { IconSwitch },
  name: "ModalLayout",
  props: {
    isOutsideClickable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      return this.isOutsideClickable && this.close();
    },
    handleEsc(event) {
      if (event.key === 'Escape') {
        this.handleClose();
      }
    },
    close() {
      this.$emit("close");
    }
  },
  mounted() {
    document.addEventListener('keyup', this.handleEsc);
  },
  destroyed() {
    document.removeEventListener('keyup', this.handleEsc);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: $transition;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-layout {
  position: relative;
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(50, 60, 71, 0.5);
    z-index: 500;
  }

  &__box {
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    text-align: center;
    white-space: nowrap;
    z-index: 501;
  }

  &__wrap {
    position: relative;
    height: 100%;
    &:after {
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 100%;
      content: "";
    }
  }

  &__content {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    white-space: normal;
    text-align: left;
    margin: auto;
  }

  &__close {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    z-index: 502;
  }
}
</style>
