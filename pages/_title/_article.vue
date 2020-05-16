<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <div class="image-container">
        <img v-if="imageUrl" class="image" :src="imageUrl" alt="" />
      </div>
      <h2 class="description">{{ description }}</h2>
    </div>
  </section>
</template>

<script>
import { base64ToString } from '~/utils'

export default {
  name: 'Article',
  data() {
    // description and imageUrl
    const { d, i } = JSON.parse(base64ToString(this.$route.params.article))

    return {
      title: this.$route.params.title
        .split('-')
        .join(' ')
        .split('_')
        .join('-'),
      description: d,
      imageUrl: i,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.description,
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: this.title,
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: process.env.NEWS_BASE_URL + this.$route.fullPath,
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: this.imageUrl,
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: this.description,
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 960px;
}
.title {
  text-align: center;
  font-size: 50px;
}
.image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  margin-bottom: 15px;
}
.image {
  position: absolute;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description {
  font-size: 24px;
}
</style>
