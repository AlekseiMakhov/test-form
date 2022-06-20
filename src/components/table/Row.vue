<template>
  <div class="row">
    <div
      v-for="(item, key) in columns"
      :key="key"
      class="row__cell"
      :style="item.style"
    >
      <span v-if="isHeader">{{ item.header }}</span>
      <component
        v-else-if="item.component"
        :is="item.component"
        :type="item.type"
        :value="value || data[key]"
        :has-error="hasError"
        :error-text="errorText"
        @input="input($event, item.action, data, item, key)"
      />

      <v-btn
        v-else-if="item.icon && hasIcon"
        :disabled="disabled"
        :class="'btn_normal btn_icon'"
        :has-icon="hasIcon"
        @click="actionHandler(data, item.action)"
      >
        <icon-switch
          :name="createIconName(item)"
          :is-button="!disabled"
          :class="{ 'svg-icon_added': disabled }"
          :disabled="disabled"
        />
      </v-btn>
      <span v-else>{{ data[key] }}</span>
    </div>

  </div>
</template>

<script>
import IconSwitch from '../ui/IconSwitch'
export default {
  components: { IconSwitch },
  name: 'Row',

  data: () => ({
    value: 0,
    errorText: '',
    hasError: false,
  }),

  props: {
    data: {
      type: [Object, Array],
      default: () => {},
    },
    columns: {
      type: Object,
      default: () => {},
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    isHeader: {
      type: Boolean,
      default: false,
    },
    disabledField: {
      type: String,
      default: 'inCart',
    }
  },

  computed: {
    disabled() {
      return this.data[this.disabledField]
    },
  },

  methods: {
    createIconName(item) {
      return this.disabled
        ? item.disabledIcon
        : item.icon
    },

    checkValue(key) {
      if (!this.value) {
        this.value = this.data[key]
      }
      return this.value
    },

    checkError(col) {
      this.errorText = ''
      this.hasError = false
      if (!col.errors) return
      const { notEnough, tooLittle } = col.errors
      const diff = Number(this.data[notEnough.min]) - this.value
      if (diff < 0) {
        this.errorText = `${notEnough.text}${this.data[notEnough.min]}`
        this.hasError = true
      } else {
        const num = this.value
        if (!num || num < 0) {
          this.errorText = tooLittle.text
          this.hasError = true
        }
      }
      this.actionHandler(this.hasError, 'set-error', this.data)
    },

    actionHandler(...args) {
      this.$emit('action', ...args)
    },

    input(value, action, data, item, key) {
      this.value = value
      this.checkError(item)
      this.checkValue(key, item)
      this.actionHandler(value, action, data)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  border-radius: $border-radius;
  &__cell {
    margin: auto;
    padding: 10px;
  }
  &__header {
    font-size: 18px;
    font-weight: bold;
    background-color: rgba($color: $green, $alpha: .3);
  }
  &__normal {
    &:nth-last-of-type(2n) {
      background-color: $light-gray;
    }
  }
}
</style>