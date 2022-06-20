import Vue from 'vue'
import Vuex from 'vuex'
import { sortData, checkCart } from '../utils/helper';
import api from '../utils/api';

const CART = 'cart';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    catalogData: [],
    isCartModalActive: false,
  },

  getters: {
    cart: state => state.cart,
    cartSize: state => Object.keys(state.cart)?.length,
    getCatalogData: state => state.catalogData,
    isCartModalActive: state => state.isCartModalActive,
  },

  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item)
    },
    DELETE_FROM_CART(state, item) {
      const idx = state.cart.findIndex(el => el.T === item.T && el.G === item.G)
      state.cart.splice(idx, 1)
    },
    SET_CART(state, item) {
      state.cart = item
    },
    SAVE_CART(state) {
      localStorage.setItem(CART, JSON.stringify(state.cart))
    },
    SET_CONVERTED_DATA(state, data) {
      Vue.set(state, 'catalogData', sortData(data))
    },
    CHECK_ITEMS_IN_CART(state) {
      const data = JSON.parse(JSON.stringify(state.catalogData))
      Vue.set(state, 'catalogData', checkCart(data, state.cart))
    },
    SET_CART_MODAL_VISIBILITY(state, bVal) {
      state.isCartModalActive = bVal
    }
  },

  actions: {
    addToCart({ commit }, item) {
      item.count = 1
      commit('ADD_TO_CART', item)
      commit('SAVE_CART')
      commit('CHECK_ITEMS_IN_CART')
    },
    deleteFromCart({ commit }, item) {
      commit('DELETE_FROM_CART', item)
      commit('SAVE_CART')
      commit('CHECK_ITEMS_IN_CART')
    },
    loadCart({ commit }) {
      const cart = JSON.parse(localStorage.getItem(CART))
      if (cart) {
        commit('SET_CART', cart)
      }
    },
    changeCart({ commit }, item) {
      commit('SET_CART', item)
      commit('SAVE_CART')
    },
    saveCart({ commit }) {
      commit('SAVE_CART')
    },
    async loadCatalogData({ commit }) {
      try {
        const data = await api.getCatalogData()
        commit('SET_CONVERTED_DATA', data.Value.Goods)
        commit('CHECK_ITEMS_IN_CART')
      } catch (error) {
        throw error
      }
    },
    closeCartModal({ commit }) {
      commit('SET_CART_MODAL_VISIBILITY', false)
    },
    openCartModal({ commit }) {
      commit('SET_CART_MODAL_VISIBILITY', true)
    },
  },
})
