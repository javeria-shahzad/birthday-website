import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const reasons = [
  "I love you because you make me feel safe.",
  "I love you because you always believe in me.",
  "I love you because your smile can brighten my darkest day.",
  "I love you because you never stop encouraging me.",
  "I love you because you know me better than anyone else.",
  "I love you because you make ordinary moments unforgettable.",
  "I love you because you've stayed by my side through every chapter of these last eight years.",
  "I love you because you accept me with all my imperfections.",
  "I love you because your hugs feel like home.",
  "I love you because your happiness means so much to me.",
  "I love you because you always know how to make me laugh.",
  "I love you because you're kind, not just to me, but to everyone around you.",
  "I love you because you're patient with me.",
  "I love you because you inspire me to become a better person.",
  "I love you because you respect my dreams.",
  "I love you because you make me feel important.",
  "I love you because you remember the little things that matter.",
  "I love you because you never let me feel alone.",
  "I love you because you listen to me, even when I don't make sense.",
  "I love you because your voice instantly calms me.",
  "I love you because you're my best friend.",
  "I love you because we can laugh over the silliest things together.",
  "I love you because even after all these years, you still make my heart race.",
  "I love you because you make me feel loved every single day.",
  "I love you because you're honest with me.",
  "I love you because you're my biggest comfort during difficult times.",
  "I love you because you never stop caring.",
  "I love you because you make me believe in forever.",
  "I love you because you understand me without me saying a word.",
  "I love you because you're always worth waiting for.",
  "I love you because you bring peace into my life.",
  "I love you because you've taught me what true love really means.",
  "I love you because you make me proud to call you mine.",
  "I love you because you've been part of my happiest memories.",
  "I love you because you make me feel beautiful just by the way you look at me.",
  "I love you because you make every goodbye worth the next hello.",
  "I love you because you're my favorite notification.",
  "I love you because every conversation with you feels special.",
  "I love you because I can always be myself around you.",
  "I love you because you've seen every version of me and still chose to stay.",
  "I love you because your love gives me strength.",
  "I love you because you're my answered prayer.",
  "I love you because you make my future feel exciting.",
  "I love you because I trust you with my whole heart.",
  "I love you because life is simply better with you in it.",
  "I love you because you've loved me through my good days and my bad ones.",
  "I love you because you're not just my fiancé—you are my home.",
  "I love you because every day with you is another reason to be grateful.",
  "I love you because after eight years, I still fall in love with you all over again.",
  "I love you because you're you, and there will never be another person in this world who could ever take your place in my heart."
];

export default function Reasons({ onNext }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < reasons.length - 1) {
      setIndex(index + 1);
    } else {
      onNext();
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        <h2 className="text-center text-pink-500 text-4xl font-bold mb-2">
          ❤️ 50 Reasons Why I Love You ❤️
        </h2>

        <p className="text-center text-gray-500 mb-8">
          {index + 1} / {reasons.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="rounded-[35px] bg-white shadow-2xl p-10 min-h-[320px] flex flex-col justify-center"
          >
            <div className="text-6xl text-center mb-6">
              💖
            </div>

            <p className="text-center text-xl leading-9 text-gray-700">
              {reasons[index]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}

        <div className="mt-8 flex flex-col gap-4">

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={next}
            className="w-full rounded-full bg-pink-500 py-4 text-lg font-semibold text-white shadow-xl"
          >
            {index === reasons.length - 1 ? "Continue ❤️" : "Next ❤️"}
          </motion.button>

          {/* {index === reasons.length - 1 && (
            // <motion.button
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   whileHover={{ scale: 1.04 }}
            //   whileTap={{ scale: 0.96 }}
            //   onClick={onNext}
            //   className="w-full rounded-full border-2 border-pink-500 bg-white py-4 text-lg font-semibold text-pink-500 shadow-lg"
            // >
            //   Read My Letter 💌
            // </motion.button>
          )} */}
<motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onNext}
              className="w-full rounded-full border-2 border-pink-500 bg-white py-4 text-lg font-semibold text-pink-500 shadow-lg"
            >
              Read My Letter 💌
            </motion.button>
        </div>

      </div>

    </section>
  );
}