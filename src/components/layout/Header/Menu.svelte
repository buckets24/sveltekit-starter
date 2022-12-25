<script lang="ts">
  export let toggleMenu
</script>

<ul
  class="
  menu 
  menu-compact 
  mt-3 
  p-2 
  shadow 
  bg-base-100 
  rounded-box 
  w-52 
  absolute 
  right-0 
  z-50"
>
  <li>
    <a
      on:click={toggleMenu}
      href="/dashboard/profile" 
      class="justify-between"
    >
      Profile
    </a>
  </li>
  <li>
    <a
      on:click={toggleMenu}
      href="/login" 
      class="justify-between"
    >
      Logout
    </a>
  </li>
</ul>