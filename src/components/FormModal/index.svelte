<script lang="ts">
  export let isOpen: boolean
  export let handleClose: Function
</script>

<div class="relative">
  <div
    class="
      transition-all
      fixed
      top-0
      bottom-0
      {isOpen ? 'right-0' : 'right-[-110%]' }
      w-full
      md:w-2/5
      z-30
      bg-white
      drop-shadow-lg
      m-2
      py-4
      px-8
      rounded-md
      "
  >
    <button
      on:click={handleClose}
      class="
        absolute
        top-2
        right-4
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    <slot />
  </div>
</div>