<template>
  <div class="page-header">
    <div class="page-header__container">
      <div class="page-header__text">
        <div class="page-header__suptitle" v-if="$slots['suptitle'] || suptitle">
          <template v-if="suptitle">{{ suptitle }}</template>
          <slot v-else name="suptitle"></slot>
        </div>
        <div class="page-header__project-title" v-if="$slots['project-title'] || projectTitle">
          <template v-if="projectTitle">{{ projectTitle }}</template>
          <slot v-else name="project-title"></slot>
        </div>
        <div class="page-header__title h1" v-if="$slots['title'] || title">
          <template v-if="title">{{ title }}</template>
          <slot v-else name="title"></slot>
        </div>
        <div class="page-header__subtitle" v-if="$slots['subtitle'] || subtitle">
          <template v-if="subtitle">{{ subtitle }}</template>
          <slot v-else name="subtitle"></slot>
        </div>
      </div>
      <div class="page-header__menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["suptitle", "title", "subtitle", "project-title"]
};
</script>

<style>
.page-header {
  background: hsl(220, 33%, 98%);
}

.page-header__container {
  padding: 2rem;
}

.page-header__text + .page-header__menu {
  margin-top: 1.5rem;
}

.page-header__title {
  margin-bottom: 1rem;
}

.page-header__title,
.h1 {
  font-size: 2.5rem;
  line-height: 1.16;
  font-weight: 300;
}

.page-header__subtitle {
  color: hsla(0, 100%, 0%, 0.667);
}

.page-header__project-title {
  display: flex;
  align-items: center;
  font-family: "Gotham A", "Gotham B", "Gotham", sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.25rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  color: hsla(0, 100%, 0%, 0.8);
}

.page-header__menu {
  margin: -0.25rem;
}

.page-header__menu.tm-btn {
  margin: 0.25rem;
}

.page-header__menu:empty {
  display: none;
}

@media screen and (min-width: 768px) {
  .page-header__container {
    padding-top: 5.75rem;
    padding-left: 5.75rem;
    padding-right: 5.75rem;
  }

  .page-header__project-title {
    margin-top: -2.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .page-header__container {
    display: flex;
  }

  .page-header__text {
    flex: 2;
  }

  .page-header__menu {
    flex: 1;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .page-header__text + .page-header__menu {
    margin-top: 0;
  }
}

@media screen and (min-width: 1280px) {
  .page-header__container {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

@media screen and (min-width: 1920px) {
  .page-header__container {
    padding-left: 12rem;
    padding-right: 12rem;
  }
}
</style>
