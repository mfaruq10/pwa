<template>
  <b-container>
    <div v-if="meals.length">
      <b-row class="justify-content-center">
        <div v-bind:key="data.index" v-for="data in meals">
          <b-col >
            <b-card
              v-bind:title="data.strCategory"
              v-bind:img-src="data.strCategoryThumb"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mt-5">
              <b-card-text>{{ `${data.strCategoryDescription.slice(0,200)}...` }}</b-card-text>
              <b-button href="#" variant="primary">View food</b-button>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>No meals available yet 😢</h5>
    </div>
  </b-container>
</template>
<script>
  import axios from "axios";
  export default {
    data() {
      return {
        meals: []
      };
    },
    mounted() {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
          this.meals = response.data.categories;
        })
        .catch(error => {
          console.log(error)
        });
    }
  };
</script>
<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.card{
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 2px 15px 0 rgba(93, 95, 209, 0.16), 0 2px 10px 0 rgba(46, 38, 158, 0.12);
    border-color: rgb(75, 199, 199);
}
</style>