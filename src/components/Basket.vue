<template>

    <div class="mt-3">

        <div class="d-flex flex-wrap    justify-content-evenly">
            <button type="button" class="btn btn-danger  mt-3 ">
                Оформить Заказ
            </button>

            <div class="mt-3"> Итоговая цена {{ totalprice }} рублей</div>
            <button type="button" class="btn btn-danger text-danger m-3 ">
                <router-link @:click="openbasket" class="link-light" :to="'/'"> На главную </router-link>
            </button>

        </div>


        <div class="d-flex flex-column" v-if="posts.length !== 0">

            <div tag="div" v-for="(item, index) in posts" v-bind:key="index">
                <div class="card  m-5" style="width: 18rem;">
                    <!-- <img :src=item.url class="card-img-top" alt="..."> -->
                    <div class="card-body text-center">
                        <p class="card-text"> {{ item.title }}</p>
                        <p class="card-text">id- {{ item.id }}</p>
                        <p class="card-text">price- {{ item.id }} руб.</p>
                    </div>

                    <div class="d-flex mb-2 justify-content-center">
                        <button @:click="quantityMinus(item.id)" type="button"
                            className="btn btn-dark btn-sm mx-2 px-2"> - </button>
                        <p class="card-text"> {{ item.quantity }} -шт</p>
                        <button @:click="quantityPlus(item.id)" type="button" className="btn btn-dark btn-sm mx-2 px-2">
                            + </button>
                    </div>

                </div>
            </div>

        </div>

        <div v-else>
            <p> пусто </p>
        </div>

    </div>

</template>
<script>

export default {
    name: 'Home-a',

    data() {
        return {
            result: []
        };
    },
    computed: {
        posts() {
            return this.$store.state.addToposts3
        },

        totalprice() {
            let result = 0
            result = this.$store.state.addToposts3.reduce(function (sum, elem) {
                return sum + elem.quantity*elem.id;
            }, 0);
            return result
        },


    },

    methods: {
        openbasket() {
            this.$store.commit('openbasket')
        },

        quantityMinus(id) {
            this.$store.commit('quantityMinus', id)
        },
        quantityPlus(id) {
            this.$store.commit('quantityPlus', id)
        },
    },


}
</script>
