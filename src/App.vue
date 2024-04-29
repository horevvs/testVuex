<template>

  <div class="mt-3">

    <header class="">
      <button v-if="this.$store.state.show" type="button"
        class="btn btn-danger text-danger m-2 position-absolute top-0 end-0">
        <router-link @:click="openbasket" class="link-light" :to="'/basket'"> {{ this.$store.state.addToposts3.length
        !== 0 ? `В корзине
          ${lengthArray} ${lengthArrayabc}` : 'В корзине пусто' }}</router-link>

      </button>


    </header>


    <main class="container">
      <RouterView v-bind:basket="this.posts" />
    </main>

  </div>




</template>

<script>


export default {

  methods: {
    openbasket() {
      this.$store.commit('openbasket')
    },
  },

  computed: {
    lengthArray() {
      let result = 0

      result = this.$store.state.addToposts3.reduce(function (sum, elem) {
        return sum + elem.quantity ;
      }, 0);

      return result

      // if (this.$store.state.addToposts.length !== 0) {

      //   return this.$store.state.addToposts.length
      // }
      // else {
      //   return 'В  корзине пусто'
      // }
    },

    lengthArrayabc() {
      if (this.$store.state.addToposts.length === 1) {
        return 'Товар'
      }
      if (this.$store.state.addToposts.length >= 2 && this.$store.state.addToposts.length <= 5) {
        return 'Товара'
      }
      else {
        return 'Товаров'
      }
    }
  },






}




</script>

<style>
.basket {
  background-color: brown;
}
</style>