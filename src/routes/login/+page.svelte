<script>
    import { goto } from "$app/navigation";
    import IButton from "$lib/components/iButton.svelte";
    // import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { currentUser } from "$lib/store";
    import { supabase } from "$lib/supbase";
    // currentUse
    import NumericPinInput from "./NumericPinInput.svelte";
    let email = "";
    let loginState = "login"; // login, signup, confirm
    let buttonState = "default";
    let errorMessage = "";
    let otpToken = ["", "", "", "", "", ""];
    let pinValueComplete = false;
    function resetStateAfterTimeout(x, func) {
        setTimeout(() => {
            buttonState = "default";

            func && func();
        }, x);
    }
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
        } else {
            console.log("Success signing out");
        }
    }
    async function confirmSignUp() {
        buttonState = "loading";
        const { data, error } = await supabase.auth.verifyOtp({
            email: email,
            token: otpToken.join(""),
            type: "email",
        });
        if (error) {
            buttonState = "error";
            console.error("Error confirming sign up:", error);
            errorMessage = error.message;
            // after X seconds, reset the loading state
            resetStateAfterTimeout(7500);
        } else {
            buttonState = "done";
            console.log("Success confirming sign up:", data);
            resetStateAfterTimeout(5000, () => {
                loginState = "login";
                goto("/dashboard");
            });
            // loginState = "login";
            // goto("/dashboard");
        }
    }
    async function signInWithEmail() {
        buttonState = "loading";
        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                // set this to false if you do not want the user to be automatically signed up
                shouldCreateUser: loginState === "signup" ? true : false,
            },
        });
        if (error) {
            console.error("Error logging in:", error);
            buttonState = "error";
            errorMessage = error.message;
            // after X seconds, reset the loading state
            resetStateAfterTimeout(7500);
        } else {
            // console.log("Success logging in:", data);
            console.log("Login initiated");
            buttonState = "done";
            resetStateAfterTimeout(0);
            loginState = "confirm";
        }
    }
</script>

<div
    class="w-full h-dvh lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]"
>
    <div class="flex items-center justify-center py-12">
        <!-- <div>
            {#if $currentUser !== null}
       
                <IButton on:click={signOut} defaultMessage="Sign Out"></IButton>
            {/if}
        </div> -->
        {#if loginState === "login"}
            <section class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">Login</h1>
                    <p class="text-muted-foreground text-balance">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            bind:value={email}
                        />
                    </div>
                    <IButton
                        on:click={signInWithEmail}
                        {buttonState}
                        defaultMessage="Login"
                        loadingMessage="Logging in"
                        {errorMessage}
                        doneMessage="Success"
                        class="w-full"
                    ></IButton>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <a
                        href="##"
                        class="underline"
                        on:click={() => (loginState = "signup")}
                    >
                        Sign up
                    </a>
                </div>
            </section>
        {/if}
        {#if loginState === "signup"}
            <section class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">Sign up</h1>
                    <p class="text-muted-foreground text-balance">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            bind:value={email}
                        />
                    </div>

                    <IButton
                        on:click={signInWithEmail}
                        {buttonState}
                        defaultMessage="Sign up"
                        loadingMessage="Loading"
                        {errorMessage}
                        doneMessage="Done"
                        class="w-full"
                    ></IButton>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <a
                        href="##"
                        class="underline"
                        on:click={() => (loginState = "login")}
                    >
                        Login
                    </a>
                </div>
            </section>
        {/if}
        {#if loginState === "confirm"}
            <section class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">Enter OTP</h1>
                    <p class="text-muted-foreground text-balance">
                        Enter the OTP sent to your email: {email}
                    </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2 justify-center">
                        <Label for="email">OTP</Label>

                        <!-- {#if buttonState !== "done"} -->
                        <NumericPinInput
                            bind:value={otpToken}
                            bind:pinValueComplete
                        />
                        <!-- {/if} -->

                        <!-- <h3>{numericOTP}</h3> -->
                        <!-- <span>{pinValueComplete}</span> -->
                        <IButton
                            disabled={!pinValueComplete}
                            on:click={confirmSignUp}
                            {buttonState}
                            defaultMessage="Confirm"
                            loadingMessage="Loading"
                            {errorMessage}
                            doneMessage="You will now be logged in..."
                            class="w-full mt-2"
                        ></IButton>
                    </div>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <a
                        href="##"
                        class="underline"
                        on:click={() => (loginState = "login")}
                    >
                        Login
                    </a>
                </div>
            </section>
        {/if}
    </div>
    <div class="bg-muted hidden lg:block h-dvh">
        <img
            src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
            alt="placeholder"
            class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
    </div>
</div>
