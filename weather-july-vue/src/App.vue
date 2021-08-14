<template>
  <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center px-3">
        <div class="card">
            <h1 class="ml-auto mr-4 mt-3 mb-0">{{city}}</h1>
            <h2 class="ml-auto mr-4 large-font">{{country}}</h2>
            <h2 class="time-font mb-0 ml-4 mt-auto">{{temp}}&#176;</h2>
            <p class="ml-4 mb-4"></p>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      city:'',
      country:'',
      temp: 0
    }
  },
  created(){
     fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f764843074dabfc1643e4eeded4615af&units=metric')
     .then((response) => response.json())
     .then(data=> (this.city = data.name , this.country = data.sys.country , this.temp = data.main.temp))
     
  }
}
</script>

<style>
body {
  color: #fff;
  overflow-x: hidden;
  height: 100%;
  background-color: #CFD8DC;
  background-repeat: no-repeat
}

.card {
  background-image: url("https://i.imgur.com/dpqZJV5.jpg");
  background-size: cover;
  width: 600px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0px 8px 16px 4px #9E9E9E;
  margin-top: 50px;
  margin-bottom: 50px
}

.time-font {
  font-size: 50px
}

.sm-font {
  font-size: 18px
}

.med-font {
  font-size: 28px
}

.large-font {
  font-size: 60px
}
</style>
