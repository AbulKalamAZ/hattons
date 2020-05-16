<template>
 
 <div>
      <v-carousel
        light
        cycle
        continuous
        height="600"
        hide-delimiter-background
        :show-arrows="false"
        interval="3000"
      >
        <v-carousel-item
          v-for="(item, i) in train"
          :key="i"
        >
          <v-sheet
            color="grey lighten-2"
            height="100%"
          >
            <v-row
              class="fill-height py-10"
              align="center"
              justify="around"
            >
              <v-col cols="12" md="6" class="d-flex justify-center" v-html="item.html">
                
              </v-col>
              <v-col cols="12" md="6" class="d-flex justify-end pa-12">
                <v-img width="420" height="auto" :src="item.name"></v-img>
                
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>


  <!-- our popular brands -->
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
</div>
  

</template>

<script>
import Bachman from '../assets/img/brands_logo/bachman.jpg'
import Dapol from '../assets/img/brands_logo/dapol.png'
import Heljan from '../assets/img/brands_logo/heljan.jpg'
import Honby from '../assets/img/brands_logo/hornby.png'
import Oxford from '../assets/img/brands_logo/oxford.jpg'
import Peco from '../assets/img/brands_logo/peco.png'
import CaptainCuttle from '../assets/img/train/CAPTAIN_CUTTLE.png'
import DaveMylett from '../assets/img/train/Dave_Mylett.png'
import Papyrus from '../assets/img/train/PAPYRUS.png'
import WindsorLad from '../assets/img/train/WINDSOR_LAD.png'

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
      ],
      train: [
        {
          name: CaptainCuttle,
          html: `
          <div>
                <h2>
                  <span class="font-weight-medium font-italic display-1 display-md-3 orange--text darken-2 text-uppercase">
                    New Stocks
                  </span> <br> 
                  <span class="font-weight-medium display-1 display-md-3 blue-grey--text darken-4 text-uppercase">are available!</span>
                </h2>
                <button type="button" class="d-block d-md-none mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--small orange--text text--darken-2" medium="">
                  <span class="v-btn__content">
                    Expore Now
                    <i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--dark"></i>
                  </span>
                </button>
                <button type="button" class="d-none d-md-block my-12 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--default orange--text text--darken-2" medium="">
                  <span class="v-btn__content">
                    Expore Now
                    <i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--dark"></i>
                  </span>
                </button>
              </div>
          
          `
        },
        {
          name: DaveMylett,
          html: `
          <div>
                <h2>
                  <span class="font-weight-medium display-1 display-md-2 orange--text darken-2 text-uppercase">
                    Get Free delivery!
                  </span> <br> 
                  <span class="font-weight-medium font-italic display-1 display-md-2 blue-grey--text darken-4 text-uppercase">
                    spending over
                      <span class="orange--text darken-2">
                        £175
                      </span>
                  </span>
                </h2>
                <button type="button" class="d-block d-md-none mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--small orange--text text--darken-2" medium="">
                  <span class="v-btn__content">
                    learn more
                    <i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--dark"></i>
                  </span>
                </button>
                <button type="button" class=" d-none d-md-block my-12 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--default orange--text text--darken-2" medium="">
                  <span class="v-btn__content">
                    learn more
                    <i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--dark"></i>
                  </span>
                </button>
              </div>
          
          `
        },
        {
          name: Papyrus,
          html: `
              <div class="mb-10">
                <h2>
                  <span class="font-weight-medium font-italic display-1 display-md-2 blue-grey--text darken-4 text-uppercase">
                   <span class="orange--text darken-2">99.5%</span> of orders
                  </span> <br> 
                  <span class="font-weight-light  display-1 blue-grey--text darken-4 text-uppercase">
                    placed by <span class="orange--text darken-2">02:00PM</span>
                  </span> <br>
                  <span class="font-weight-medium  display-1 display-md-2 blue-grey--text darken-4 text-uppercase">
                    <span class="orange--text darken-2">Mon - Fri</span> are
                  </span> <br>
                </h2>
                <h1 class="mt-2 mb-12 font-weight-medium display-1 display-md-2 blue-grey--text darken-4 text-uppercase">
                  shipped <span class="orange--text darken-2">same day!</span>
                </h1>
              </div>
          
          `
        },
        {
          name: WindsorLad,
          html: `
              <div>
                <h2>
                  <span class="font-weight-medium font-italic display-1 display-md-2 orange--text darken-2 text-uppercase">
                    13671 products
                  </span> <br> 
                  <span class="font-weight-regular  display-1 display-md-2 blue-grey--text darken-4 text-uppercase">are available!</span>
                </h2>
                <button type="button" class="d-block d-md-none mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--small orange--text text--darken-2" medium="">
                  <span class="v-btn__content">
                    Buy Now
                    <i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--dark"></i>
                  </span>
                </button>
                <button type="button" class="d-none d-md-block mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark v-size--default orange--text text--darken-2" medium="">
                  <span class="v-btn__content">
                    Buy Now
                    <i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--dark"></i>
                  </span>
                </button>
              </div>
          
          `
        }
      ],
      true: true,
      false: false,
    }
  }
}
</script>
