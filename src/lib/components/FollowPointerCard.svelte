<script>
    import { spring } from "svelte/motion";
    import FollowPointer from "./FollowPointer.svelte";

    let ref = null;
    let isInside = false;
    let x = spring(0, { stiffness: 0.15, damping: 1.4 });
    let y = spring(0, { stiffness: 0.15, damping: 1.4 });

    const handleMouseMove = (e) => {
        if (ref) {
            let rects = ref.getBoundingClientRect();
            x.set(e.clientX - rects.left);
            y.set(e.clientY - rects.top);
        }
    };

    const handleMouseLeave = () => {
        isInside = false;
    };

    const handleMouseEnter = () => {
        isInside = true;
    };
    let names = ["Serena Shu", "Yiqing Zhang", "Weiyuan Bao"];
    let choice = names[Math.floor(Math.random() * names.length)];
    export let title = choice;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:mouseleave={handleMouseLeave}
    on:mouseenter={handleMouseEnter}
    on:mousemove={handleMouseMove}
    bind:this={ref}
    style="cursor: none"
    class="relative z-60"
>
    {#if isInside}
        <FollowPointer x={$x} y={$y} {title} />
    {/if}
    <slot></slot>
</div>
