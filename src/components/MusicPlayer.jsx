import { useEffect, useRef, useState } from "react";
import music from "../assets/music1/birthday.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const startMusic = () => {
      audio.play().then(() => {
        setPlaying(true);
      }).catch(() => {});
    };

    document.addEventListener("click", startMusic, { once: true });

    return () => {
      document.removeEventListener("click", startMusic);
    };
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 rounded-full bg-pink-500 p-3 text-white shadow-xl"
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}