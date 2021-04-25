<template>
    <div class="area">
        <label class="col1">Sunrise:</label>
        <em class="col2">{{information.sunrise}}</em>
    </div>
    <div class="area">
        <label class="col1">Sunset:</label>
        <em class="col2">{{information.sunset}}</em>
    </div>
    <div class="area">
        <label class="col1">Daylight duration:</label>
        <em class="col2">{{information.duration}}</em>
    </div>
</template>
<script>
export default {
    name: "Information",
    props:["information"],
    data(){
    }
}
</script>
<style scoped>
label{
  color: black;
  font-weight: bold;
  padding: 2px 0px 2px 15px;
  display: inline;
}
.area{
  padding: 7px;
}
.col1{
  width: 40%;
  color: black;
  margin-right: 20px;
  margin-left: 10px;
}
.col2{
  width: 40%;
  color: black;
}
</style>
