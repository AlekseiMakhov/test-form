<template>
  <div :class="[ 'container', { 'container_collapsed': collapsed } ]">
    <div class="container__top">
      <div class="container__header">
        {{ title }}
      </div>
      <div class="container__button" @click="handleClick">
        <icon-switch
          :class="[ 'chevron', { 'chevron_down': !collapsed } ]"
          name="chevron-left"
          is-button
        />
      </div>
    </div>
    <Transition name="slide" mode="out-in">
      <div v-show="!collapsed" class="content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script>
import IconSwitch from './ui/IconSwitch';
export default {
  name: 'Container',

  components: { IconSwitch },

  props: {
    title: {
      type: String,
      default: 'Без категории',
    },
  },

  data: () => ({
    collapsed: true,
  }),

  methods: {
    handleClick() {
      this.collapsed = !this.collapsed;
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: $transition;
  position: relative;
  background-color: $white;
  border: 1px solid rgba($color: $black, $alpha: .1);
  border-radius: $border-radius;
  padding: 20px 25px 0;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__header {
    font-size: 18px;
    font-weight: 500;
    color: $black;
  }
}

.chevron {
  transform: rotate(-90deg);
  transition: $transition;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &_down {
    transform: rotate(90deg);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: $transition;
  max-height: 1000px;
  opacity: 1;
}
.slide-enter,
.slide-leave-to
{
  max-height: 0;
  opacity: 0;
}

.content {
  width: 100%;
}
</style>