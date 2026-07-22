import { motion } from "framer-motion";

export default function Letter({ onNext }) {
 
      return (
    <section className="relative min-h-screen overflow-y-auto bg-gradient-to-b from-[#fff6fb] via-[#fffafc] to-white px-6 py-20">

      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple-200 opacity-30 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-3xl rounded-[35px] border border-pink-100 bg-white/80 p-8 shadow-[0_20px_60px_rgba(255,182,193,.35)] backdrop-blur-xl md:p-12"
      >
        <p className="mb-4 text-center text-sm uppercase tracking-[6px] text-pink-500">
          A Letter From My Heart
        </p>

        <h1 className="mb-10 text-center text-5xl font-bold text-gray-800">
          💌 Happy Birthday
        </h1>

        <div className="space-y-6 text-lg leading-9 text-gray-700">

          <p><strong>To the Love of My Life,</strong></p>

          <p>
            Happy Birthday, my love. ❤️
          </p>

          <p>
            Today is your day, but somehow I feel like I'm the one who received
            the greatest gift all those years ago—the day you came into my life.
          </p>

          <p>
            It's hard to believe that it's been <strong>eight beautiful years</strong>.
            Eight years of laughter, silly arguments, late-night conversations,
            endless memories, dreams, and moments that have shaped who we are today.
            We've grown up together, learned together, and stood beside each other
            through every season of life. Looking back, I realize that every chapter
            of my life has your name written somewhere in it.
          </p>

          <p>
            You have been my best friend, my biggest supporter, my safe place,
            and the person who makes even the ordinary days feel special.
            No matter how difficult life becomes, knowing that you're beside me
            gives me strength I never knew I had.
          </p>

          <p>
            Thank you for loving me on the days when I wasn't easy to love.
            Thank you for believing in me even when I doubted myself.
            Thank you for being patient with me, for making me smile when I wanted
            to cry, and for never giving up on us.
          </p>

          <p>
            People say forever is just a word, but with you,
            <strong> forever feels possible.</strong>
          </p>

          <p>
            I know our journey hasn't always been perfect.
            We've had our ups and downs, moments of distance,
            misunderstandings, and challenges.
            But through it all, we chose each other—again and again.
            And I think that's what real love is.
            It's not about never facing storms; it's about holding each other's hand
            while walking through them.
          </p>

          <p>
            As you celebrate another year of your life,
            my only prayer is that Allah blesses you with endless happiness,
            good health, success, peace, and every dream your heart carries.
            May He protect you from every hardship,
            guide your every step,
            and fill your life with countless blessings.
          </p>

          <p>
            I hope one day we look back at these years and smile,
            knowing that every wait,
            every sacrifice,
            and every challenge brought us closer to the life we've always dreamed of together.
          </p>

          <p>
            I can't wait for the day I get to celebrate your birthday
            not from afar,
            but right beside you,
            waking you up with a smile,
            making your favorite breakfast,
            and reminding you in person how deeply you are loved.
          </p>

          <p>
            Until then...
          </p>

          <p>
            No matter where life takes us,
            no matter how much time passes,
            <strong>you will always have a home in my heart.</strong>
          </p>

          <p>
            You are my favorite person,
            my greatest blessing,
            and the most beautiful chapter of my life.
          </p>

          <p>
            Thank you for these unforgettable eight years.
          </p>

          <p>
            Here's to celebrating this birthday,
            creating more memories,
            achieving our dreams together,
            and spending every birthday after this side by side.
          </p>

          <p className="text-xl font-semibold text-pink-600">
            Happy Birthday, my future husband. ❤️
          </p>

          <p>
            I love you more than words will ever be able to express,
            and I promise to keep choosing you,
            loving you,
            and standing by you—
            for every tomorrow that Allah blesses us with.
          </p>

          <div className="pt-8 text-right">
            <p className="text-lg text-gray-700">
              <strong>Forever yours,</strong>
            </p>

            <p className="mt-2 text-3xl font-bold text-pink-500">
              Your Future Wife ❤️
            </p>
          </div>
</div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={onNext}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 py-4 text-lg font-semibold text-white shadow-xl"
        >
          One Last Surprise 🎂
        </motion.button>

      </motion.div>

    </section>
  );
}