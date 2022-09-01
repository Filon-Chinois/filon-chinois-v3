<script>
  import "../app.postcss";
  import {page} from '$app/stores'
  import { supabaseClient } from '$lib/db';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import Online from "../lib/components/Online.svelte";
  import Offline from "../lib/components/Offline.svelte";
  import {session} from "../lib/stores.js";
  $: $session = $page.data.session;
</script>

<SupaAuthHelper {supabaseClient} {$session}>
    {#if !$session.user}
        <Offline>
            Connectez-vous!
        </Offline>
    {:else}
        <Online>
            <slot/>
        </Online>
    {/if}
</SupaAuthHelper>

