<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      color="orange darken-2"
      fixed
      app
    >
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" />
    
      <v-toolbar-title class="white--text pr-4" v-text="title" />

      <v-menu v-model="menuCard" offset-y :close-on-content-click="true" transition="slide-x-transition" naufge-bottom="20" class="pa-5">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text small dark class="text-capitalize">Product index</v-btn>
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
                  <v-list-item-group>
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
                  <v-list-item-group>
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
      





      <v-btn text small dark class="text-capitalize">Brands</v-btn>
      <v-btn text small dark class="text-capitalize">New Stocks</v-btn>
      <v-btn text small dark class="text-capitalize">Pre-owned</v-btn>
      <v-btn text small dark class="text-capitalize">Future Releases</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon dark>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon dark>
        <v-icon>mdi-help</v-icon>
      </v-btn>

      <v-btn icon dark>
        <v-badge light overlap bordered content="3" value="2" color="orange darken-2">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-avatar size="40">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    </v-app-bar>
    <v-content>
      <v-container fluid class=" pa-0">
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menuCard: false,
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Products',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hattons'
    }
  }
}
</script>
