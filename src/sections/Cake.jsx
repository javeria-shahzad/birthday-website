import { motion } from "framer-motion";

export default function Cake({ onNext }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white px-6">

      {/* Background */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-300/30 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-300/30 blur-[120px]" />

      {/* Floating Hearts */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-10 top-16 text-5xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-10 top-20 text-4xl"
      >
        ✨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-pink-500">
          Make A Wish 🎂
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Close your eyes...
          <br />
          Make your biggest wish...
          <br />
          I pray every one of them comes true ❤️
        </p>

        {/* Cake */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative"
          >
            {/* Candle */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-16">
              <div className="mx-auto h-12 w-2 rounded-full bg-pink-300"></div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                }}
                className="mx-auto -mt-1 h-6 w-6 rounded-full bg-yellow-300 blur-[2px]"
              />
            </div>

            {/* Cake */}
            <div className="relative">
              {/* Icing */}
              <div className="absolute -top-3 h-10 w-72 rounded-full bg-pink-100 z-30"></div>

              {/* Drips */}
              <div className="absolute left-6 top-4 h-10 w-4 rounded-full bg-pink-100 z-40"></div>
              <div className="absolute left-20 top-4 h-14 w-5 rounded-full bg-pink-100 z-40"></div>
              <div className="absolute left-40 top-4 h-8 w-4 rounded-full bg-pink-100 z-40"></div>
              <div className="absolute left-56 top-4 h-12 w-5 rounded-full bg-pink-100 z-40"></div>

              {/* Cake Body */}
              <div className="h-44 w-72 rounded-[40px] bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 shadow-[0_25px_70px_rgba(255,100,170,.45)]"></div>

              {/* Plate */}
              <div className="mx-auto mt-2 h-5 w-80 rounded-full bg-pink-200 opacity-60 blur-sm"></div>
            </div>

            {/* Decorations */}
            <div className="absolute left-6 top-8 text-3xl">🌸</div>
            <div className="absolute right-8 top-10 text-3xl">💖</div>
            <div className="absolute bottom-8 left-12 text-2xl">✨</div>
            <div className="absolute bottom-8 right-12 text-2xl">🎀</div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="mt-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-12 py-4 text-lg font-semibold text-white shadow-xl"
        >
          Final Surprise ❤️
        </motion.button>
      </motion.div>
    </section>
  );
}