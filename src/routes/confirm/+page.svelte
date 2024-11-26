<script>
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { supabase } from "$lib/supbase";
    let email = "";
    let loginPage = true;
    async function signInWithEmail() {
        // console.log("Signing in with email:", email)
        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                // set this to false if you do not want the user to be automatically signed up
                shouldCreateUser: !loginPage,
                // emailRedirectTo: "https://example.com/welcome",
            },
        });
        if (error) {
            console.error("Error logging in:", error.message);
        } else {
            console.log("Success logging in:", data);
        }
    }
</script>

<div
    class="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] border-4 border-yellow-600"
>
    <div class="flex items-center justify-center py-12">
        {#if loginPage}
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
                    <Button
                        on:click={signInWithEmail}
                        type="submit"
                        class="w-full">Login</Button
                    >
                </div>
                <div class="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <a
                        href="##"
                        class="underline"
                        on:click={() => (loginPage = false)}
                    >
                        Sign up
                    </a>
                </div>
            </section>
        {:else}
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
                    <Button
                        on:click={signInWithEmail}
                        type="submit"
                        class="w-full">Sign Up</Button
                    >
                </div>
                <div class="mt-4 text-center text-sm">
                    Don&apos;t have an account?
                    <a
                        href="##"
                        class="underline"
                        on:click={() => (loginPage = true)}
                    >
                        Login
                    </a>
                </div>
            </section>
        {/if}
    </div>
    <div class="bg-muted hidden lg:block">
        <!-- <img
            src="/images/placeholder.svg"
            alt="placeholder"
            width="1920"
            height="1080"
            class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> -->
    </div>
</div>
