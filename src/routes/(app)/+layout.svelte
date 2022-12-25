<script>
  import Header from "@/components/layout/Header/Container.svelte";
  import Sidebar from "@/components/layout/Sidebar.svelte";
</script>

<div class="drawer drawer-mobile">
  <input class="drawer-toggle" />
  <div class="drawer-content bg-base-200 flex flex-col items-start justify-start">
    <Header />
    <div class="p-4 w-full">
      <main>
        <slot />
      </main>
    </div>
  </div> 
  <Sidebar />
</div>