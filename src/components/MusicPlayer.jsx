// import { useEffect, useRef, useState } from "react";
// import music from "../assets/music1/birthday.mp3";

// export default function MusicPlayer() {
//   const audioRef = useRef(null);
//   const [playing, setPlaying] = useState(false);

//   useEffect(() => {
//     const audio = audioRef.current;

//     const startMusic = () => {
//       audio.play().then(() => {
//         setPlaying(true);
//       }).catch(() => {});
//     };

//     document.addEventListener("click", startMusic, { once: true });

//     return () => {
//       document.removeEventListener("click", startMusic);
//     };
//   }, []);

//   const toggleMusic = () => {
//     if (playing) {
//       audioRef.current.pause();
//       setPlaying(false);
//     } else {
//       audioRef.current.play();
//       setPlaying(true);
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop>
//         <source src={music} type="audio/mp3" />
//       </audio>

//       <button
//         onClick={toggleMusic}
//         className="fixed top-5 right-5 z-50 rounded-full bg-pink-500 p-3 text-white shadow-xl"
//       >
//         {playing ? "🔊" : "🔇"}
//       </button>
//     </>
//   );
// }


import { useEffect, useRef, useState } from "react";
import music from "../assets/music1/birth.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const startMusic = () => {
      if (!audio) return;

      // Start from 1:35 (95 seconds)
      audio.currentTime = 95;

      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {});
    };

    document.addEventListener("click", startMusic, { once: true });

    return () => {
      document.removeEventListener("click", startMusic);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // If music hasn't started yet, begin at 1:35
      if (audio.currentTime < 1) {
        audio.currentTime = 95;
      }

      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={music} type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 rounded-full bg-pink-500 p-3 text-white shadow-xl transition hover:scale-110"
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}