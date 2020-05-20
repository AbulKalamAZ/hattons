<template>
  <div>
    <!-- hero slider section -->
    <HeroSlider />
        
    <!-- our popular brands -->
    <PopularBrands />
  </div>
</template>

<script>
import HeroSlider from '../components/home/HeroSlider'
import PopularBrands from '../components/home/PopularBrands'

export default {
  components: {
    HeroSlider: HeroSlider,
    PopularBrands: PopularBrands
  }
}
</script>
