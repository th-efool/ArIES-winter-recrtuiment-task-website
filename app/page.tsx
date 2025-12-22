"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ================= THEME TOKENS =================
// Change these values to update colors site-wide
const theme = {
  bgGradient: "bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950",

  textPrimary: "text-zinc-100",
  textSecondary: "text-zinc-400",
  textMuted: "text-zinc-500",

  accentPrimary: "text-indigo-300",
  accentSecondary: "text-violet-300",

  borderSubtle: "border-zinc-800",
  borderHover: "hover:border-indigo-400/50",

  cardBg: "bg-zinc-900/80",
  panelBg: "bg-zinc-900/70",

  canvasGradient: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10",
};

// -------- DATA (PRESERVED, NOT SIMPLIFIED) --------
const projects = [
  {
    title: "First-Person Shooter",
    track: "Core 3D Gameplay",
    engine: ["Unity", "Unreal"],
    difficulty: "Beginner+",
    specialties: [
      "Character Animations",
      "Weapon Logic",
      "UI & VFX",
      "Aim Down Sight Logic",
      "Target AI",
    ],
    submission: "Report + Short demo video + Github Link",
    image: "https://i.postimg.cc/XJGsDz9Z/Qjk_PCp_Mn_TWA_HD.jpg",
    playlists: {
      Unreal:
        "https://www.youtube.com/playlist?list=PLCDWnguFQzxioiq3m7bsPxGdQKI1B_mgY",
      Unity:
        "https://www.youtube.com/playlist?list=PLtLToKUhgzwm1rZnTeWSRAyx9tl8VbGUE",
    },
  },
  {
    title: "First-Person Parkour",
    track: "Core 3D Gameplay",
    engine: ["Unity"],
    difficulty: "Beginner+",
    specialties: ["Wall-running", "Sliding", "Momentum-based movement"],
    submission: "Report + Short demo video + Github Link",
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2008/11/13/1226608373848/mirror_476.jpg?width=620&dpr=2&s=none&crop=none",
    playlists: {
      Unity:
        "https://www.youtube.com/playlist?list=PLCDWnguFQzxjqfu9MdLs_mx3mGaXWLGha",
    },
  },
  {
    title: "2D Platformer",
    track: "2D Fundamentals",
    engine: ["Unity"],
    difficulty: "Beginner",
    specialties: ["Tight jump feel", "Enemy patterns", "Level flow"],
    submission: "Report + Short demo video + Github Link",
    image:
      "https://assets.nintendo.eu/image/upload/f_auto/q_auto/v1626147565/NAL/Articles/The%20Metamorphosis%20of%20Hollow%20Knight/Colosseum-screen.png",
    playlists: {
      Unity:
        "https://www.youtube.com/playlist?list=PLgOEwFbvGm5o8hayFB6skAfa8Z-mw4dPV",
    },
  },
  {
    title: "Horror Game",
    track: "Atmosphere & Systems",
    engine: ["Unity", "Unreal"],
    difficulty: "Beginner+",
    specialties: [
      "Tension-driven lighting",
      "Environmental storytelling",
      "Chase / scare sequences",
    ],
    submission: "Report + Short demo video + Github Link",
    image:
      "https://hitmarker.net/imager/news/1286324/1750691101_b0464c6958.webp",
    playlists: {
      Unreal:
        "https://www.youtube.com/playlist?list=PLCDWnguFQzxj_Vjko31jemQZr06dpvzc8",
      Unity:
        "https://www.youtube.com/playlist?list=PLZ1b66Z1KFKiBTivzyPkktSPskftCUFeL",
    },
  },
  {
    title: "AR Solar System",
    track: "AR / Experimental",
    engine: ["Unity + AR"],
    difficulty: "Beginner+",
    specialties: ["Planet scaling", "Orbital motion", "Interactive labels"],
    submission: "Report + Short demo video + Github Link",
    image:
      "https://play-lh.googleusercontent.com/3oFggpslsXRkkLHk5vUBZE-PhmTWrwpeyTwcpRw1ziTUZoqoN9_2-aCyAwLOxpwsYw=w5120-h2880-rw",
    playlists: {
      Unity:
        "https://www.youtube.com/playlist?list=PLelxslA7KZJ91vHaJlYLpxi9Vcy6oCWQr",
    },
  },
  {
    title: "AR Dart Board",
    track: "AR / Experimental",
    engine: ["Unity + AR"],
    difficulty: "Beginner+",
    specialties: [
      "Real-world surface placement",
      "Throw interaction",
      "Score feedback UI",
    ],
    submission: "Report + Short demo video + Github Link",
    image:
      "https://segaarcade.com/cache/1000-562/7e176f5928847eddc876a175c22d3bb2/AR_Darts_-_Player_taking_a_shot.jpg",
    playlists: {
      Unity:
        "https://www.youtube.com/playlist?list=PLlMnu7Ip_pGZLApIg0zXGuFuZj9MaudmT",
    },
  },
  {
    title: "Open Track",
    track: "Anything Goes",
    engine: ["Any"],
    difficulty: "Beginner",
    specialties: [
      "Any genre",
      "Any engine",
      "Any interaction style",
      "Any idea you care about",
    ],
    submission: "Report + Short demo video + Github Link",
    image:
      "https://i5.walmartimages.com/seo/PlayStation-Video-Game-Box-Collage-1000-Piece-Jigsaw-Puzzle_204931ba-f443-426a-9d1e-543b703bb44e.9631976edb7341281c9565f95b4bc8c8.jpeg",
    playlists: {
      Unreal:
        "https://youtube.com/playlist?list=PLCDWnguFQzxhaVUHR8RaCF8UH_7yMkEnT&si=6pgnk5QOY6uN93my",
      Unity:
        "https://youtube.com/playlist?list=PLCDWnguFQzxg4pvJtWNlIriw8aX9dltEb&si=BWa_EA0zw2THiR_H",
    },
  },
];

export default function UnboundPlayground() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-20 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600/20 via-transparent to-violet-600/20 blur-3xl" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          {/* LEFT: TEXT */}
          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Learn to code
              <span className="block text-indigo-300">
                by building your own worlds.
              </span>
            </motion.h1>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                When people hear{" "}
                <span className="text-zinc-100 font-medium">
                  “programming,”
                </span>{" "}
                they imagine making websites, managing backends, APIs,
                competitive programming — problems solved once and forgotten.
              </p>

              <p>
                <span className="text-zinc-100 font-medium">
                  That&apos;s where Game Development is different.
                </span>{" "}
                You make worlds with your own laws, physics & organization. You
                define what&apos;s possible, what&apos;s not.
              </p>

              {/* Immersive block */}
              <div className="space-y-4 pt-4">
                <p className="text-indigo-300 font-medium">
                  Hunt monsters with your friends —
                </p>
                <p>reimagine and explore places beyond the universe.</p>

                <p className="pt-4 text-indigo-300 font-medium">
                  Step into history.
                </p>
                <p>
                  Not to replay it — to break it.
                  <br />
                  Change one decision. Watch the timeline bend, fracture,
                  rewrite itself.
                </p>

                <p className="pt-4 font-medium text-zinc-100">
                  There are no limits —
                  <br />
                  <span className="text-indigo-300">
                    except the ones you choose to write.
                  </span>
                </p>
              </div>

              <p className="text-zinc-50 pt-6">
                Along the way, you learn the same fundamentals used across
                software development — logic, systems, architecture.
              </p>
            </div>
          </div>

          {/* RIGHT: VISUAL / SCENE */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden">
            {/* RIGHT: TWO VIDEOS STACKED */}
            <div className="space-y-6">
              {/* First Video */}
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/yYYtBFSxoCg?start=27"
                    title="Game Development Overview"
                    className="absolute inset-0 h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Second Video */}
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/my8euq9bzFQ"
                    title="Second Video"
                    className="absolute inset-0 h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GAMES → SOFTWARE ================= */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-4xl font-semibold mb-4 text-zinc-100">
            Games as a Starting Point
          </h2>
          <p className="text-zinc-100 max-w-3xl">
            For many well-known software engineers and tech leaders, games
            weren’t a distraction — they were an entry point. Building or
            modifying simple games is often how curiosity about programming
            turns into real technical skill.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-2 text-indigo-300">
              Mark Zuckerberg
            </h4>
            <p className="text-sm text-zinc-500 mb-3">
              Founder of Facebook (Meta)
            </p>
            <p className="text-zinc-400">
              Built computer games and interactive software as a teenager. His
              early interest in games and experimentation led to Synapse, a
              music recommendation system he built before college.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-2 text-violet-300">
              Elon Musk
            </h4>
            <p className="text-sm text-zinc-500 mb-3">
              Founder of Tesla & SpaceX
            </p>
            <p className="text-zinc-400">
              At age 12, coded and sold a space-themed video game called{" "}
              <em>Blastar</em> for $500. Writing a simple game was his first
              exposure to programming and software problem-solving.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-2 text-indigo-300">
              Steve Wozniak
            </h4>
            <p className="text-sm text-zinc-500 mb-3">Co-founder of Apple</p>
            <p className="text-zinc-400">
              A lifelong arcade game enthusiast, Wozniak designed the hardware
              for Atari’s <em>Breakout</em>, optimizing chips and circuitry — an
              early example of systems-level thinking through games.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-2 text-violet-300">
              Marc Benioff
            </h4>
            <p className="text-sm text-zinc-500 mb-3">
              Founder & CEO of Salesforce
            </p>
            <p className="text-zinc-400">
              Started programming by building and selling Atari games as a
              teenager. His early gaming projects became the foundation for his
              first software business, Liberty Software.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ENGINES ================= */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-4xl font-semibold mb-4 text-zinc-100">
            Popular Game Engines
          </h2>
          <p className="text-zinc-100 max-w-3xl">
            Game engines are the software environments used to build games and
            interactive applications. They provide the core systems needed to
            create, run, and update a world in real time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/RSJDDrYbEUc"
                title="Unity vs Unreal Engine"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-3 text-indigo-300">
              Unity
            </h4>
            <p className="text-zinc-400 mb-4">
              Beginner friendly, lightweight, and fast to iterate. Ideal for 2D
              games, stylized 3D, and learning fundamentals.
            </p>
            <ul className="text-sm text-zinc-300 space-y-2 mb-4">
              <li>Great first engine</li>
              <li>Runs well on most laptops</li>
              <li>Massive learning resources</li>
            </ul>
            <p className="text-sm text-zinc-400 mb-6">
              <strong className="text-zinc-200">Requirements:</strong> 8 GB RAM,
              basic or integrated GPU
            </p>
            <div className="border-t border-zinc-800 pt-4">
              <p className="text-sm text-zinc-500 mb-2">
                Some games made with Unity
              </p>
              <ul className="text-zinc-300 space-y-1">
                <li>Pokémon GO</li>
                <li>Among Us</li>
                <li>Fall Guys</li>
                <li>Beat Saber</li>
                <li>Subnautica</li>
                <li>Hollow Knight</li>
                <li>Genshin Impact</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-3 text-violet-300">
              Unreal Engine
            </h4>
            <p className="text-zinc-400 mb-4">
              High fidelity visuals and powerful built-in systems. Excellent for
              FPS, horror, and cinematic experiences.
            </p>
            <ul className="text-sm text-zinc-300 space-y-2 mb-4">
              <li>Strong visuals out of the box</li>
              <li>Blueprint visual scripting</li>
              <li>Scales to AAA complexity</li>
            </ul>
            <p className="text-sm text-zinc-400 mb-6">
              <strong className="text-zinc-200">Requirements:</strong> 16 GB RAM
              recommended, dedicated GPU
            </p>
            <div className="border-t border-zinc-800 pt-4">
              <p className="text-sm text-zinc-500 mb-2">
                Some games made with Unreal Engine
              </p>
              <ul className="text-zinc-300 space-y-1">
                <li>Black Myth: Wukong</li>
                <li>Unrecord</li>
                <li>Batman: Arkham Knight</li>
                <li>PUBG</li>
                <li>Ark: Survival Evolved</li>
                <li>Fortnite</li>
                <li>Tekken 8</li>
                <li>Borderlands</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRACKS ================= */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto mb-5">
          <h2 className="text-4xl font-semibold mb-4 text-zinc-100">
            Winter Game Dev Tracks
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Choose a direction that excites you. Build a complete, playable
            experience. We care more about how you think than how polished it
            looks.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mb-5">
          <a
            href="https://drive.google.com/file/d/1J_6osqZ3YUm_MQ7EvzBUkdiE3FKu4QLs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 font-medium hover:underline"
          >
            click here to get PDF-COPY of Visual catalogue of the following
            tracks
          </a>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className={
                p.title === "Open Track" ? "md:col-span-2 xl:col-span-3" : ""
              }
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-900/80 border-zinc-800 hover:border-indigo-400/50 transition-colors">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="h-40 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/60">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-zinc-500 text-sm">
                        Canvas
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{p.track}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.engine.map((e) => (
                      <Badge key={e} variant="secondary">
                        {e}
                      </Badge>
                    ))}
                    <Badge>{p.difficulty}</Badge>
                  </div>

                  <ul className="text-sm text-zinc-300 list-disc list-inside space-y-1">
                    {p.specialties.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>

                  {/* Submission */}
                  <div className="mt-auto text-sm text-zinc-400">
                    <span className="text-zinc-200 font-medium">
                      Submission:
                    </span>{" "}
                    {p.submission}
                  </div>

                  {/* Follow-along resources */}
                  {p.playlists && (
                    <div className="pt-3">
                      <div className="text-indigo-300 font-semibold cursor-pointer hover:underline">
                        Click below to access our well-curated follow-along
                        learning resources
                      </div>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {Object.entries(p.playlists).map(([engine, url]) => (
                          <a
                            key={engine}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 hover:border-indigo-400/50 hover:text-zinc-100 transition-colors"
                          >
                            {engine} · guided learning path
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LEARNING RESOURCES ================= */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-4xl font-semibold mb-4 text-zinc-100">
            Learning Resources & Roadmaps
          </h2>
          <p className="text-zinc-400 max-w-3xl">
            The Game Dev team at ArIES has curated structured, well-guided
            learning roadmaps to help you complete the projects from each track
            with clarity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Track Playlists */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-3 text-indigo-300">
              Track-Specific Learning Playlists
            </h4>

            <p className="text-zinc-400 mb-4">
              If you choose a project from the tracks above, follow the curated
              playlists prepared specifically for that project.
            </p>

            <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1Kk9SDue9hKGWImd8WTSZ0_6MMtUhXVuE?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:underline"
                >
                  Central Drive folder with all track resources
                </a>
              </li>
              <li>Or use the playlist links directly inside each track card</li>
            </ul>
          </div>

          {/* Advanced Paths */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h4 className="text-xl font-semibold mb-3 text-violet-300">
              Advanced Engine Tracks
            </h4>

            <p className="text-zinc-400 mb-4">
              After completing your assigned project, you can continue with
              deeper, engine-focused learning paths.
            </p>

            <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLCDWnguFQzxijjpxQUV5y10jfLWjX4ive&si=5HEEZGKCgFgTTAv_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:underline"
                >
                  Unity Engine — Advanced Learning Track
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLCDWnguFQzxjK9hrvXjcodkm4MDmYquM1&si=3gG5i4FE-os32c5X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:underline"
                >
                  Unreal Engine — Advanced Learning Track
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-6 py-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-zinc-500 text-sm">
          <p>Unbound Playground · Winter Assignment Jam</p>
          <p className="mt-2">Curiosity matters more than experience.</p>
        </div>
      </footer>
    </div>
  );
}
