<template>
    <v-container fluid class="px-md-12">
    <v-row class="pa-md-5">
      <v-col cols="12">
        <h1 class="text-center text-md-left font-weight-medium">Our Featured Products</h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="pa-3 pa-md-12" justify="space-around">
      <v-col  cols="12" md="4" v-for="(item, i) in products" :key="i">
        <v-card
            hover
            rounded
            class="ma-3"
            max-width="420"
            max-height="550"
            
        >
            <v-hover v-slot:default="{ hover }">
                <v-img
                    contain
                    :aspect-ration='16/9'
                    height="150"
                    :src="item.img"
                >


                <v-slide-y-reverse-transition>
                    <div
                        v-if="hover"
                        class="d-flex justify-center align-center transition-fast-in-fast-out"
                        style="height: 100%; width: 100%; background: #ff990073;"
                    >
                        <v-btn medium dark color="orange darken-2">View Details</v-btn>
                    </div>
                </v-slide-y-reverse-transition>
                </v-img>
            </v-hover>            
            <v-row no-gutters>
                <v-col cols="9">
                    <v-card-title>{{item.name}}</v-card-title>
                </v-col>
                <v-col cols="3" class="d-flex justify-end align-center">
                    <v-btn fab icon @click="isHeartClicked = !isHeartClicked">
                        <v-icon color="orange darken-2">{{isHeartClicked ? "mdi-heart" : "mdi-heart-outline"}}</v-icon>
                    </v-btn>
                </v-col>
                
            </v-row>

            <v-card-text class="pt-0">
                <v-row no-gutters class="mb-3">
                    <v-col cols="8">
                        <div class="font-weight-medium subtitle-1">
                            {{item.scale}}
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <div class="headline orange--text darken-2 font-weight-bold text-right">$ {{item.price}}</div>
                    </v-col>
                </v-row>
                <div>{{item.description}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="orange darken-2"
                    fab
                    icon
                >
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                    color="orange darken-2"
                    fab
                    icon
                >
                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col cols="12" class="d-flex justify-center py-5">
            <v-btn medium outlined dark color="orange darken-2">
                    See More
                    <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
    data() {
        return {
            isHeartClicked: false,
            products: [
                {
                    name: "Oxford Rail - UK",
                    price: '25',
                    img: "https://images.hattons.co.uk/products200pxwide/OR76IOM001_3263826_Qty1_1.jpg",
                    description: "OR76IOM001 Beyer Peacock 2-4-0T 10. G.W.Wood in Isle of Man Railways indian red - Static Model. Man Railways",
                    scale: "OO Gauge (1:76 Scale)",
                    stock: 6
                },
                {
                    name: "Oxford Rail - UK",
                    price: '102',
                    img: "https://images.hattons.co.uk/products200pxwide/OR76DG006_3348203_Qty1_1.jpg",
                    description: "Class 2301 'Dean Goods' 101 in War Department black G.W.Wood in Isle of Man Railways indian red - Static Model",
                    scale: "OO Gauge (1:76 Scale)",
                    stock: 3
                },
                {
                    name: "Oxford Rail - UK",
                    price: '32.50',
                    img: "https://images.hattons.co.uk/products200pxwide/OR763FO002B_3287348_Qty1_1.jpg",
                    description: "Mk3a FO first open 11046 in Intercity Swallow livery G.W.Wood in Isle of Man Railways indian red - Static Model",
                    scale: "OO Gauge (1:76 Scale)",
                    stock: 6
                },
                {
                    name: "Oxford Rail - UK",
                    price: '32.50',
                    img: "https://images.hattons.co.uk/products200pxwide/OR763FO001B_3287294_Qty1_1.jpg",
                    description: "Mk3a FO first open M11042 in BR blue and grey G.W.Wood in Isle of Man Railways indian red - Static Model",
                    scale: "OO Gauge (1:76 Scale)",
                    stock: 5
                },
                {
                    name: "Oxford Rail - UK",
                    price: '32.50',
                    img: "https://images.hattons.co.uk/products200pxwide/OR763FO001_3263802_Qty1_1.jpg",
                    description: "Mk3a FO first open M11052 in BR blue and grey G.W.Wood in Isle of Man Railways indian red - Static Model",
                    scale: "OO Gauge (1:76 Scale)",
                    stock: 6
                },
                {
                    name: "Oxford Rail - UK",
                    price: '10',
                    img: "https://images.hattons.co.uk/products200pxwide/OR76MW4004_3206259_Qty1_1.jpg",
                    description: "4 plank wagon - \"Hamilton Palace Colliery\" G.W.Wood in Isle of Man Railways indian red - Static Model",
                    scale: "OO Gauge (1:76 Scale)",
                    stock: 11
                }
            ]
        }
    }
}
</script>


<style>

</style>