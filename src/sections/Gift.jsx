import { motion } from "framer-motion";
import { useState } from "react";

export default function Gift({ onNext }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onNext();
    }, 2500);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white">

      {/* Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-300/30 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-300/30 blur-[120px]" />

      {/* Floating Hearts */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-8 top-20 text-5xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-10 top-28 text-4xl"
      >
        ✨
      </motion.div>

      <div className="text-center">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-5xl font-bold text-pink-500"
        >
          I Have Something
          <br />
          Special For You
        </motion.h2>

        {/* Gift */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={handleOpen}
          className="relative mx-auto h-64 w-64 cursor-pointer"
        >

          {/* Lid */}

          <motion.div
            animate={
              opened
                ? {
                    rotate: -25,
                    y: -70,
                    x: -25,
                  }
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: .8,
              repeat: opened ? 0 : Infinity,
            }}
            className="absolute top-0 z-20 h-14 w-64 rounded-xl bg-gradient-to-r from-red-500 to-pink-500"
          />

          {/* Box */}

          <div className="absolute bottom-0 h-52 w-64 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-2xl">

            {/* Ribbon */}

            <div className="absolute left-1/2 h-full w-8 -translate-x-1/2 bg-yellow-300"></div>

            <div className="absolute top-1/2 h-8 w-full -translate-y-1/2 bg-yellow-300"></div>

          </div>

          {!opened && (
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="absolute inset-0 flex items-center justify-center text-7xl"
            >
              🎁
            </motion.div>
          )}

          {opened && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -180 }}
                transition={{ duration: 1.5 }}
                className="absolute left-24 text-6xl"
              >
                ❤️
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 0, x: -20 }}
                animate={{ opacity: 1, y: -150, x: -80 }}
                transition={{ duration: 1.6 }}
                className="absolute text-5xl"
              >
                💖
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 0, x: 20 }}
                animate={{ opacity: 1, y: -150, x: 80 }}
                transition={{ duration: 1.6 }}
                className="absolute right-0 text-5xl"
              >
                ✨
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .5 }}
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap text-3xl font-bold text-pink-500"
              >
                Happy Birthday My Love ❤️
              </motion.h3>
            </>
          )}
        </motion.div>

        {!opened && (
          <motion.p
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-12 text-lg text-pink-500"
          >
            Tap the gift 🎁
          </motion.p>
        )}

      </div>

    </section>
  );
}