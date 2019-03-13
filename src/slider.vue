<template>
  <div class="slider">
    <div class="uk-margin js-slideshow-animation uk-slideshow" uk-slideshow="ratio: false">
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul
          class="uk-slideshow-items"
          uk-height-viewport="min-height: 300"
          style="min-height: calc(100vh);"
        >
          <li class="uk-active uk-transition-active" style="transform: translateX(0px);">
            <img
              src="images/photo.jpg"
              alt
              uk-cover
              class="uk-cover"
              style="height: 1380px; width: 2070px;"
            >
            <div class="uk-position-center uk-position-medium uk-text-center">
              <h1
                class="uk-heading-hero"
                uk-slideshow-parallax="x: 200,-200"
                style="transform: translate3d(0px, 0px, 0px);"
              >Heading</h1>
              <p
                class="uk-h1"
                uk-slideshow-parallax="x: 400,-400"
                style="transform: translate3d(0px, 0px, 0px);"
              >Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <img src="images/dark.jpg" alt uk-cover class="uk-cover">
            <div class="uk-position-center uk-position-medium uk-text-center">
              <h1 class="uk-heading-hero" uk-slideshow-parallax="x: 200,-200">Heading</h1>
              <p class="uk-h1" uk-slideshow-parallax="x: 400,-400">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <img src="images/light.jpg" alt uk-cover class="uk-cover">
            <div class="uk-position-center uk-position-medium uk-text-center">
              <h1
                class="uk-heading-hero"
                uk-slideshow-parallax="y: -100,0,0; opacity: 1,1,0"
              >Heading</h1>
              <p
                class="uk-h1"
                uk-slideshow-parallax="y: 100,0,0; opacity: 1,1,0"
              >Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <img src="images/photo2.jpg" alt uk-cover class="uk-cover">
            <div class="uk-position-center uk-position-medium uk-text-center">
              <h1 class="uk-heading-hero" uk-slideshow-parallax="x: 200,-200">Heading</h1>
              <p class="uk-h1" uk-slideshow-parallax="x: 400,-400">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>

        <a
          class="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-previous uk-icon uk-slidenav"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        >
          <svg
            width="25"
            height="40"
            viewBox="0 0 25 40"
            xmlns="http://www.w3.org/2000/svg"
            data-svg="slidenav-previous-large"
          >
            <polyline
              fill="none"
              stroke="#000"
              stroke-width="2"
              points="20.527,1.5 2,20.024 20.525,38.547 "
            ></polyline>
          </svg>
        </a>
        <a
          class="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-next uk-icon uk-slidenav"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        >
          <svg
            width="25"
            height="40"
            viewBox="0 0 25 40"
            xmlns="http://www.w3.org/2000/svg"
            data-svg="slidenav-next-large"
          >
            <polyline
              fill="none"
              stroke="#000"
              stroke-width="2"
              points="4.002,38.547 22.527,20.024 4,1.5 "
            ></polyline>
          </svg>
        </a>

        <div class="uk-position-bottom-center uk-position-medium">
          <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin">
            <li uk-slideshow-item="0" class="uk-active">
              <a href="#"></a>
            </li>
            <li uk-slideshow-item="1">
              <a href="#"></a>
            </li>
            <li uk-slideshow-item="2">
              <a href="#"></a>
            </li>
            <li uk-slideshow-item="3">
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <button class="uk-button uk-button-secondary">Button</button>
        <button class="uk-button uk-button-secondary">Button</button>
        <button class="uk-button uk-button-secondary">Button</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
