<script>
    import { Card, Button, Heading, Span, Video } from 'flowbite-svelte';

    let noButtonStyle = ''; // To dynamically set the "No" button's style
    let currentX = 0; // Current X position of the button
    let currentY = 0; // Current Y position of the button
    const maxRadius = 200; // Maximum movement radius in pixels

    function moveNoButton(event) {
        const randomX = currentX + (Math.random() * maxRadius - maxRadius / 2);
        const randomY = currentY + (Math.random() * maxRadius - maxRadius / 2);
        currentX = randomX;
        currentY = randomY;
        noButtonStyle = `position: absolute; left: ${randomX}px; top: ${randomY}px; transition: all 0.3s ease;`;
    }
</script>

<div class="relative w-full h-screen">
    <!-- Video Background -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
        <source src="OR_V.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <!--<Video src="/videos/flowbite.mp4" autoplay controls trackSrc="flowbite.mp4" />-->
    <!-- Pink Tint Overlay -->
    <div class="absolute inset-0 bg-pink-900 opacity-80 z-1"></div>

    <!-- Card Content -->
    <div class="flex justify-center items-center h-full z-10">
        <div class="animated-card">
            <Card class="bg-white text-gray-800 border-4 border-[#FFD700] relative p-8">
                <Heading
                    tag="h1"
                    class="mb-3 text-pink-800 text-4xl font-extrabold md:text-5xl lg:text-6xl font-dancing-script"
                >
                    <Span gradient class="text-pink-600">Ontha Rapoo</Span> Will You Be My Valentine?
                </Heading>

                <img
                    class="p-8 rounded-t-lg"
                    src="https://www.hdwallpapersfreedownload.com/uploads/large/latest-wallpapers/happy-valentines-day-text-pink-hearts-collection-graphic-cute-hd-wallpaper.jpg"
                    alt="product 1"
                />

                <div class="flex justify-between relative">
                    <Button class="w-fit bg-pink-400 text-white hover:bg-red-600 border-2 border-[#FFD700]">
                        YES
                    </Button>

                    <Button
                        class="w-fit bg-pink-400 text-white hover:bg-red-600 border-2 border-[#FFD700]"
                        on:mouseenter={moveNoButton}
                        on:click={moveNoButton}
                        style={noButtonStyle}
                    >
                        NO
                    </Button>
                </div>
            </Card>
        </div>
    </div>
</div>

<style global>
    @keyframes moveAround {
        0% {
            transform: translate(-1000px, 0);
        }

        50%{
            transform: translate(300px, 0);
        }

        100% {
            transform: translate(0, 0);
        }
    }

    .animated-card {
        animation: moveAround 6s ease-in-out;
        position: relative;
    }
</style>
