<template>
      <div
    class="header w-100 text-white d-flex align-items-center align-content-center pl-3 pr-3 justify-content-between"
  >
    <div class="logo d-flex align-items-center fw-800">
       ORDI
     
    </div>
    <div class="menu">
      <div class="dropdown">
        <button
          class="navbar-toggler text-white"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fal fa-user-circle"></i>
        </button>

        <div class="dropdown-menu dropdown-menu-right text" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            <i class="fal fa-user-alt"></i> Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fal fa-cog"></i> Settings
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            <i class="fal fa-sign-out"></i> Log out
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
    };
  },
  
};
</script>
