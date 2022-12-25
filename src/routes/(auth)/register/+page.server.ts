import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, type ValidationError, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	async default(
		event
	): Promise<ValidationError<{ error: string; values?: { email: string } }> | { message: string }> {
		const { request } = event;
		const { supabaseClient } = await getSupabase(event);

		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (!email) {
			return fail(400, {
				error: 'Please enter your email'
			});
		}

		if (!password) {
			return fail(400, {
				error: 'Please enter a password',
				values: {
					email
				}
			});
		}

		const { error } = await supabaseClient.auth.signUp({
			email,
			password
		});

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'Invalid credentials.',
					values: {
						email
					}
				});
			}

			return fail(500, {
				error: 'Server error. Try again later.',
				values: {
					email
				}
			});
		}

		throw redirect(303, '/');
	}
};
