<template>
    <v-container fluid class="px-md-12">
    <v-row class="pa-md-5">
      <v-col cols="12">
        <h1 class="text-center text-md-left font-weight-medium">Our Popular Brands</h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="pa-3 pa-md-12">
      <v-col class="pa-3" cols="6" md="2" v-for="(logo, i) in logos" :key="i">
        <v-avatar width="80" height="40" tile class="mx-5">
          <v-img :src="logo.name" alt="oxford">
          </v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bachman from '../../assets/img/brands_logo/bachman.jpg'
import Dapol from '../../assets/img/brands_logo/dapol.png'
import Heljan from '../../assets/img/brands_logo/heljan.jpg'
import Honby from '../../assets/img/brands_logo/hornby.png'
import Oxford from '../../assets/img/brands_logo/oxford.jpg'
import Peco from '../../assets/img/brands_logo/peco.png'


export default {
    data() {
        return {
            logos: [
                {
                name: Bachman
                },
                {
                name: Dapol
                },
                {
                name: Heljan
                },
                {
                name: Honby
                },
                {
                name: Peco
                },
                {
                name: Oxford 
                },
            ]
        }
    }
}
</script>