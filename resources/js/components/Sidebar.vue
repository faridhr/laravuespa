<template>
  <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
              <div class="nav">
                  <div class="sb-sidenav-menu-heading">LaraVueSPA</div>
                  <router-link :to="{ name: 'welcome'}" class="nav-link" exact><i class="fa fa-fw fa-home"/> &nbsp Welcome</router-link>
                  <router-link :to="{ name: 'category'}" class="nav-link" exact><i class="fa fa-fw fa-group"/> &nbsp Category</router-link>
              </div>
          </div>
          <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              Start Bootstrap
          </div>
      </nav>
  </div>
</template>
