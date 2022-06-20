<template>
  <div
    class="inpt"
    @mouseover.stop="setErrorTooltipVisibility(true)"
    @mouseout.stop="setErrorTooltipVisibility(false)"
  >
    <input
      :class="['inpt__input', { 'inpt__input_error': hasError }]"
      :type="type"
      :value="value"
      @input="input"
    />
    <div v-if="isErrorVisible && hasError" class="inpt__error">
      {{ errorText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  data: () => ({
    isErrorVisible: false,
  }),

  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number],
      default: '',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: '',
    }
  },

  methods: {
    getValue(event) {
      let value
      if (event.target) {
        value = event.target.value
      }
      if (["string", "number", "date"].includes(typeof event)) {
        value = event
      }
      return value
    },

    input(event) {
      this.$emit("input", this.getValue(event))
    },

    setErrorTooltipVisibility(bVal) {
      this.isErrorVisible = bVal
    }
  },
};
</script>

<style lang="scss" scoped>
.inpt {
  width: 100%;
  position: relative;
  border-radius: $border-radius;
  z-index: 10;
  border: 1px solid #d3d8dd;
  &:hover, &:focus-within {
    border: 1px solid rgba($color: $black, $alpha: .6);;
  }

  &__error {
    position: absolute;
    z-index: 11;
    right: -85%;
    padding: 0 5px;
    top: 0;
    background-color: rgba($color: $error-color, $alpha: 1);
    border: 1px solid rgba($color: $error-color, $alpha: 1);
    border-radius: 4px;
    box-shadow: 0 6px 6px rgba($color: $black, $alpha: .06);
    width: 80%;
    padding: 10px;
    font-size: 13px;
    line-height: 1.2;
  }

  &__input {
    width: 100%;
    background: none;
    border: none;
    border-radius: $border-radius;
    outline: none;
    height: 30px;
    padding: 0 5px;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0.01em;
    color: $black;
    background: $white;

    &_error {
      background-color: rgba($color: $error-color, $alpha: .5);
    }
  }
}
</style>
