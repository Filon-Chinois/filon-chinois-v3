<script>
    import {L,l} from "$lib/stores"
</script>

<div class="min-h-screen h-screen max-h-screen w-screen flex flex-col lg:flex-row-reverse" >
    <div class="w-full h-64 md:h-full flex flex-col w-full justify-end items-center" style="background-image: linear-gradient(175deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 37%), url('https://fjzpeeuodgpzyiranoip.supabase.in/storage/v1/object/public/ressources/images/mixkit-people-in-tiananmen-squar.gif'); background-size: cover; background-position: bottom center;">
        <div class="bg-white bg-opacity-10 backdrop-blur-lg w-full p-1 lg:p-10 rounded-md select-none shadow-md flex flex-row justify-between">
            <div class="flex flex-col">
                <img src="https://www.filon-chinois.app/logo-prese.png" alt="">
                <p class="text-xs text-white text-center">Avec le soutien financier du PRESE</p>
            </div>

        </div>


    </div>
    <div class="bg-white shadow-2xl z-10 relative w-full lg:max-w-md w-full grow flex flex-col justify-between">
        <div class="grow flex flex-col justify-center items-center">
            <h1 class="uppercase text-black font-bold text-center text-3xl md:text-4xl">Filon Chinois</h1>
            <h2 class=" w-full text-primary text-2xl text-center md:text-3xl">中文线索</h2>
        </div>
        <div class="">
            <div class="p-12 text-justify w-full">
                {$L[$l].offline.message}
                <p class="text-2xl"></p>
            </div>
        </div>
    </div>
</div>


