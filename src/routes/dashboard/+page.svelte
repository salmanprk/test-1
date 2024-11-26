<script>
    // import Button from "$lib/components/ui/button/button.svelte";
    import Navigation from "../Navigation.svelte";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Tabs from "$lib/components/ui/tabs";

    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    // import { Tabs } from "$lib/components/ui/tabs";
    Tabs;
    // Button
    let dialogOpen = false;
    let tabValue = "account";
</script>

<div class="grid grid-cols-12">
    <Navigation className=" col-span-2" />

    <div class=" col-span-10">
        <Button
            on:click={() => {
                dialogOpen = !dialogOpen;
            }}>Create</Button
        >

        <Dialog.Root bind:open={dialogOpen}>
            <Dialog.Trigger />

            <Dialog.Content class="sm:max-w-[750px]">
                <Tabs.Root value={tabValue} class="w-[400px]">
                    <Tabs.List>
                        <Tabs.Trigger
                            disabled={tabValue != "account"}
                            value="account">Free Items</Tabs.Trigger
                        >
                        <Tabs.Trigger
                            disabled={tabValue != "rules"}
                            value="rules">Rules</Tabs.Trigger
                        >
                        <Tabs.Trigger
                            disabled={tabValue != "dates"}
                            value="dates">Dates</Tabs.Trigger
                        >
                        <Tabs.Trigger
                            disabled={tabValue != "preview"}
                            value="preview">Preview</Tabs.Trigger
                        >
                    </Tabs.List>
                    <Tabs.Content value="account" class="p-2">
                        <div>
                            <h3 class="">Edit profile</h3>
                            <p class="">
                                Make changes to your profile here. Click save
                                when you're done.
                            </p>
                        </div>
                        <div class="grid gap-4 py-4">
                            <div class="flex flex-col gap-4">
                                <Label for="name" class="text-left">Name</Label>
                                <Input
                                    id="name"
                                    value="Pedro Duarte"
                                    class="col-span-3"
                                />
                            </div>
                            <div class="flex flex-col gap-4">
                                <Label for="photo" class="text-left"
                                    >Photo</Label
                                >
                                <Input
                                    id="photo"
                                    class="col-span-3"
                                    type="file"
                                />
                            </div>
                        </div>
                        <Dialog.Footer>
                            <Button
                                type="submit"
                                on:click={() => {
                                    tabValue = "rules";
                                }}>Next</Button
                            >
                        </Dialog.Footer>
                    </Tabs.Content>
                    <Tabs.Content value="rules" class="p-2">
                        <div>
                            <h3 class="">Edit Rules</h3>
                            <p class="">
                                Make changes to your profile here. Click save
                                when you're done.
                            </p>
                        </div>
                        <Dialog.Footer>
                            <Button
                                on:click={() => {
                                    tabValue = "account";
                                }}>Back</Button
                            >
                            <Button
                                type="submit"
                                on:click={() => {
                                    tabValue = "dates";
                                }}>Next</Button
                            >
                        </Dialog.Footer>
                    </Tabs.Content>
                    <Tabs.Content value="dates" class="p-2">
                        <div>
                            <h3 class="">Edit Dates</h3>
                            <p class="">
                                Make changes to your profile here. Click save
                                when you're done.
                            </p>
                        </div>
                        <Dialog.Footer>
                            <Button
                                on:click={() => {
                                    tabValue = "rules";
                                }}>Back</Button
                            >
                            <Button
                                type="submit"
                                on:click={() => {
                                    tabValue = "preview";
                                }}>Next</Button
                            >
                        </Dialog.Footer>
                    </Tabs.Content>
                    <Tabs.Content value="preview" class="p-2">
                        <div>
                            <h3 class="">Edit Preview</h3>
                            <p class="">
                                Make changes to your profile here. Click save
                                when you're done.
                            </p>
                        </div>
                        <Dialog.Footer>
                            <Button
                                on:click={() => {
                                    tabValue = "dates";
                                }}>Back</Button
                            >
                            <Button type="submit">Submit</Button>
                        </Dialog.Footer>
                    </Tabs.Content>
                </Tabs.Root>
            </Dialog.Content>
        </Dialog.Root>
    </div>
</div>
