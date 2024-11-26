<script>
    import { Check, Loader, LoaderCircle, CircleX } from "lucide-svelte";
    import Button from "./ui/button/button.svelte";
    export let variant = "default";
    export let size = "default";
    let className = undefined;
    export { className as class };
    // Button states and messages
    export let buttonState = "default";
    export let errorMessage = "Error";
    export let loadingMessage = "Loading";
    export let defaultMessage = "Submit";
    export let doneMessage = "Success";
    export let disabled = false;
</script>

{#if buttonState === "default"}
    <Button {disabled} class={className} {variant} {size} on:click on:keydown
        >{defaultMessage}
    </Button>
{/if}
{#if buttonState === "loading"}
    <Button
        class={className}
        {variant}
        {size}
        disabled={true}
        on:click
        on:keydown
        ><Loader class="w-4 h-4 animate-spin mr-1" />{loadingMessage}</Button
    >
{/if}
{#if buttonState === "done"}
    <Button
        class={`${className} bg-green-700`}
        {variant}
        {size}
        on:click
        on:keydown><Check class="mr-1 w-4 h-4"></Check>{doneMessage}</Button
    >
{/if}
{#if buttonState === "error"}
    <Button
        class={`${className} bg-red-700`}
        {variant}
        {size}
        on:click
        on:keydown
        ><CircleX class="mr-1 w-4 h-4"></CircleX>{errorMessage}</Button
    >
{/if}
