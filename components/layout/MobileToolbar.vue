<template>
    <v-list-group
        class="d-block d-md-none"
        group
        no-action
        prepend-icon="mdi-map"
        color="orange darken-2"
    >
        <template v-slot:activator>
            <v-list-item-content>
                <v-list-tile-title>Site navigation</v-list-tile-title>
            </v-list-item-content>
        </template>

        <v-list-group 
            sub-group
            no-action
            append-icon="mdi-chevron-down"
            color="orange darken-2"
        >
            <template v-slot:activator>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Product Index</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>By Order</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>OO Scale</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>O Scale</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>N Scale</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Recent Additions</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Limited Additions</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>DCC Fitting</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>By Country</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>By Manufacturar</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>


        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Brands</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>New Stocks</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Pre-owned</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Future Releases</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

    </v-list-group>
</template>

<script>
export default {
    
}
</script>