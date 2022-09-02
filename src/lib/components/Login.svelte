<script>
    import {L, l} from "$lib/stores"
    export let errors;
    export let values;
    let email, password
    async function connexion(event){
        let response = await fetch("/api/fjord/auth/login/", {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ email: email.value, password: password.value})
        })
        console.log(response.status)
    }
</script>

<a href="#login-form" class="btn btn-primary">{$L[$l].login.seConnecter}</a>

<div class="modal" id="login-form">
    <div class="modal-box  max-w-xs">
        <form on:submit|preventDefault={connexion} class="flex justify-center flex-col items-center">
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.email}</span>
                </label>
                <input type="text" bind:this={email} placeholder="john@doe.com" class="input input-bordered w-full " />
            </div>
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.motDePasse}</span>
                </label>
                <input type="password" bind:this={password} placeholder="*********" class="input input-bordered w-full " />
            </div>
            <div class="modal-action">
                <button type="submit" class="btn btn-primary">Connexion</button>
                <a href="#" class="btn btn-ghost">Annuler!</a>
            </div>
        </form>

    </div>
</div>



