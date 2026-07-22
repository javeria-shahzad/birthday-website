import { motion } from "framer-motion";

export default function Ending() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white px-6">

      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/30 blur-[120px]" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-300/30 blur-[120px]" />

      {/* Floating Hearts */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-16 left-8 text-5xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute right-10 top-24 text-5xl"
      >
        ❤️
      </motion.div>

      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-24 left-12 text-4xl"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-24 right-10 text-5xl"
      >
        ✨
      </motion.div>

      {/* Card */}

      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 w-full max-w-xl rounded-[35px] bg-white/80 p-10 text-center shadow-[0_25px_80px_rgba(255,105,180,.25)] backdrop-blur-xl"
      >

        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold text-pink-500"
        >
          Happy Birthday ❤️
        </motion.h1>

        <p className="mt-8 text-xl leading-10 text-gray-700">

          Thank you for coming into my life.

          <br /><br />

          Thank you for every smile,

          every laugh,

          every memory,

          and every moment.

          <br /><br />

          I hope today becomes one of your

          happiest birthdays ever.

        </p>

        <motion.h2
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-12 text-4xl font-bold text-pink-500"
        >
          I Love You Forever ❤️
        </motion.h2>

        <p className="mt-6 text-gray-500">
          — Yours Always 💖
        </p>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-10 text-6xl"
        >
          🎂
        </motion.div>

      </motion.div>

    </section>
  );
}