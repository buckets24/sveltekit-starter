<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: data;
</script>

<div class="block">
	<p>Protected content for {data?.user.email}</p>
	<p>server-side fetched data with RLS:</p>
	<!-- <pre>{JSON.stringify(testTable, null, 2)}</pre> -->
</div>
<div class="block">
	<p>user:</p>
	<pre>{JSON.stringify(data?.user, null, 2)}</pre>
</div>
