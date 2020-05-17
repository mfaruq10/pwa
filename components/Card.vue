<template>
<b-container>

  <div class="foods">
    <b-row class="justify-content-center">
      <b-col>
        <div class="form" style="width: 100%">
            <div class="form-group mx-sm-2 mb-2">
                <input type="text" class="form-control" placeholder="Seach meals by name..." v-model="query">
            </div>
           <center> <b-button pill type="submit" class="mb-5 mt-2" @click="getResult(query)" variant="primary">Search</b-button></center>
        </div>
      </b-col>
    </b-row>

<div v-if="results">
  <p>Showing Result by Keyword {{ `${query}`}} </p> 
      <b-row class="justify-content-center">
        <div v-for="result in results" :key="result.idMeal">
          <b-col >
            <b-card
              v-bind:title="result.strMeal"
              v-bind:img-src="result.strMealThumb"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              @click="goToDetail(result.idMeal)"
              class="mt-5">
              <b-card-text>{{ `${result.strInstructions.slice(0,200)}...` }}</b-card-text>
              <b-button @click="goToDetail(result.idMeal)" variant="primary">View food</b-button>
            </b-card>
          </b-col>
        </div>
      </b-row>
  </div>
  <div v-else>
      <h5 class="text-center">No meals available yet  😢, please search another keyword</h5>
    </div>
  </div>
  
</b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Foods',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: '',
      selected: ''
    }
  },
  methods: {
    getResult (query) {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query).then(response => {
        console.log(response.data.meals)
        this.results = response.data.meals
      })
    },
    goToDetail (mealId) {
      this.$router.push({ name: 'detail', params: { mId: mealId } })
    }
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
