<template>
  <div class="home">
    <div class="main-title">
      <h1 class="main-title__h1">арт — пространство</h1>
      <picture class="main-title__picture">
        <img src="/images/LENNI.svg" alt="logo" class="main-title__img" />
      </picture>
      <p class="main-title__h1">
        для людей, горящих сердцем и делом <br />
        место для настоящего
      </p>
    </div>

    <Offers class="home__offers" @openForm="openEventForm" />

    <About />
    <Upcoming class="home__upcoming" />
    <BlogListing class="home__listing" />
    <Contacts />
    <Doit />
  </div>
</template>

<script setup>
import Offers from '../components/Offers.vue'
import About from '../components/About.vue'
import Upcoming from '../components/Upcoming.vue'
import BlogListing from '../components/BlogListing.vue'
import Contacts from '../components/Contacts.vue'
import Doit from '../components/Doit.vue'

const openEventForm = () => {
  document.documentElement.classList.add('show-event-pp')
}
</script>