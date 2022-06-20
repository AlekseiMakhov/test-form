<template>
  <button
    :disabled="disabled"
    :type="type"
    class="btn"
    @click="click"
  >
    <span v-if="hasIcon">
      <slot />
    </span>

    <span v-if="label">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    hasIcon: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    click() {
      this.$emit('click');
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border: 0;
  padding: 0 20px;
  background: none;
  cursor: pointer;
  transition: $transition;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: $active;
  border-radius: $border-radius;

  &_primary {
    background: $white;
    border: 1px solid $active;
    &:hover {
      background-color: $active;
      color: $white;
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      color: $black;
      border: none;
      background: $icon-default;
      box-shadow: none;
    }
    &:focus {
      box-shadow: none;
    }
  }

  &_icon {
    padding: 0;
    width: 40px;
    &:hover:not(:disabled) .svg-icon {
      background-color: $active !important;
    }
  }

  &_added > .svg-icon {
    background-color: $green !important;
  }

  &_normal {
    height: 42px;
    font-size: 13px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
}
</style>
