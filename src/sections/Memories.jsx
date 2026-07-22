import { motion } from "framer-motion";

const media = [
  { type: "image", src: "/images/1.jpeg" },
  { type: "image", src: "/images/2.jpeg" },
  { type: "image", src: "/images/3.jpeg" },
  { type: "image", src: "/images/4.jpeg" },
  { type: "image", src: "/images/5.jpeg" },

  { type: "video", src: "/images/044.mp4" }, // <-- Video

  { type: "image", src: "/images/6.jpeg" },
  { type: "image", src: "/images/7.jpeg" },

  { type: "video", src: "/images/06.mp4" }, // <-- Video

  { type: "image", src: "/images/9.jpeg" },
  { type: "image", src: "/images/10.jpeg" },
  { type: "image", src: "/images/11.jpeg" },
];

export default function Memories({ onNext }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-white px-5 py-12">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-5xl font-bold text-pink-500"
      >
        Our Memories ❤️
      </motion.h1>

      <p className="mt-3 text-center text-gray-500">
        Every picture tells our story...
      </p>

      <div className="mt-12 columns-2 gap-4 md:columns-3">
        {media.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="mb-4 break-inside-avoid"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                className="w-full rounded-3xl shadow-xl transition duration-500 hover:scale-105"
              />
            ) : (
              <video
                src={item.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-3xl shadow-xl"
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mx-auto mt-10 block rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-12 py-4 text-white font-semibold shadow-xl"
      >
        Continue ❤️
      </motion.button>
    </section>
  );
}