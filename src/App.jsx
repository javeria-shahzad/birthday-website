import { useState } from "react";
import Hero from "./sections/Hero";
import Gift from "./sections/Gift";
import Memories from "./sections/Memories";
import Reasons from "./sections/Reasons";
import Cake from "./sections/Cake";
import Letter from "./sections/Letter";
import Ending from "./sections/Ending";
import MusicPlayer from "./components/MusicPlayer";
export default function App() {
  const [page, setPage] = useState("hero");

  return (
    <>
      {page==="hero" && <Hero onOpen={()=>setPage("gift")} />}

{page==="gift" && <Gift onNext={()=>setPage("memories")} />}

{page==="memories" && <Memories onNext={()=>setPage("reasons")} />}

  {page==="reasons" && (
    <Reasons onNext={()=>setPage("letter")} />
)}
{page === "cake" && (
  <Cake onNext={() => setPage("ending")} />
)}
{page === "letter" && (
  <Letter onNext={() => setPage("cake")} />


)}

 {page === "ending" && <Ending />}

 <>
  <MusicPlayer />

  {page === "hero" && <Hero onOpen={() => setPage("gift")} />}
  {page === "gift" && <Gift onNext={() => setPage("reasons")} />}
  {/* Continue with your other pages */}
</>
    </>
  );
}