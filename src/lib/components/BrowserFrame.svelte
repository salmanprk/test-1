<script>
    import BorderBeam from "./BorderBeam.svelte";
    import FollowPointerCard from "./FollowPointerCard.svelte";
</script>

<div
    class="max-w-5xl mx-auto shadow-2xl shadow-fuchsia-500/50 rounded-lg hover:scale-105 duration-500"
>
    <div
        class="w-full h-6 lg:h-8 rounded-t-lg bg-pink-100 flex justify-start items-center space-x-1.5 px-3"
    >
        <span class="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
        <span class="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500"></span>
        <span class="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500"></span>
    </div>

    <BorderBeam
        borderWidth={4}
        duration={15}
        class="z-40 rounded-md"
        colorFrom="#818cf8"
        colorTo="#f472b6"
    />
    <FollowPointerCard>
        <slot></slot>
    </FollowPointerCard>
</div>
