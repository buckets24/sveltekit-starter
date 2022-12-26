<script lang="ts">
  import FormModal from "@/components/FormModal/index.svelte";
  import Loader from "@/components/Table/Loader.svelte";
  import Pagination from "@/components/Table/Pagination.svelte";
  import { formatDate } from "@/utils/formatDate";
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  import { page } from '$app/stores';

	export let data: PageData;
	$: data;

	let activeUser: Record<string, string> | null = null
	let users: Record<string, string>[] = []
	let hasUsers: boolean | null = null
	let loading: boolean = false
  let currentPage = Number($page?.params?.pageNumber) === 1 ? 0 : Number($page?.params?.pageNumber) * 10

	async function getUsers(skipValue: number): Promise<string> {
		loading = true
		try {
			const response = await fetch(`https://dummyjson.com/users?limit=10&skip=${skipValue}`)
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
		await getUsers(currentPage)
	});

  $: $page?.params?.pageNumber 
    && getUsers(
      Number($page?.params?.pageNumber) === 1
        ? 0
        : Number($page?.params?.pageNumber) * 10
    )

</script>

<div>
  {#if loading}
    <Loader />
  {/if}
	<div class="overflow-x-auto relative">
		<!-- {#if hasUsers === false}
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
		{/if} -->  
    {#if hasUsers}
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
          {#each users as user}
            <tr
              on:click={() => activeUser = user}
              class="
                cursor-pointer"
            >
              <td>{`${user?.firstName} ${user?.lastName}`}</td>
              <td>{user?.email}</td>
              <td class="capitalize">{user?.gender}</td>
              <td>{formatDate(user?.birthDate)}</td>
            </tr>
          {/each}
        </tbody>
        <thead class="bg-gray-300">
          <tr>
            <th class="bg-transparent">Name</th>
            <th class="bg-transparent">Email</th>
            <th class="bg-transparent">Gender</th>
            <th class="bg-transparent">Birthdate</th>
          </tr>
        </thead>
      </table>
      <Pagination
        totalPages="10"
        currentPage={$page?.params?.pageNumber}
      />
    {/if}
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
