<script>
    import { Card, Button, Heading, Span, Video } from 'flowbite-svelte';
    //import horn from './french_montana.mp3';
    let noButtonStyle = ''; 
    let currentX = 0; 
    let currentY = 0; 
    const maxRadius = 200; 
    let question = 'Will You Be My Valentine?';

    let showConfetti = false; // Confetti display flag
    let picture = "/rose.jpg";
    let count = 0;

    let audio;

    // Ensure Audio only initializes in the browser
    if (typeof window !== "undefined") {
        audio = new Audio('/french_montana.mp3');
    }

    function honk() {
        if (audio) {
            audio.load();
            audio.play().catch(error => {
                console.error('Failed to play the audio:', error);
            });
        }
    }

    function moveNoButton(event) {
        question = 'Will You Be My Valentine?';
        const button = event.target;
        const buttonRect = button.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const maxX = viewportWidth - buttonRect.width;
        const maxY = viewportHeight - buttonRect.height;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        randomX = Math.max(10, Math.min(randomX, maxX - 10));
        randomY = Math.max(10, Math.min(randomY, maxY - 10));

        noButtonStyle = `position: fixed; left: ${randomX}px; top: ${randomY}px; transition: all 0.5s ease;`;
        changePic();
    }

    function changePic() {
        if (count == 7) {
            count = 0;
        }
        count = count + 1;
        picture = "Memes/" + count + ".jpg";
    }

    var celebrate = "/Memes/congratulations-7600.gif";

    async function handleYesClick() {
        honk()
        // Show confetti for 7 seconds
        question = "I’m so happy, thank you!"
        picture = "/Memes/heart-11534.gif";
        showConfetti = true;

        // Update celebration gif after 3 seconds for better timing
        setTimeout(() => {
            celebrate = "/Memes/heart-12790.gif";
        }, 2400);

        // Hide confetti after 7 seconds
        setTimeout(() => {
            showConfetti = false;
        }, 6000);

        celebrate = "/Memes/congratulations-7600.gif";

    }



</script>

<div class="relative w-full h-screen">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
        <source src="CO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-pink-900 opacity-80 z-1"></div>

    <div class="flex justify-center items-center h-full z-10">
        <div class="animated-card">
            <Card class="bg-white text-gray-800 border-4 border-[#FFD700] relative p-8">
                <Heading
                    tag="h1"
                    class="mb-3 text-pink-800 text-4xl font-extrabold md:text-5xl lg:text-6xl font-dancing-script"
                >
                    <Span gradient class="text-pink-600">Ontha Rapoo</Span> {question}
                </Heading>

                <img
                    class="p-8 rounded-t-lg w-[300px] h-[300px] object-cover"
                    src={picture}
                    alt="product 1"
                />

                <div class="flex justify-between relative">
                    <Button
                        class="w-fit bg-pink-400 text-white hover:bg-red-600 border-2 border-[#FFD700]"
                        on:click={handleYesClick}
                    >
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

    {#if showConfetti}
    <img
        src={celebrate}
        alt="Confetti"
        class="absolute inset-0 w-full h-full object-cover z-20"
    />
    {/if}
</div>

<style global>
    @keyframes moveAround {
    0% {
        transform: translateY(100vh); /* Start from off the bottom of the screen */
    }

    100% {
        transform: translateY(0); /* End at the center */
    }
}


    .animated-card {
        animation: moveAround 4s ease-in-out;
        position: relative;
    }
</style>
