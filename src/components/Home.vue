<template>
  <div>

    <div class=" d-flex flex-wrap justify-content-center  ">
      <div tag="div" v-for="(item, index) in posts" v-bind:key="index">
        <div class="card m-1" style="width: 18rem;">
          <img :src=item.url class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">номер id - {{ item.id }}</p>
            <button type="button" class="btn btn-danger text-danger mt-1"> <router-link class="link-light"
                :to="'/' + item.id"> Посмотреть товар</router-link></button>
            <button type="button" class="btn btn-danger  mt-1" @click="addTobasket(item.id)">В корзину</button> 
          </div>
        </div>
      </div>

    </div>
    <div class="text-center">
     
      <button type="button" @:click="addlist" class="btn btn-primary m-3">Добавить список</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-a',
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  },

  methods:{
    addlist(){
      this.$store.commit('addlist')
    },
    addTobasket(id){
      this.$store.commit('addTobasket',id)
    }
    


  },

  async mounted() {
    this.$store.dispatch('fetchPosts')
  }

}
</script>
