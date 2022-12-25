<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await invalidate('supabase:auth');
			} else {
				await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div>
  <div class="flex-3">
    <div class="pb-6">
      <h3 class="text-4xl font-bold text-black">Login</h3>
    </div>
    <div>
      <form method="post" use:enhance={handleSubmit}>
        <div class="flex flex-col gap-2">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              class="input input-bordered border-2 w-full max-w-xs rounded-default focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Password"
              class="input input-bordered border-2 w-full max-w-xs rounded-default focus:outline-none focus:border-secondary"
            />
          </div>
          <button
            class="w-full text-white btn btn-md text-base rounded-default capitalize bg-primary border-primary hover:bg-white hover:text-primary hover:border-main hover:border-2"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
    <div class="flex border-t border-ink500 flex-1 flex-col items-center py-6 mt-6">
      <div class="grid gap-2">
        <div>
          <span class="text-sm font-light text-slate-400 pr-1">Forgot Password?</span>
          <a href="/forgot-password" class="text-sm"><span class="text-primary">Reset Password</span></a>
        </div>
        <div>
          <span class="text-sm font-light text-slate-400 pr-1">Don't have an account yet?</span>
          <a href="/register" class="text-sm"><span class="text-primary">Create Account</span></a>
        </div>
      </div>
    </div>
  </div>
</div>
