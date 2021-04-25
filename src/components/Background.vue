<template>

  <div class="default">
    <h1>Sisesta koordinaadid:</h1>
    <div class="info" v-if="showInfo">
        <Information v-bind:information="information"/>
    </div>
    <div class="form">
      <div class="area">
        <label class="col1">Latitude:</label>
        <input class="col2" v-model="lat" type="number" id="lat" name="lat" min="-90" max="90" step="0.0001">
      </div>
      <div class="area">
        <label class="col1">Longitude:</label>
        <input class="col2" v-model="lng" type="number" id="lng" name="lng" min="-180" max="180" step="0.0001">
      </div>
      <div class="area">
        <label class="col1">Date:</label>
        <input class="col2" v-model="date" type="date" id="date" name="date">
      </div>
      <div class="area">
        <input class="col2" type="submit" value="Show" v-on:click="submit">
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from 'axios';
import Information from './Information.vue';
export default {
    name:"Background",
    components: {
        Information
    },
    data(){
      return{
        showInfo: false,
        information:{
          sunrise:"",
          sunset:"",
          duration:""
        }
      }
    },
    methods:{
      submit: function(){
        // https://sunrise-sunset.org/api
        this.showInfo = true;
        let link = "https://api.sunrise-sunset.org/json?";
        link += "lat=" + this.lat;
        link += "&lng=" + this.lng;
        link += "&date=" + this.date;
        axios
        .get(link)
        .then(response => {        
            this.information.sunrise = response.data.results.sunrise
            this.information.sunset = response.data.results.sunset
            this.information.duration = response.data.results.day_length
            });
      }
    }

}

</script>

<style scoped>
h1{
  color: black;
  padding: 25px 15px 15px 15px;
}
label{
  color: black;
  font-weight: bold;
  padding: 2px 0px 2px 15px;
  display: inline;
}
input{
  color: black;
  width: 25%;
  height: 15%;
  padding: 10px 5px 5px 5px;
  margin: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  resize: none;
}
input[type=submit] {
  width: 10%;
  padding: auto;
  margin-left: 125px;
}
input[type=submit]:hover {
  width: 10%;
  padding: auto;
  background-color: cyan;
  margin-left: 125px;
}
.form{
  width: 50%;
}
.area{
  padding: 25px;
}
.info{
  width: 50%;
  float: right;
  margin-top: 25px;
}
.col1{
  width: 20%;
  float: left;
  margin-top: 12px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.col2{
  width: 25%;
  float: left;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}
</style>

