<script lang="ts">
  let avatarError = false
  export let toggleMenu

  function handleImageError() {
    console.log('error')
    avatarError = true
  }

</script>

<button
  id="header-menu"
  class="btn btn-ghost btn-circle avatar"
  on:click={toggleMenu}
  on:blur={toggleMenu}
>
  <div class="w-10 rounded-full">
    {#if avatarError}
      <img
        src="https://placeimg.com/80/80/people"
        alt="placeholder"
        on:error={handleImageError}
      />
    {:else}
      <div
        class="
          bg-[#FFCC00]
          w-full
          h-full
          rounded-full
          flex
          items-center
          justify-center
        "
      >
        U
      </div>
    {/if}
  </div>
</button>