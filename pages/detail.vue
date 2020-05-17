<template>
<div id="app">
  <Navbar />
  <div class="detail container">
    <div class="my-5" v-for="result in results" :key="result.idMeal">
        <div v-if="mId == idMeal">
            <div class="row" style="height: 100%">
                <b-col cols="5" style="text-align: center">
                    <h2><b>{{result.strMeal}}</b></h2>
                    <b-img :src="result.strMealThumb" fluid-grow></b-img>
                    <div style="margin-top: 2%;">
                        <h5><b-badge variant="primary">{{result.strCategory}}</b-badge></h5>
                        <b-button variant="danger" @click="addFav(result.idMeal, result.strMeal, result.strMealThumb, result.strCategory)"><b-icon-heart-fill /> Add to wishlist</b-button>
                    </div>
                </b-col>
                <b-col cols="3" style="margin-top: -3.3%;">
                    <h3 style="text-align: center"><b>Ingridients</b></h3>
                    <dl style="margin-top: 10%; padding-left: 23%">
                        <dt>{{result.strMeasure1}} {{result.strIngredient1}}</dt>
                        <dt>{{result.strMeasure2}} {{result.strIngredient2}}</dt>
                        <dt>{{result.strMeasure3}} {{result.strIngredient3}}</dt>
                        <dt>{{result.strMeasure4}} {{result.strIngredient4}}</dt>
                        <dt>{{result.strMeasure5}} {{result.strIngredient5}}</dt>
                        <dt>{{result.strMeasure6}} {{result.strIngredient6}}</dt>
                        <dt>{{result.strMeasure7}} {{result.strIngredient7}}</dt>
                        <dt>{{result.strMeasure8}} {{result.strIngredient8}}</dt>
                        <dt>{{result.strMeasure9}} {{result.strIngredient9}}</dt>
                        <dt>{{result.strMeasure10}} {{result.strIngredient10}}</dt>
                        <dt>{{result.strMeasure11}} {{result.strIngredient11}}</dt>
                        <dt>{{result.strMeasure12}} {{result.strIngredient12}}</dt>
                        <dt>{{result.strMeasure13}} {{result.strIngredient13}}</dt>
                        <dt>{{result.strMeasure14}} {{result.strIngredient14}}</dt>
                        <dt>{{result.strMeasure15}} {{result.strIngredient15}}</dt>
                        <dt>{{result.strMeasure16}} {{result.strIngredient16}}</dt>
                        <dt>{{result.strMeasure17}} {{result.strIngredient17}}</dt>
                        <dt>{{result.strMeasure18}} {{result.strIngredient18}}</dt>
                        <dt>{{result.strMeasure19}} {{result.strIngredient19}}</dt>
                        <dt>{{result.strMeasure20}} {{result.strIngredient20}}</dt>
                    </dl>
                </b-col>
                <b-col cols="4" style="margin-top: -3.5%;">
                    <h3 style="text-align: center"><b>Instruction</b></h3>
                    <p style="margin-top: 8%;">{{result.strInstructions}}</p>
                </b-col>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Navbar from '~/components/Navbar.vue'
export default {
  name: 'Foods',
  components: {
    Navbar
  },
  data () {
    return {
      msg: 'Search',
      results: ''
    }
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.$route.params.mId).then(response => {
      console.log(response.data.meals)
      this.results = response.data.meals
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
