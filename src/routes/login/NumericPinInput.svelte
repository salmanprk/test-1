<script>
    import { PinInput, Toggle } from "bits-ui";
    // import { Eye, EyeSlash } from "$icons/index.js";

    export let value = ["", "", "", "", "", ""];
    export let pinValueComplete = true;
    // export function func;

    // function that checks if the value of the pin is complete and value of the elements are not ''
    function checkPinValue() {
        let pinValueComplete = true;
        for (let i = 0; i <= value.length; i++) {
            if (value[i] === "") {
                console.log(i);
                pinValueComplete = false;
                break;
            }
        }
        return pinValueComplete;
    }
    // let pinInputType: "text" | "password" = "password";
    // $: pinInputType = unlocked ? "text" : "password";
</script>

<PinInput.Root
    bind:value
    class="flex items-center gap-2 "
    type={"text"}
    placeholder="0"
    onValueChange={(value) => {
        console.log(checkPinValue());
        pinValueComplete = checkPinValue();
    }}
>
    <PinInput.Input
        class="flex h-input w-10 select-none focus:outline-black rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover rounded-lg"
    />
    <PinInput.Input
        class="flex h-input w-10 select-none focus:outline-black rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover rounded-lg"
    />
    <span class="mx-1"></span>
    <PinInput.Input
        class="flex h-input w-10 select-none focus:outline-black rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover rounded-lg"
    />
    <PinInput.Input
        class="flex h-input w-10 select-none focus:outline-black rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover rounded-lg"
    />
    <span class="mx-1"></span>
    <PinInput.Input
        class="flex h-input w-10 select-none focus:outline-black rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover rounded-lg"
    />
    <PinInput.Input
        class="flex h-input w-10 select-none focus:outline-black rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover rounded-lg"
    />
    <PinInput.HiddenInput />
    <!-- <Toggle.Root
        aria-label="toggle code visibility"
        class="inline-flex size-10 items-center justify-center rounded-[9px] text-foreground/40 transition-all hover:bg-muted active:scale-98 active:bg-dark-10 active:data-[state=on]:bg-dark-10"
        bind:pressed={unlocked}
    >
       
    </Toggle.Root> -->
</PinInput.Root>
