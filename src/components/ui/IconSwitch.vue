<template>
  <div ref='name' :class="iconClass"></div>
</template>

<script>
export default {
  name: "IconSwitch",

  props: {
    name: {
      type: String,
      required: true,
    },

    active: {
      type: Boolean,
      default: false,
    },

    isButton: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    iconClass() {
      return [
        'svg-icon',
        {
          'svg-icon_active': this.active,
          'svg-icon_is-button': this.isButton,
          'svg-icon_disabled': this.disabled,
        },
      ]
    }
  },

  methods: {
    setImage() {
      const icon = this.$refs.name;
      icon.style.WebkitMaskImage = `url( ${require("@/assets/icons/" + this.name + ".svg")}`;
    },

    setBackground() {
      const icon = this.$refs.name;
      icon.style.WebkitMaskPosition = "center";
    },
  },

  watch: {
    name() {
      this.setImage();
    },
  },

  mounted() {
    this.setImage();
    this.setBackground();
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  min-width: 22px;
  min-height: 22px;
  mask-repeat: no-repeat;
  background-color: $icon-default;

  &_is-button {
    cursor: pointer;
  }

  &_disabled {
    background-color: $icon-default !important;
  }

  &_added {
    background-color: $green !important;
  }

  &_active {
    background-color: $active;
  }
}
</style>
