<template>

  <div>
    <button type="button" class="btn btn-danger text-danger m-3"> <router-link class="link-light" :to="'/'"> На
        главную</router-link></button>

    <div class="   container containers mt-5  ">
      <h1>Карточка товара</h1>
      <div v-for="(item, index) in   dataAfterfetch" v-bind:key="index">
        <div class="card m-1" style="width: 22rem;">
          <img :src=item.url class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">номер id - {{ item.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'About_',
  data() {
    return {
      dataAfterfetch: null,
      id: this.$route.params.id,
    }
  },



  computed: {
    posts() {
      return this.$store.getters.posts
    },
  },

  async mounted() {
    this.$store.dispatch('fetchPosts')
    this.dataAfterfetch = this.posts.filter(item => item.id == this.id)

  },




}
</script>

<style scoped>
.containers {
  width: 400px;
  height: 00px;
  background-color: blueviolet;
}
</style>
