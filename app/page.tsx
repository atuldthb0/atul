"use client";
import InfiniteMenu from "@/components/InfiniteMenu";

const items = [
  {
    image: "/apps/Aurum.png",
    link: "https://atul.thebigocommunity.org",
    title: "Aurum",
    description: "Redirect. Transform. Rise.",
  },
  {
    image: "/apps/tboc.png",
    link: "https://tboc.work",
    title: "Tboc.",
    description: "The Big O Company. For your Big Dreams!",
  },
  {
    image: "/atul/Ati.jpg",
    link: "https://atul.thebigocommunity.org",
    title: "Ati",
    description: "The original legend!",
  },
  {
    image: "/atul/Ati.png",
    link: "https://atul.thebigocommunity.org",
    title: "Ati",
    description: "Same vibe, transparent edition!",
  },
  {
    image: "/atul/Atl.jpg",
    link: "https://atul.thebigocommunity.org",
    title: "Ati",
    description: "They are beautiful because you are.",
  },
  {
    image: "/atul/atulya.png",
    link: "https://atul.thebigocommunity.org",
    title: "Atulya",
    description: "The Sanskrit upgrade!",
  },
  {
    image: "/atul/goldbeard.png",
    link: "https://atul.thebigocommunity.org",
    title: "Goldbeard",
    description: "Pirate by day, Pirate by night!",
  },
  {
    image: "/atul/IMG_2561.JPG",
    link: "https://atul.thebigocommunity.org",
    title: "atul",
    description: "Late night Shoot.",
  },
  {
    image: "/atul/IMG_2567.JPG",
    link: "https://atul.thebigocommunity.org",
    title: "Moment #2567",
    description: "Debugging at 3 AM!",
  },
  {
    image: "/atul/IMG_2607.JPG",
    link: "https://atul.thebigocommunity.org",
    title: "Moment",
    description: "PM asks for small change!",
  },
  {
    image: "/atul/IMG_20260207_024035.jpg",
    link: "https://atul.thebigocommunity.org",
    title: "Future Memory",
    description: "From the future!",
  },
  {
    image: "/atul/IMG20241217102404.jpg",
    link: "https://atul.thebigocommunity.org",
    title: "Atul Raj",
    description: "Founder who finds what your soul always needed.",
  },
  {
    image: "/atul/Simba 2.jpg",
    link: "https://atul.thebigocommunity.org",
    title: "Simba",
    description: "The sequel!",
  },
  {
    image: "/atul/Simba.JPG",
    link: "https://atul.thebigocommunity.org",
    title: "Simba",
    description: "Respect the legend!",
  },
  {
    image: "/atul/Simba.jpg",
    link: "https://atul.thebigocommunity.org",
    title: "Simba",
    description: "King of the the Jungle!",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full">
      <InfiniteMenu items={items} scale={1} />
    </div>
  );
}
