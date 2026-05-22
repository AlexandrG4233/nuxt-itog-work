<template>
  <header class="page-header">
    <div class="page-header__container">
      <NuxtLink to="/" class="page-header__logo">
        <img src="/icons/logo.svg" alt="Logo" class="page-header__logo-icon" />
      </NuxtLink>

      <nav class="page-header__nav">
        <NuxtLink to="/events" class="page-header__nav-link">Мероприятия</NuxtLink>
        <a href="#" class="page-header__nav-link">Блог</a>
        <a href="#" class="page-header__nav-link">О нас</a>
        <a href="#" class="page-header__nav-link">Контакты</a>

        <div class="page-header__nav-user">
          <a href="#" class="page-header__nav-user-link">Александр С.</a>
          <a href="#" class="page-header__nav-logout">
            <img src="/icons/log-out-door.svg" alt="Logout" width="24" height="24" />
          </a>
        </div>
      </nav>

      <div class="page-header__right-block">
        <a href="#" class="page-header__user-btn btn">
          Войти
          <img src="/icons/user.svg" alt="User" class="page-header__user-icon" width="21" height="18" />
        </a>
        <button type="button" class="page-header__nav-toggle" @click="toggleNav"></button>
      </div>
    </div>
  </header>
</template>

<script setup>
const toggleNav = () => {
  document.documentElement.classList.toggle('show-nav')
}
</script>