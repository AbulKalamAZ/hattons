<template>
  <v-app dark>
    <!-- navigation drawer of app -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >

      <!-- mobile toolbar -->
      <v-toolbar flat color="orange darken-2" class="d-block d-md-none">
        <v-toolbar-title>
          <v-img src="https://images.hattons.co.uk/assets/main_logo1.svg" width="70" height="35"></v-img>
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <!-- site navigation -->
        <MobileToolbar />
        <v-list-item-group v-model="list" color="orange darken-2">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- app bar -->
    <v-app-bar
      :clipped-left="clipped"
      color="orange darken-2"
      fixed
      app
    >
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" class="d-none d-md-block" />
    
      <v-toolbar-title class="white--text px-0 px-md-4">
        <v-img class="d-block d-md-none" src="https://images.hattons.co.uk/assets/main_logo1.svg" width="70" height="35"></v-img>
        <v-img class="d-none d-md-block" src="https://images.hattons.co.uk/assets/main_logo1.svg" width="90" height="45"></v-img>
      </v-toolbar-title>

        
        <v-toolbar-items v-if="!showSearchBox" color="orange darken-2" class="text-capitalize d-none d-md-block">
          <v-menu v-model="menuCard" offset-y open-on-hover :close-on-content-click="true" transition="slide-x-transition" naufge-bottom="20" class="pa-5">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text dark class="text-capitalize">Product Index</v-btn>
            </template>
            <v-card width="650">

              <v-container>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-list>
                      <v-list-item>
                        <v-list-item-title class="font-weight-bold">
                          Product Index
                        </v-list-item-title>
                      </v-list-item>
                      <v-divider></v-divider>
                    </v-list>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="6">
                    <v-list>
                      <v-list-item-group color="orange darken-2">
                        <v-list-item>
                          <v-list-item-content>
                            By Order
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            OO Scale
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            O Scale
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            N Scale
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            Recent Additions
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            Limited Additions
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            DCC Fitting
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            By Country
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            By Manufacturar
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <v-list>
                      <v-list-item-group color="orange darken-2">
                        <v-list-item>
                          <v-list-item-content>
                            By Era
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            By Order
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            About to sell out
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            Best sellers
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            Bargains
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            Bargain packs
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            Pre-owned bargains
                          </v-list-item-content>
                        </v-list-item>
                        
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
              
            </v-card>
          </v-menu>
          <v-btn text dark class="text-capitalize">Brands</v-btn>
          <v-btn text dark class="text-capitalize">New Stocks</v-btn>
          <v-btn text dark class="text-capitalize">Pre-owned</v-btn>
          <v-btn text dark class="text-capitalize">Future Release</v-btn>
        </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-slide-x-reverse-transition
        hide-on-leave
      >
        <v-text-field
          v-if="showSearchBox"
          v-model="searchBoxValue"
          placeholder="Search our store"
          prepend-inner-icon="mdi-magnify"
          append-icon="mdi-close"
          @click:append="clearSearchBox"
          autofocus
          filled
          rounded
          dense
          dark
          class="mt-7"
        >
        </v-text-field>
      </v-slide-x-reverse-transition>
      <v-btn v-if="!showSearchBox" icon dark @click="showSearchBox = !showSearchBox">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon dark class="d-none d-md-block">
        <v-icon>mdi-help</v-icon>
      </v-btn>

      <v-btn icon dark class="d-none d-md-block">
        <v-badge light overlap bordered content="3" value="2" color="orange darken-2">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-avatar size="35" class="ml-3 d-none d-md-block">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
      </v-avatar>
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" class="d-block d-md-none" />
    </v-app-bar>
    <v-content>
      <v-container fluid class=" pa-0">
        <nuxt />
      </v-container>
    </v-content>

    <!-- footer of app -->
    <v-footer
      color="blue-grey darken-3" dark inset
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h1 class="display-1 font-weight-regular text-center text-md-left">Hattons</h1>
            <p class="body-2 text-center text-md-left">Your local online railway specialist</p>

            <v-list dense color="blue-grey darken-3">
              <v-list-item two-line>
                <v-list-item-icon class="d-flex justify-end">
                  <v-icon>mdi-phone-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="d-flex justify-center">
                  <v-list-item-title>Phone</v-list-item-title>
                  <v-list-item-subtitle>+44 151 459 1660</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-icon>
                  <v-icon>mdi-email-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Mail us</v-list-item-title>
                  <v-list-item-subtitle>info@hattons.co.uk</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-icon>
                  <v-icon>mdi-map-marker-radius</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Address</v-list-item-title>
                  <v-list-item-subtitle>17 Montague Road, Widnes, UK</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-icon>
                  <v-icon>mdi-checkbox-marked-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Registration Number</v-list-item-title>
                  <v-list-item-subtitle>51 31 251</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            
          </v-col>
          <v-col cols="12" md="4">
            <h1 class="display-1 font-weight-regular text-center text-md-left">Site Navigation</h1>

            <v-list dense nav flat color="blue-grey darken-3">
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">About Us</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">Contact us</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">News</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">Newsletter</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">Privacy & Policy</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link dense >
                <v-list-item-content class="py-0">
                  <v-list-item-title class="text-center text-md-left">Terms & Conditions</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="4">
            <h1 class="display-1 font-weight-regular text-center text-md-left">Stay Connected</h1>
            <p class="regular font-weight-regular py-5 text-center text-md-left">Subscribe to our 
              mailing list we'll send our latest release, bargains and back in stocks direct to your inbox
            </p>

            <v-row no-gutters justify="space-around" class="mt-12">
              <v-col cols="12">
                <v-text-field
                  label="you@example.co.uk"
                  color="orange darken-2"
                  :loading="isSubscribed"
                  loader-height="3"
                  light
                  solo
                  dense
                >
mdi-send                <v-icon
                   medium 
                   dark 
                   slot="append"
                   color="orange darken-2" 
                   @click="isSubscribed = !isSubscribed"
                  >
                    mdi-send
                  </v-icon>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider color="white"></v-divider>

        <v-row no-gutters justify="center" class="py-10">
          <v-col cols="6" md="4" class="d-flex justify-space-around">
            <v-btn small fab color="orange darken-2" href="https://www.facebook.com/hattonsmodelrailways" target="_blank">
              <v-icon dark>mdi-facebook</v-icon>
            </v-btn>
            <v-btn small fab color="orange darken-2" href="https://twitter.com/HattonsModels" target="_blank">
              <v-icon dark>mdi-twitter</v-icon>
            </v-btn>
            <v-btn small fab color="orange darken-2" href="https://www.youtube.com/user/hattonshobbies" target="_blank">
              <v-icon dark>mdi-youtube</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="8">
            <p class="body-2 mb-0 mt-5 text-center">All prices include VAT at the current rates but are subject to change without notice </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import MobileToolbar from '../components/layout/MobileToolbar'


export default {
  components: {
    MobileToolbar: MobileToolbar
  },
  data () {
    return {
      showSearchBox: false,
      searchBoxValue: '',
      title: 'Hattons',
      right: true,
      rightDrawer: false,
      miniVariant: false,
      list: 0,
      menuCard: false,
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/',
          icon: 'mdi-home'
        },
        {
          title: 'Contact Us',
          to: '/',
          icon: 'mdi-contacts'
        },
        {
          title: 'About Us',
          to: '/',
          icon: 'mdi-account-multiple'
        },
        {
          title: 'Site Map',
          to: '/',
          icon: 'mdi-map'
        },
        {
          title: 'News',
          to: '/',
          icon: 'mdi-newspaper'
        },
        {
          title: 'FAQs',
          to: '/',
          icon: 'mdi-help-circle'
        },
      ],
      isSubscribed: false
    }
  },
  methods: {
    clearSearchBox() {
      console.log(this.searchBoxValue)
      if(this.searchBoxValue === '') {
        this.showSearchBox = !this.showSearchBox
      } else {
        this.searchBoxValue = ''
        this.showSearchBox = !this.showSearchBox

      }
    }
  }
}
</script>
