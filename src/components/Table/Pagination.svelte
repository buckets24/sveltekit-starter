<script lang="ts">
  export let totalPages: String
  export let currentPage: String
</script>


<div class="flex items-center justify-between py-2">
  <div>
    Page {currentPage} of {totalPages}
  </div>
  <div class="btn-group rounded-md">
    <a data-sveltekit-preload-data href="/dashboard/1" class="btn">1</a>
    <a data-sveltekit-preload-data href="/dashboard/2" class="btn">2</a>
    <a data-sveltekit-preload-data href="/dashboard/3" class="btn">3</a>
    <a data-sveltekit-preload-data href="/dashboard/4" class="btn">4</a>
  </div>
</div>