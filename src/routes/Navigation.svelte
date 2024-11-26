<script>
    import Package from "lucide-svelte/icons/package";
    import Package2 from "lucide-svelte/icons/package-2";

    import ShoppingCart from "lucide-svelte/icons/shopping-cart";

    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import Users from "lucide-svelte/icons/users";
    import Bell from "lucide-svelte/icons/bell";
    import House from "lucide-svelte/icons/house";
    import { signOut } from "$lib/supbase";
    // import Home from "lucide-svelte/icons/home";
    // import { LineChart } from "lucide-svelte";
    export let className = "";
</script>

<div class={`${className} grid min-h-screen w-full `}>
    <div class="bg-muted/40 hidden border-r md:block">
        <div class="flex h-full max-h-screen flex-col gap-2">
            <div
                class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6"
            >
                <a href="/" class="flex items-center gap-2 font-semibold">
                    <Package2 class="h-6 w-6" />
                    <span class="">Rewardify Inc</span>
                </a>
                <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                    <Bell class="h-4 w-4" />
                    <span class="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div class="flex-1">
                <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
                    <a
                        href="##"
                        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <!-- <Home class="h-4 w-4" /> -->
                        <House class="h-4 w-4" />
                        <!-- <HousePlus class="h-4 w-4" /> -->
                        Dashboard
                    </a>
                    <a
                        href="##"
                        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <Users class="h-4 w-4" />
                        Customers
                    </a>
                    <a
                        href="##"
                        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <ShoppingCart class="h-4 w-4" />
                        Transactions
                        <Badge
                            class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        >
                            6
                        </Badge>
                    </a>
                    <a
                        href="##"
                        class="bg-muted text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <Package class="h-4 w-4" />

                        Program Settings
                    </a>

                    <!-- <a
                        href="##"
                        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <ChartLine class="h-4 w-4" />
                        Analytics
                    </a> -->
                </nav>
            </div>
            <div class="mt-auto p-4">
                <Card.Root
                    data-x-chunk-name="dashboard-02-chunk-0"
                    data-x-chunk-description="A card with a call to action"
                >
                    <Card.Header class="p-2 pt-0 md:p-4">
                        <Card.Title>Upgrade to Pro</Card.Title>
                        <Card.Description>
                            Unlock all features and get unlimited access to our
                            support team.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
                        <Button size="sm" class="w-full">Upgrade</Button>
                    </Card.Content>
                </Card.Root>
                <Button size="sm" class="w-full" on:click={signOut}
                    >Sign Out</Button
                >
            </div>
        </div>
    </div>
</div>
