import GameCard from "./components/GameCard/GameCard";

export default function Home() {
  const exampleGame: Game = {
    name: "Jason Statham's Big Vacation",
    author: 'Grant Howitt',
    categories: ['comedy', 'one page', 'Grant Howitt'],
    description: 'Can YOU make sure international superstar Jason Statham has a nice holiday, despite the efforts of the WESLEY SNIPER?  Will he end up bored, arrested, sad or dead? Find out in JASON STATHAM’S BIG VACATION.',
    imgPath: 'Nkrffx.png',
    link: 'https://gshowitt.itch.io/jason-stathams-big-vacation',
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Farts. Like from butts.</p>
      <GameCard entry={exampleGame} />
  {/* Card component
  Scheduler component */}
    </main>
  );
}
