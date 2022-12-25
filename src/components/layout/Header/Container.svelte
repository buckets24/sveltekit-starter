<script lang="ts">
  import { sidebarState } from '@/store/sidemenu';

  import Avatar from "./Avatar.svelte";
  import Menu from "./Menu.svelte";
  
  let isMenuActive = false

  function handleClickOutside() {
    isMenuActive = !isMenuActive
  }

  function toggleMenu() {
    isMenuActive = !isMenuActive
  }
</script>

<div class="
  bg-bodyBg 
  w-full 
  sticky 
  top-0 
  z-10 
  px-3 
  my-3"
>
  <div 
    class="navbar 
    rounded-lg 
    bg-base-100 
    shadow-lg"
  >
    <button 
      class="
        btn 
        btn-ghost 
        btn-circle 
        lg:hidden"
      on:click={sidebarState.toggle}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </button>
    <div 
      class="
        flex-1"
    >
      <span
        class="
          normal-case 
          font-bold 
          text-xl 
          px-2"
      >
        App Name
      </span>
    </div>
    <div class="
      flex-none"
    >
      <div 
        class="
          dropdown 
          dropdown-end"
      >
        <Avatar
          toggleMenu={toggleMenu}
        />
        {#if isMenuActive}
          <Menu toggleMenu={toggleMenu} />
        {/if}
      </div>
    </div>
  </div>
</div>
