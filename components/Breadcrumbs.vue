<template>
  <div class="breadcrumbs">
    <a href="/" class="breadcrumbs__link">Главная</a>
    <a href="#" class="breadcrumbs__link">Раздел</a>
    <a class="breadcrumbs__link">Страница раздела</a>
  </div>
</template>

<style scoped>
.breadcrumbs {
  margin-bottom: 20px;
  font-size: 14px;
}

.breadcrumbs__link {
  color: #666;
  text-decoration: none;
  margin-right: 5px;
}

.breadcrumbs__link::after {
  content: "/";
  margin-left: 5px;
  color: #666;
}

.breadcrumbs__link:last-child::after {
  content: "";
}
</style>