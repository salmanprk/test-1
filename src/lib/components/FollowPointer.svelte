<script>
    import { fade, fly, scale, slide } from "svelte/transition";
    export let x;
    export let y;
    export let title = "William";

    const colors = [
        "var(--sky-500)",
        "var(--neutral-500)",
        "var(--teal-500)",
        "var(--green-500)",
        "var(--blue-500)",
        "var(--red-500)",
        "var(--yellow-500)",
    ];
    const bgColors = [
        "bg-pink-200",
        // "bg-purple-500",
        // "bg-indigo-500",
        // "bg-blue-500",
        // "bg-green-500",
        // "bg-yellow-500",
        // "bg-red-500",
    ];

    const textColor = [
        "text-pink-200",
        // "text-purple-500",
        // "text-indigo-500",
        // "text-blue-500",
        // "text-green-500",
        // "text-yellow-500",
        // "text-red-500",
    ];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomColor2 = bgColors[Math.floor(Math.random() * bgColors.length)];
    let randomNumber = Math.floor(Math.random() * bgColors.length);
    let randomTextColor =
        textColor[Math.floor(Math.random() * textColor.length)];
</script>

<div
    class="rounded-full absolute z-50"
    style="top: {y}px; left: {x}px; pointer-events: none;"
    in:scale
>
    <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="1.25"
        style="transform: rotate(-70deg) translateX(-2px) translateY(-15px); "
        viewBox="0 0 16 16"
        class="h-8 w-8 {textColor[randomNumber]} stroke-pink-300 rounded-lg"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
        ></path>
    </svg>

    <div
        class={`px-4 py-2 text-pink-400 font-bold whitespace-nowrap min-w-max text-sm rounded-full ${bgColors[randomNumber]} border-2 border-pink-300`}
        style=""
    >
        {title}
    </div>
</div>
