<script>
    import {L, l} from "$lib/stores"
    let email, password, universite, langue, nom
    async function inscription(event){
        let response = await fetch("/api/fjord/auth/login/", {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ email, password})
        })

    }
</script>

<a href="#signup-form" class="btn">{$L[$l].login.sInscrire}</a>

<div class="modal" id="signup-form">
    <div class="modal-box  max-w-xs">
        <form on:submit|preventDefault={inscription} class="flex justify-center flex-col items-center">
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.email}</span>
                </label>
                <input type="text" bind:value={email} placeholder="john@doe.com" class="input input-bordered w-full " />
            </div>
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.motDePasse}</span>
                </label>
                <input type="password" bind:value={password} placeholder="*********" class="input input-bordered w-full " />
            </div>
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.nom}</span>
                </label>
                <input type="text" bind:this={nom} placeholder="John Doe" class="input input-bordered w-full " />
            </div>
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.universite}</span>
                </label>
                <select bind:value={universite} class="select select-bordered w-full max-w-xs">
                    <option selected value="Université de Sherbrooke">Université de Sherbrooke</option>
                    <option value="Collège Champlain">Collège Champlain</option>
                    <option value="Université Bishop">Université Bishop</option>
                    <option value="Université de Montréal">Université de Montréal</option>
                    <option value="Autre">Autre</option>
                </select>
            </div>
            <div class="form-control gap-0 w-full ">
                <label class="label">
                    <span class="label-text font-bold">{$L[$l].login.langue}</span>
                </label>
                <div class="flex flex-row justify-center items-center gap-1">
                    <span class="{langue ? 'text-gray-400': 'text-black '}">FR</span>
                    <input type="checkbox" bind:checked={langue} class="toggle toggle-lg " />
                    <span class="{langue ? 'text-black': 'text-gray-400'}">EN</span>
                </div>

            </div>
            <div class="modal-action">
                <button type="submit" class="btn btn-primary">Inscription</button>
                <a href="#" class="btn btn-ghost">Annuler!</a>
            </div>
        </form>

    </div>
</div>



