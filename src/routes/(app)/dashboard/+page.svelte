<script lang="ts">
	import FormModal from "@/components/FormModal/index.svelte";
	import Loader from "@/components/Table/Loader.svelte";
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: data;

	let activeUser: Record<string, string> | null = null
	let users: Record<string, string>[] = []
	let hasUsers: boolean | null = null
	let loading: boolean = false

	async function getProducts(): Promise<string> {
		loading = true
		try {
			const response = await fetch(`https://dummyjson.com/users?limit=10&skip=10`)
			const results = await response.json()
			users = results?.users
			hasUsers = results?.users.length > 0
			loading = false
			return results
		} catch(error) {
			loading = false
			throw error
		}
 	}

	onMount(async () => {
		await getProducts()
	});

	$: users
	$: hasUsers
	$: activeUser
</script>

<div>
	<div class="overflow-x-auto relative">
		{#if hasUsers === false}
			<div
				class="
					absolute
					flex
					items-center
					justify-center
					top-0
					bottom-0
					left-0
					right-0
					bg-white/80
					rounded-md
					z-20"
			>
				No Products found.
			</div>
		{/if}
		<table class="table w-full">
			<thead class="bg-gray-300">
				<tr>
					<th class="bg-transparent">Name</th>
					<th class="bg-transparent">Email</th>
					<th class="bg-transparent">Gender</th>
					<th class="bg-transparent">Birthdate</th>
				</tr>
			</thead>
			<tbody>
				{#if loading}
					<Loader />
				{:else}
        
					{#each users as user}
						<tr
							on:click={() => activeUser = user}
							class="
								cursor-pointer"
						>
							<td>{`${user?.firstName} ${user?.lastName}`}</td>
							<td>{user?.email}</td>
							<td class="capitalize">{user?.gender}</td>
							<td>{user?.birthDate}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
			<thead class="bg-gray-300">
				<tr>
					<th class="bg-transparent">Stock</th>
					<th class="bg-transparent">Name</th>
					<th class="bg-transparent">Brand</th>
					<th class="bg-transparent">Price</th>
				</tr>
			</thead>
		</table>
	</div>
	<div>
		<FormModal
			isOpen={activeUser !== null}
			handleClose={() => activeUser = null}
		>
			<h4>33333</h4>
		</FormModal>
	</div>
</div>
