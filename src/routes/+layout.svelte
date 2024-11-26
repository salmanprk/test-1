<script>
    import "../app.css";
    import { supabase } from "$lib/supbase";
    import { onMount } from "svelte";
    import { currentUser } from "$lib/store";
    import { goto } from "$app/navigation";
    import { slide } from "svelte/transition";
    // const { data } = supabase.auth.onAuthStateChange((event, session) => {
    //     console.log(event, session);

    //     if (event === "INITIAL_SESSION") {
    //         // handle initial session
    //     } else if (event === "SIGNED_IN") {
    //         // handle sign in event
    //     } else if (event === "SIGNED_OUT") {
    //         // handle sign out event
    //     } else if (event === "PASSWORD_RECOVERY") {
    //         // handle password recovery event
    //     } else if (event === "TOKEN_REFRESHED") {
    //         // handle token refreshed event
    //     } else if (event === "USER_UPDATED") {
    //         // handle user updated event
    //     }
    // });

    // // call unsubscribe to remove the callback
    // data.subscription.unsubscribe();

    onMount(() => {
        // console.log("Mounted");
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);

            if (event === "INITIAL_SESSION") {
                // handle initial session
                if (session != null && session?.user) {
                    $currentUser = session?.user;
                } else {
                    $currentUser = null;
                }
            } else if (event === "SIGNED_IN") {
                // handle sign in event
                $currentUser = session?.user;
                // goto("/dashboard");
            } else if (event === "SIGNED_OUT") {
                // handle sign out event
                $currentUser = null;
                goto("/login");
            } else if (event === "PASSWORD_RECOVERY") {
                // handle password recovery event
            } else if (event === "TOKEN_REFRESHED") {
                // handle token refreshed event
            } else if (event === "USER_UPDATED") {
                // handle user updated event
            }
        });

        // call unsubscribe to remove the callback
        // data.subscription.unsubscribe();
        return () => {
            // console.log("Unmounted");
            data.subscription.unsubscribe();
        };
    });
</script>

<div class="">
    <slot></slot>
</div>
