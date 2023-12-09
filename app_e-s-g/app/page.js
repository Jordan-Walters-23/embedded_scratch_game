import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Embedded Scratch Game</h1>
      <iframe
        src="https://scratch.mit.edu/projects/937814439/embed"
        allowtransparency="true"
        width="485"
        height="402"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>{" "}
    </main>
  );
}

// Create game that allows you to enter number of point erned before game starts.
// Number calculated in app based on minutes spent reading.
