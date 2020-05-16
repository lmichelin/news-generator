<template>
  <section class="section">
    <b-field label="Titre">
      <b-input ref="title" v-model="title" required placeholder="Breaking news : ..."></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="description" required></b-input>
    </b-field>
    <b-field label="Image">
      <b-input v-model="imageUrl"></b-input>
    </b-field>
    <b-button v-if="shareable" :disabled="!title || !description" @click="share">
      Partager l'article
    </b-button>
    <a v-if="title && description" target="_blank" :href="articleUrl">
      <b-button>
        Lien vers l'article
      </b-button>
    </a>
  </section>
</template>

<script>
import { stringToBase64 } from '~/utils'

export default {
  name: 'Article',
  data() {
    return {
      shareable: false,
      title: '',
      description: '',
      imageUrl: 'https://picsum.photos/200/300',
    }
  },
  computed: {
    articleUrl() {
      return `/${encodeURIComponent(
        this.title
          .split('-')
          .join('_')
          .split(' ')
          .join('-'),
      )}/${stringToBase64(
        JSON.stringify({
          d: this.description,
          i: this.imageUrl,
        }),
      )}`
    },
  },
  mounted() {
    this.shareable = !!navigator.share
    this.$refs.title.focus()
  },
  methods: {
    share() {
      navigator.share({
        title: this.title,
        text: this.description,
        url: this.articleUrl,
      })
    },
  },
}
</script>
