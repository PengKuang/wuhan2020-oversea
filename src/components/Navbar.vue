<template>
<div>
  
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
        <b-row>
          <b-nav-item href="/">Home</b-nav-item>

          <b-nav-item-dropdown text="Flights" right>
            <b-dropdown-item href="/InfoProvider">Add flight</b-dropdown-item>
            <b-dropdown-item href="/PassengerSearch">Flights</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Region" right>
            <b-dropdown-item href="/">Globe</b-dropdown-item>
            <b-dropdown-item href="#">Asia</b-dropdown-item>
            <b-dropdown-item href="#">Africa</b-dropdown-item>
            <b-dropdown-item href="#">Europe</b-dropdown-item>
            <b-dropdown-item href="#">Middle East</b-dropdown-item>
            <b-dropdown-item href="#">North America</b-dropdown-item>
            <b-dropdown-item href="#">Oceania</b-dropdown-item>
          </b-nav-item-dropdown>

        <b-col cols="3" align-self="end">
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Language" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">中文</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-col>

      </b-row>

    </b-navbar-nav>
  </b-navbar>
  
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>