<template>
  <main>
    <Header />
    <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
              <router-view></router-view>
            <footer />
        </div>
    </div>
    <!-- <flash-message position="right bottom"></flash-message> -->
  </main>
</template>
<script>
  import Header from './components/Header';
  import Sidebar from './components/Sidebar';
  import Footer from './components/Footer';
  export default {
    components : {
      Header,
      Sidebar,
      Footer
    }
  }
</script>
