<script lang="ts">
  import { sidebarState } from '@/store/sidemenu';

  interface iNavLink {
    label: String
    url: string
  }

  const navLinks: iNavLink[] = [
    {
      label: "Dashboard",
      url: "/dashboard"
    },
    {
      label: "Inventory",
      url: "/inventory"
    },
    {
      label: "Users",
      url: "/users"
    }
  ]

</script>

<svelte:window on:resize={
  () => sidebarState && window.innerWidth <= 1020
    ? sidebarState.reset()
    : null}
/>

<div class="drawer-side bg-base-200">
  <div
    class="
      menu
      p-4
      w-80
      bg-bodyBG
      text-base-content
      m-2
      rounded-xl
      shadow
      transition-all
      translate-x-[-100%]
      z-20
      lg:translate-x-0 {$sidebarState ? 'translate-x-0' : 'translate-x-[-110%]'}"
  >
    <div
      class="
        grid
        gap-4"
      >
      <div 
        class="
        w-[100px]
        overflow-hidden
        rounded-lg"
      >
        Logo
      </div>
      <div>
        <ul
          class="
            menu
            w-full
            text-base-content"
          >
          {#each navLinks as link, i}
            <li>
              <a
                on:click={() => sidebarState.reset()}
                href={link.url}
                class="
                  text-white
                  font-bold"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <button
    on:click={() => sidebarState.reset()}
    class="
      {$sidebarState ? 'z-10' : 'z-[-1]'}
      bg-black
      opacity-60
      absolute
      top-0
      bottom-0
      right-0
      left-0
    "
  />
</div>
