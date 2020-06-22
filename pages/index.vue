<template>
  <div>
    <!-- hero slider section -->
    <HeroSlider />
        
    <!-- our popular brands -->
    <PopularBrands />

    <!-- our featured products -->
    <OurFeaturedProducts />

  </div>
</template>

<script>
import HeroSlider from '../components/home/HeroSlider'
import PopularBrands from '../components/home/PopularBrands'
import OurFeaturedProducts from '../components/home/OurFeaturedProducts'

export default {
  components: {
    HeroSlider: HeroSlider,
    PopularBrands: PopularBrands,
    OurFeaturedProducts: OurFeaturedProducts
  }
}
</script>
