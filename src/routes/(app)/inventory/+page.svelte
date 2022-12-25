<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: data;
  console.log(data)
</script>

<div>
	<h1>Inventory</h1>
</div>
