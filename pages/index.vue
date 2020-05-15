<template>
 
 <div>
      <v-carousel
        cycle
        continuous
        height="600"
        hide-delimiter-background
        :show-arrow="false"
        show-arrows-on-hover
      >
      <v-carousel-item
        v-for="(item, i) in model"
        :key="i"
      >
        <v-sheet
          color="grey lighten-2"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="around"
          >
            <v-col cols="6" class="d-flex justify-center align-start">
              <div>
                <h2>
                  <span class="font-weight-medium font-italic display-3 orange--text darken-2 text-uppercase">
                    New Stocks
                  </span> <br> 
                  <span class="font-weight-medium  display-3 blue-grey--text darken-4 text-uppercase">are available!</span>
                  </h2>
                  <v-btn medium outlined color="orange darken-2" class="my-12">
                    Expore Now
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
              </div>
            </v-col>
            <v-col cols="6" class="d-flex justify-end pa-12">
              <v-img width="420" height="300" :src="item.name"></v-img>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
  </v-carousel>


  <!-- our popular brands -->
  <v-container fluid class="px-12">
    <v-row class="pa-5">
      <v-col cols="12">
        <h1>Our Popular Brands</h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="pa-12">
      <v-sheet
        class="mx-auto"
        max-width="1000"
      >
        <v-slide-group multiple :center-active="true" :show-arrows="true">
          <v-slide-item
            v-for="logo in logos"
            :key="logo.name"
          >
            <v-slide-transition>
              <v-avatar width="125" height="63" tile class="mx-5">
                <v-img :src="logo.name" alt="oxford">

                </v-img>
              </v-avatar>
            </v-slide-transition>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
  </v-container>
</div>
  

</template>

<script>
import Bachman from '../assets/img/brands_logo/bachman.jpg'
import Dapol from '../assets/img/brands_logo/dapol.png'
import Heljan from '../assets/img/brands_logo/heljan.jpg'
import Honby from '../assets/img/brands_logo/hornby.png'
import Oxford from '../assets/img/brands_logo/oxford.jpg'
import Peco from '../assets/img/brands_logo/peco.png'
import ModelOne from '../assets/img/model/model-1.png'
import ModelTwo from '../assets/img/model/model-2.png'
import ModelThree from '../assets/img/model/model-3.png'

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
         name: Oxford
        },
        {
          name: Peco
        },
      ],
      model: [
        {
          name: ModelOne
        },
        {
          name: ModelTwo
        },
        {
          name: ModelThree
        }
      ],
      true: true,
      false: false,
    }
  }
}
</script>
