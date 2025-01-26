<template>
    <div :class="['news-card', className]">
      <img
        loading="lazy"
        :src="image"
        class="card-image"
        :alt="title"
      />
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .news-card {
    position: relative;
    color: #fff;
    font: 500 24px Chopin-Trial, sans-serif;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    margin: 0;
    font-size: inherit;
    text-align: center;
  }
  
  .featured-card {
    min-height: 541px;
  }
  
  .standard-card {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .standard-card .card-image {
    width: 50%;
  }
  
  .standard-card .card-title {
    position: static;
    width: 50%;
    display: flex;
    align-items: center;
  }
  
  .reverse {
    flex-direction: row-reverse;
  }
  
  .reverse .card-title {
    text-align: right;
  }
  
  @media (max-width: 991px) {
    .standard-card {
      flex-direction: column;
    }
  
    .standard-card .card-image,
    .standard-card .card-title {
      width: 100%;
    }
  
    .reverse .card-title {
      text-align: center;
    }
  }
  </style>