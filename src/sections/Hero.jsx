// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-white">

//       {/* Background Glow */}
//       <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-300 opacity-30 blur-[120px]" />
//       <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-300 opacity-30 blur-[120px]" />

//       {/* Floating Hearts */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//         className="absolute left-10 top-20 text-5xl"
//       >
//         💖
//       </motion.div>

//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//         className="absolute right-10 top-40 text-4xl"
//       >
//         🎈
//       </motion.div>

//       <motion.div
//         animate={{ rotate: [-5, 5, -5] }}
//         transition={{ repeat: Infinity, duration: 3 }}
//         className="absolute bottom-24 left-10 text-4xl"
//       >
//         🎁
//       </motion.div>

//       <motion.div
//         animate={{ y: [0, -15, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//         className="absolute bottom-20 right-10 text-5xl"
//       >
//         🌸
//       </motion.div>

//       {/* Main Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="z-10 w-[92%] max-w-md rounded-[35px] bg-white/70 p-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(255,105,180,.25)]"
//       >
//         <p className="text-center text-xs tracking-[6px] uppercase text-pink-500">
//           FOR MY BOO BOO ❤️
//         </p>

//         <h1 className="mt-6 text-center text-6xl font-extrabold leading-none text-gray-800">
//           Happy
//           <br />
//           Birthday
//         </h1>

//         <p className="mt-8 text-center text-lg leading-8 text-gray-600">
//           Today is all about you 💖
//           <br />
//           I made something magical
//           <br />
//           just for you.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-10 w-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 py-5 text-lg font-semibold text-white shadow-2xl"
//         >
//           Open Your Birthday Gift 🎁
//         </motion.button>
//       </motion.div>

//       {/* Bottom Decoration */}
//       <div className="absolute bottom-8 text-2xl opacity-70">
//         🌸 ✨ 💖 ✨ 🌸
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

export default function Hero({ onOpen }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-300/40 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple-300/40 blur-[120px]" />

      {/* Floating Hearts */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-8 top-16 text-4xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute right-10 top-24 text-5xl"
      >
        🎈
      </motion.div>

      <motion.div
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-12 bottom-24 text-5xl"
      >
        🎁
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-10 bottom-24 text-4xl"
      >
        🌸
      </motion.div>

      {/* Main Card */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-[92%] max-w-md rounded-[35px] border border-white/40 bg-white/70 p-10 shadow-[0_25px_80px_rgba(255,105,180,.25)] backdrop-blur-xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs uppercase tracking-[6px] text-pink-500"
        >
          FOR MY BOO BOO ❤️
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-6xl font-extrabold leading-none text-gray-800"
        >
          Happy
          <br />
          Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-lg leading-8 text-gray-600"
        >
          Today is all about you ❤️
          <br />
          I made something magical
          <br />
          just for you.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 py-4 text-lg font-semibold text-white shadow-xl"
        >
          Open Your Birthday Gift 🎁
        </motion.button>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-6 text-center text-sm text-gray-500"
        >
          ✨ Tap the button to begin your surprise ✨
        </motion.p>
      </motion.div>

      {/* Bottom Hearts */}
      <div className="absolute bottom-8 flex gap-2 text-2xl opacity-70">
        💖 🌸 ✨ 💕 🎀 ✨ 🌸 💖
      </div>
    </section>
  );
}