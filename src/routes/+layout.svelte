<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { supabaseClient } from '$lib/db';
	import "@/app.css";
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<slot />
