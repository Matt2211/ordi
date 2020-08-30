<template>
  <div>
    <nav id="mySidenav" :class="sidebarOpen"  class="sidebar">
      <!-- close sidebar menu -->

     
         <a
         @click="openNav()"
          class="btn btn-primary btn-customized open-menu"
          href="#"
          role="button"
        >
          <i class="far fa-bars"></i>
        </a>


          <span @click="closeNav()">X</span>
     

      <ul class="list-unstyled menu-elements">
        <li :class="active">
          <a href>item</a>
        </li>
        <li>
          <a href>item 2</a>
        </li>
        <li>
          <a href>Item 3</a>
        </li>

        <li>
          <a
            href="#otherSections"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            role="button"
            aria-controls="otherSections"
          >Other sections</a>
          <ul class="collapse list-unstyled" id="otherSections">
            <a href>
              <li>Sub item 1</li>
            </a>
            <a href>
              <li>Sub item 2</li>
            </a>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarComp",
  methods: {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
       closeNav() {
      document.getElementById("mySidenav").style.width = "50px";
      document.getElementById("main").style.marginLeft = "50px";
    }

  }
};
</script>