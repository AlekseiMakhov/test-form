(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5386a7a4"],{"122a":function(t,e,a){"use strict";a("2206")},2206:function(t,e,a){},a01e:function(t,e,a){},a875:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal-layout",{attrs:{"is-outside-clickable":t.isOutsideClickable},on:{close:t.close}},[a("div",{staticClass:"modal modal-width-l"},[a("h2",{staticClass:"modal__title"},[t._v(" "+t._s(t.title)+" ")]),a("Table",{attrs:{data:t.cart,columns:t.columns,"empty-text":"Корзина пуста"},on:{"delete-from-cart":t.deleteFromCart,"change-value":t.changeCount,"set-error":t.setError}}),a("div",{staticClass:"total"},[t._v(" "+t._s(t.totalText)+" ")]),a("div",{staticClass:"modal__btns"},[a("v-btn",{staticClass:"btn btn_normal btn_primary",attrs:{disabled:t.disabled,type:"submit",label:"Сохранить корзину"},on:{click:t.changeCart}})],1)],1)])},o=[],r=a("6b75");function i(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var l=a("06c5");a("d9e2");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||s(t)||Object(l["a"])(t)||c()}var d=a("5530"),h=(a("c740"),a("b680"),a("d81d"),a("a434"),a("22de")),m=a("2f62"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{mode:"out-in",name:"fade"}},[a("div",{staticClass:"modal-layout"},[a("div",{staticClass:"modal-layout__overlay"}),a("div",{staticClass:"modal-layout__box",on:{click:function(e){return e.target!==e.currentTarget?null:t.handleClose.apply(null,arguments)}}},[a("div",{staticClass:"modal-layout__wrap",on:{click:function(e){return e.target!==e.currentTarget?null:t.handleClose.apply(null,arguments)}}},[a("div",{staticClass:"modal-layout__content",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[a("div",{staticClass:"modal-layout__close",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.close.apply(null,arguments)}}},[a("icon-switch",{attrs:{name:"close","is-button":""}})],1),t._t("default")],2)])])])])},b=[],p=a("7415"),y={components:{IconSwitch:p["a"]},name:"ModalLayout",props:{isOutsideClickable:{type:Boolean,default:!1}},methods:{handleClose:function(){return this.isOutsideClickable&&this.close()},handleEsc:function(t){"Escape"===t.key&&this.handleClose()},close:function(){this.$emit("close")}},mounted:function(){document.addEventListener("keyup",this.handleEsc)},destroyed:function(){document.removeEventListener("keyup",this.handleEsc)}},C=y,v=(a("122a"),a("2877")),_=Object(v["a"])(C,f,b,!1,null,"67389da4",null),g=_.exports,k=a("f121"),O=function(t,e){return t.findIndex((function(t){return t.T===e.T&&t.G===e.G}))},E={name:"CartModal",components:{Table:h["a"],ModalLayout:g},data:function(){return{errors:[],items:[],loading:!1}},props:{isOutsideClickable:{type:Boolean,default:!1},title:{type:String,default:"Корзина"}},computed:Object(d["a"])(Object(d["a"])({},Object(m["c"])({cart:"cart"})),{},{columns:function(){return k["a"].cart.columns},disabled:function(){return!this.cart.length||this.hasError||this.loading},hasError:function(){return!!this.errors.length},total:function(){return this.items.reduce((function(t,e){return t+e.C*e.count}),0).toFixed(k["a"].priceDigitsNumber)},totalText:function(){return"Общая сумма: ".concat(this.total," руб.")}}),methods:Object(d["a"])(Object(d["a"])({},Object(m["b"])({callDeleteFromCart:"deleteFromCart",callChangeCart:"changeCart"})),{},{deleteFromCart:function(t){this.callDeleteFromCart(t),this.checkItems(t)},close:function(){this.$emit("close")},changeCount:function(t,e){var a=O(this.items,e);this.items=this.items.map((function(e,n){return n===a&&(e.count=t),e}))},setError:function(t,e){var a=O(this.errors,e);t&&a<0?this.errors.push(e):!t&&a>=0&&this.errors.splice(a,1)},checkItems:function(t){var e=O(this.items,t);this.items.splice(e,1)},changeCart:function(){if(!this.disabled)try{this.loading=!0,this.callChangeCart(this.items),alert("Корзина сохранена")}catch(t){console.error(t)}finally{this.loading=!1}}}),mounted:function(){this.items=u(this.cart)}},w=E,j=(a("ba45"),Object(v["a"])(w,n,o,!1,null,"76478671",null));e["default"]=j.exports},ba45:function(t,e,a){"use strict";a("a01e")}}]);
//# sourceMappingURL=chunk-5386a7a4.bdf41018.js.map