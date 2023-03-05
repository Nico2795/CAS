<template>
				<hr class="featurette-divider" />

<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">
      Mission
      <span class="text-muted"></span>
    </h2>
    <p class="lead">
      Our mission is to provide comprehensive and innovative solutions that fulfill the unique needs of each of our clients in the field of Aircraft Composites. Our goal is to add value and deliver exceptional quality in every aspect of our services, fostering long-lasting relationships with satisfied customers.
    </p>
  </div>
  <div class="col-md-5">
    <svg
      class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
      width="500"
      height="500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 500x500"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#eee" />
      <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
    </svg>
  </div>
</div>

<hr class="featurette-divider" />

<div class="row featurette">
  <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading fw-normal lh-1">
      Vision.
      <span class="text-muted"></span>
    </h2>
    <p class="lead">
      Our vision is to drive comprehensive growth and development for the company, and to establish ourselves as a leader in the Aircraft Composite industry by consistently delivering high-quality solutions to our customers. We strive to be a profitable and competitive company by maintaining the trust and loyalty of our valued customers.
    </p>
  </div>
  <div class="col-md-5 order-md-1">
    <svg
      class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
      width="500"
      height="500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 500x500"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#eee" />
      <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
    </svg>
  </div>
</div>
  </template>
  
  <script scoped>
  export default {
  
  }
  </script>
  
  <style scoped>
  .missionVission{
    gap: 10px;
  }
  .imagen img{
    height: 100%;
  }
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

  </style>
  