<script>
    import { Button } from "$lib/components/ui/button/index.js";
    import WordsFadeIn from "$lib/components/WordsFadeIn.svelte";
    import BlurFade from "$lib/components/BlurFade.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import logo from "$lib/images/logo-rewardify-2.png";
    import productFrame from "$lib/images/mockup.svg";
    import seoImage from "$lib/images/seo-home.png";
    import rewardifyIcon from "$lib/images/icon-rewardify.png";
    import BrowserFrame from "$lib/components/BrowserFrame.svelte";
    import Navigation from "./Navigation.svelte";
    import Example from "$lib/components/Example.svelte";
    // import Home from "lucide-svelte/icons/home";
    // import { LineChart } from "lucide-svelte";
</script>

<div class="flex w-full flex-col">
    <SEO
        title="Rewardify | Digital Loyalty Platform for Small Businesses"
        description="Rewardify helps small brick-and-mortar businesses launch no-code, no-card digital loyalty programs in minutes. Customers earn rewards automatically using their credit cards at participating merchants."
        keywords="Digital loyalty platform, No-code loyalty program, Small business loyalty solution, Loyalty program for brick-and-mortar, Credit card loyalty rewards, Automatic customer rewards, No loyalty card required, Easy loyalty platform for merchants"
        siteName="getrewardiy.com"
        {logo}
        imageURL={seoImage}
    ></SEO>
    <main class="relative overflow-hidden bg-pink-50 dark:bg-gray-800">
        <header
            class="z-30 flex justify-between items-center w-full px-12 py-4 max-h-32 shadow-2xlß border-b-4 border-pink-200"
        >
            <div
                class=" font-black text-gray-800 uppercase dark:text-white flex items-center hover:scale-105 duration-500"
            >
                <img src={rewardifyIcon} class="w-16 m-auto" alt="product" />
                <span class="lowercase text-4xl xl:text-5xl select-none brand"
                    >rewardify</span
                >
            </div>
            <div class="flex items-center">
                <nav
                    class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex"
                >
                    <!-- <a href="#" class="flex px-6 py-2"> Home </a> -->
                    <!-- <a
                        href="#"
                        class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                    >
                        Launching soon - stay tuned!
                    </a> -->
                    <!-- <Button
                        variant="outline"
                        class="hover:bg-pink-500  hover:text-white text-pink-500 border-2 border-pink-500 text-xl p-6"
                        >Sign up for waitlist</Button
                    > -->
                    <Button
                        variant="outline"
                        class="hover:bg-pink-500  hover:text-white text-pink-500 font-bold border-2 border-pink-400 text-lg lg:text-xl p-6  duration-500 ease-in-out "
                        >⏱️ Launching soon - stay tuned!</Button
                    >
                    <!-- <a href="#" class="flex px-6 py-2"> Watch </a>
                        <a href="#" class="flex px-6 py-2"> Product </a>
                        <a href="#" class="flex px-6 py-2"> Contact </a>
                        <a href="#" class="flex px-6 py-2"> Carrer </a> -->
                </nav>
                <!-- <button class="flex flex-col ml-4 lg:hidden">
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button> -->
            </div>
        </header>
        <section
            class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800 p-8 xl:px-12"
        >
            <div
                class="grid gap-16 grid-cols-1 xl:grid-cols-4 items-center mx-auto"
            >
                <div
                    class="relative z-20 flex flex-col col-span-4 xl:col-span-2"
                >
                    <!-- <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                    </span> -->
                    <!-- <h1
                        class="max-w-3xl flex flex-col text-5xl lg:text-6xl xl:text-7xl uppercase font-black leading-none text-gray-800 dark:text-white"
                    >
                        Launch Digital Loyalty in Minutes
                    </h1> -->
                    <!-- <BlurFade delay={0.75}>
                        <h1
                            class="max-w-3xl flex flex-col text-5xl lg:text-6xl xl:text-7xl uppercase font-black leading-none text-gray-800 dark:text-white"
                        >
                            Launch Digital Loyalty in Minutes
                        </h1>
                    </BlurFade> -->
                    <WordsFadeIn
                        class="text-left text-4xl md:text-4xl lg:text-5xl xl:text-6xl brand selection:bg-pink-500 selection:text-white lg:max-w-lg"
                        words="Launch Digital Loyalty in Minutes"
                        delay={0.25}
                    ></WordsFadeIn>

                    <br />
                    <WordsFadeIn
                        words="No code & no cards"
                        class="text-white bg-clip-content rounded-r-full text-left text-2xl md:text-2xl lg:text-3xl xl:text-4xl selection:bg-pink-500 selection:text-white bg-pink-500 max-w-xs"
                        delay={0.25}
                    ></WordsFadeIn>

                    <br />
                    <p
                        class="selection:bg-pink-500 selection:text-white sm:text-base lg:text-lg xl:text-xl text-gray-700 dark:text-white font-quattro max-w-xl"
                    >
                        <span class="">
                            Rewardify empowers small brick-and-mortar businesses
                            to create and manage digital loyalty programs
                            effortlessly.
                        </span>
                        <br />
                        <br />
                        Set up your loyalty program in minutes, and let your customers
                        earn rewards automatically through their credit card purchases—no
                        loyalty cards needed.
                        <br />
                        <br />
                        <span
                            class="underline underline-offset-8 decoration-2 decoration-solid decoration-pink-500 shadow-xl shadow-fuchsia-500/50"
                            >Simple for businesses, seamless for consumers.</span
                        >
                    </p>
                    <br />
                    <div class="flex gap-8 flex-col xl:flex-row mt-8">
                        <!-- <Button
                            class="bg-pink-500 hover:bg-pink-500 text-xl p-6"
                            >Sign up for waitlist</Button
                        > -->

                        <Button
                            variant="outline"
                            class="max-w-lg hover:bg-pink-500 duration-500 ease-in-out  hover:text-white text-pink-500 border-2 border-pink-500 font-bold text-base md:text-lg lg:text-xl p-6 shadow-2xl shadow-fuchsia-500/50"
                            >⏱️ Launching soon - stay tuned!</Button
                        >
                        <!-- <a
                            href="#"
                            class="p-3 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
                        >
                            Sign up for waitlist
                        </a>

                        <a
                            href="#"
                            class="hidden xl:flex p-3 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                        >
                            Launching soon - stay tuned!
                        </a> -->
                    </div>
                </div>
                <div
                    class="flex relative col-span-4 xl:col-span-2 mt-8 lg:mt-0"
                >
                    <BlurFade delay={0.25}>
                        <BrowserFrame>
                            <!-- <div
                            class="flex justify-center border-4 border-yellow-500"
                        >
                            <Example />
                        </div> -->

                            <!-- <div> -->
                            <!-- <Navigation class="bg-pink-50 dark:bg-gray-800" /> -->
                            <!-- </div> -->
                            <!-- <iframe
                                width="750"
                                height="500"
                                class=""
                                src="https://getrewardify.com/"
                                title="W3Schools Free Online Web Tutorials"
                            ></iframe> -->
                            <!-- <object
                                title="Rewardify"
                                type="text/html"
                                data="https://getrewardify.com/"
                                width="500"
                                height="500"
                            ></object> -->
                            <img
                                src={productFrame}
                                class="m-auto rounded-b-lg"
                                alt="product"
                            />
                        </BrowserFrame>
                    </BlurFade>
                </div>
                <br />
                <!-- <p>powered by</p> -->
            </div>
        </section>
        <!-- <section>
            <div class=" flex p-8">
                <BrowserFrame>
                    <Example />
                </BrowserFrame>
            </div>
        </section> -->
    </main>
</div>
