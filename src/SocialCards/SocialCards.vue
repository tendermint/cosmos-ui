<template>
  <div class="tm-cards-hz tm-cards-hz--horizontal">
    <slot></slot>
    <div class="social-cards social-cards--icon social-cards--landscape" v-for="(item, i) in value" :key="item.href + i">
      <div class="social-cards__container">
        <a :href="item.href" target="_blank" rel="noreferrer noopener" class="social-cards__visual">
          <div class="social-cards__image-outer">
            <div class="social-cards__image-inner social-cards__image-inner--icon">
              <img rel="noreferrer noopener" alt="Image" :src="item.icon">
            </div>
          </div>
        </a>
        <div class="social-cards__text">
          <div class="social-cards__title">{{item.h1}}</div>
          <div class="social-cards__subtitle">{{item.h2}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social-cards {
  margin-bottom: 2rem;
  display: flex;
}
.social-cards--ended {
  opacity: 0.75;
  filter: grayscale(75%);
}
.social-cards__container {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
.social-cards__image-outer {
  position: relative;
}
:not(.social-cards--icon) .social-cards__image-outer {
  display: block;
  margin-bottom: 1rem;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
}
.social-cards__image-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(233, 22%, 23%);
  border-radius: 0.25rem;
}
.social-cards__image-inner.social-cards__image-inner--icon {
  background: hsla(233, 24%, 75%, 0.175);
}
.social-cards__image-inner.social-cards__image-inner--type {
  font-size: 2rem;
  font-family: var(--ds-font-family);
  font-weight: 300;
}
.social-cards__image-inner span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
}
.social-cards__image-inner img {
  border-radius: 0.25rem;
  max-width: 66.7%;
  max-height: 66.7%;
}
.social-cards--flush .social-cards__image-inner {
  padding: 0;
}
.social-cards--flush img {
  flex: 1;
  max-width: 100%;
  max-height: 100%;
}
.social-cards__text {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
.social-cards__title,
.social-cards__subtitle {
  font-size: 0.875rem;
}
.social-cards__subtitle {
  line-height: 1.5;
  color: hsla(0, 100%, 0%, 0.667);
  flex: 1;
}
.social-cards__title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: hsla(0, 100%, 0%, 0.8);
}
.social-cards__tags {
  margin-top: 1rem;
}
.social-cards__tag {
  display: inline-block;
  background: hsl(220, 33%, 98%);
  font-size: 0.875rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
}
.social-cards__tag + .social-cards__tag {
  margin-left: 0.5rem;
}
.social-cards--landscape .social-cards__container {
  flex-flow: row nowrap;
}
.social-cards--landscape .social-cards__visual {
  width: 6rem;
  margin-right: 1rem;
}
.social-cards--landscape .social-cards__image-inner--icon img {
  height: 2rem;
  max-height: initial;
}
.social-cards--landscape .social-cards__image-inner--icon i {
  font-size: 2rem;
}
.social-cards--landscape .social-cards__image-outer {
  margin: 0;
}
.social-cards--landscape .social-cards__title {
  flex: none;
}
@media screen and (min-width: 768px) {
  .tm-cards-hz {
    margin: -1rem;
    display: flex;
    flex-flow: row wrap;
  }
  .tm-cards-hz.tm-cards-hz--landscape {
    display: block;
  }
  .social-cards {
    flex: 0 0 50%;
  }
  .social-cards__container {
    padding: 1rem;
  }
  .social-cards__title {
    font-size: 1rem;
  }
  .social-cards--landscape {
    margin: 0;
  }
  .social-cards--landscape .social-cards__visual {
    width: 8rem;
  }
  .social-cards--landscape .social-cards__image-inner--icon i {
    font-size: 2.5rem;
  }
  .social-cards--landscape .social-cards__image-inner--icon img {
    height: 2.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .tm-cards-hz.tm-cards-hz--landscape {
    display: flex;
    flex-flow: row wrap;
  }
  .social-cards {
    flex: 0 0 33.333%;
    max-width: 30vw;
  }
  .social-cards__title {
    font-size: 1.125rem;
  }
  .social-cards--landscape {
    flex: 0 0 50%;
    max-width: 50vw;
  }
}
@media screen and (min-width: 1280px) {
  .social-cards--landscape .social-cards__visual {
    width: 10rem;
  }
  .social-cards--landscape .social-cards__image-inner--icon i {
    font-size: 3rem;
  }
  .social-cards--landscape .social-cards__image-inner--icon img {
    height: 3rem;
  }
}
@media screen and (min-width: 1680px) {
  .social-cards {
    flex: 0 0 25%;
  }
  .social-cards--landscape {
    flex: 0 0 33.333%;
  }
}
</style>

<script>
export default {
  name: "social-cards",
  props: [
    "ended",
    "flush",
    "href",
    "icon",
    "icon-type",
    "img-src",
    "img-bg-src",
    "landscape",
    "lazy",
    "subtitle",
    "tags",
    "title",
    "to",
    "type",
    "value",
    "format"
  ]
}
</script>