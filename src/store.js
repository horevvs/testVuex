//import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({

  state() {
    return {
      posts: [],
      basketname: 'товара',
      addToposts: [],
      addToposts2: [],
      addToposts3: [],
      addToposts4: [],
      hide: false,
      show: true,
      num: 5,
      totalprice: 0,
      totalprice2: 0,
      totalprice3: 0,
    }
  },

  getters: {
    posts(state) {
      return state.posts
    },
    posts3(state) {
      return state.posts3
    }

  },

  actions: {
    async fetchPosts(context) {
      let session = this.state.num
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${session}`);
      const posts2 = await response.json();
      posts2.forEach((item) => {
        item.quantity = 0
      });
      context.commit('result', posts2)
    },


  },

  mutations: {

    result(state, posts2) {
      state.posts = posts2
    },

    result2(state) {
      state.totalprice3 = 0
    },


    async addlist(state) {
      state.num = state.num + 5
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit= ${state.num}`);
      const posts2 = await response.json();
      state.posts = posts2
      state.posts.forEach((item) => {
        item.quantity = 0
      });
      console.log(posts2)
    },

    addTobasket(state, id) {
      state.addToposts.push(state.posts.filter(item => item.id == id))
      state.addToposts.every(item => {
        if (item[0].id == id) {
          item[0].quantity++
          return false;
        } else {
          return true;
        }
      });

      state.addToposts.forEach((item) => state.addToposts2.push(item[0]))
      state.addToposts3 = state.addToposts2.filter((obj, index) => {
        return index === state.addToposts2.findIndex(o => obj.id === o.id)
      });

    },

    quantityMinus(state, id) {

      state.addToposts3.every(item => {
        if (item.id == id) {
          if (item.quantity > 0) {
            item.quantity--
            return false;
          }
        } else {
          return true;
        }
      })
    },


    openbasket(state) {
      state.hide = !state.hide
      state.show = !state.show
    },

    quantityPlus(state, id) {
      state.addToposts3.every(item => {
        if (item.id == id) {
          item.quantity++
          return false;
        } else {
          return true;
        }
      })
    }
  },
})

export default store