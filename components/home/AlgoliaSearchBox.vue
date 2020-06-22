<template>
  <div>
    <div class="container">
      <ais-instant-search
        index-name="demo_ecommerce"
        :search-client="searchClient"
      >
        <!-- <ais-index index-name="demo_ecommerce"> -->
          <ais-configure
            :hitsPerPage="5"
            :restrictSearchableAttributes="['name']"
          />
          <ais-autocomplete>
            <template slot-scope="{ currentRefinement, indices, refine }">
              <v-autocomplete
                class="mt-7"
                v-model="selectedItem"
                :items='searchResults'
                placeholder="Search our store"
                prepend-inner-icon="mdi-magnify"
                append-icon="mdi-close"
                @click:append="ToogleSearchBox"
                @keydown="refine($event.currentTarget.value), handleQueryChange(indices)"
                autofocus
                :auto-select-first="true"
                filled
                rounded
                dense
                dark
              >
              <template v-slot:item="data">
                  <v-list-item-avatar tile size="30" height="auto">
                    <img :src="data.item.image">
                  </v-list-item-avatar>
                  <v-list-item-content class="pt-1">
                    <v-list-item-title
                     v-html="data.item.text"
                     class="text-h5 mb-2"
                    >
                    </v-list-item-title>
                    <v-list-item-subtitle >
                      <v-chip
                        class="mr-1"
                        small
                        link
                        dark
                        color="orange darken-2"
                        v-for="category in data.item.categories"
                        :key="category"
                      >
                        {{category}}
                      </v-chip>
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <h3>
                      $ {{data.item.value}}
                    </h3>
                  </v-list-item-action>
              </template>
              
              </v-autocomplete>

              <!-- <SearchResults  /> -->
            </template>
          </ais-autocomplete>
        <!-- </ais-index> -->
        <ais-configure :query="query" />
      </ais-instant-search>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import SearchResults from './SearchResults'

import itemConverter from '../../utilities/ItemConverter'
// import 'instantsearch.css/themes/algolia-min.css';
// import { VueAutosuggest } from 'vue-autosuggest';

export default {
  components: { SearchResults },
  props: ['ToogleSearchBox'],
  data() {
    return {
      selectedItem: null,
      searchResults: [],
      searchClient: algoliasearch(
        'B1G2GM9NG0',
        'aadef574be1f9252bb48d4ea09b5cfe5'
      ),
      query: '',
    };
  },
  methods: {
    handleQueryChange(indices) {
      if(indices[0].hits) {
        this.searchResults = itemConverter(indices[0].hits);
      }

    },

    onSelect(selected) {

      console.log(selected)
      if (selected) {
        this.query = selected.item.name;
      }

    },

    indicesToSuggestions(indices) {

      console.log(indices)
      return indices.map(({ hits }) => ({ data: hits }));

    }

  },
};
</script>

<style>
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.ais-Highlight-highlighted {
  background: cyan;
  font-style: normal;
}

.header {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, #4dba87, #2f9088);
  color: #fff;
  margin-bottom: 1rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

#autosuggest input {
  font: inherit;
}

.autosuggest__results-container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.autosuggest__results-container ul {
  margin: 0;
  padding: 0;
}

.autosuggest__results_item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  list-style-type: none;
  padding: 0.5em;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
}

.autosuggest__results_item img {
  height: 2em;
}

.autosuggest__results_item-highlighted {
  background-color: rgba(0, 0, 0, 0.24);
}

.ais-Hits-item img {
  max-width: 100%;
}
</style>
