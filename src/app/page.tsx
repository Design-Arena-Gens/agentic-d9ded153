export default function Home() {
  const featuredVideoSrc =
    "https://www.youtube.com/embed?listType=search&list=tmkoc%20episode";

  const curatedEpisodes = [
    {
      title: "Comedy Classic: Jetha's Mission",
      description:
        "A fan-favourite episode packed with Jethalal's signature chaos and unforgettable punchlines.",
      href: "https://www.youtube.com/watch?v=WCIh0b07XjQ",
    },
    {
      title: "Sodhi's Turbocharged Surprise",
      description:
        "Turn up the energy with Sodhi's larger-than-life celebration straight from Gokuldham.",
      href: "https://www.youtube.com/watch?v=6Orf_Z2_Bxk",
    },
    {
      title: "Popatlal Ki Shaadi Special",
      description:
        "Root for Popatlal in this hopeful saga featuring hilarious twists and heartfelt moments.",
      href: "https://www.youtube.com/watch?v=BbM5_HZJx4Q",
    },
    {
      title: "Bhide vs. Tapu Sena",
      description:
        "Watch the ultimate face-off between discipline and mischief as Bhide keeps Tapu Sena on their toes.",
      href: "https://www.youtube.com/watch?v=Qm2w7O_IcWo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10">
        <section className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="max-w-xl space-y-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
              Gokuldham Screening Room
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              TMKOC ka binge session yahin se start karo
            </h1>
            <p className="text-lg text-slate-300">
              Seedha YouTube stream me jump karo aur apne favourite Gokuldham
              parivaar ke saath hasi ka safar shuru karo. Niche curated list me
              sabse hit episodes bas ek click door hai.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="https://www.youtube.com/results?search_query=tmkoc+full+episode"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] hover:bg-emerald-300"
              >
                YouTube Search kholo
              </a>
              <a
                href="https://www.youtube.com/@SonySAB"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Official Channel dekho
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-emerald-500/20">
            <div className="aspect-video">
              <iframe
                src={featuredVideoSrc}
                title="TMKOC on YouTube"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="space-y-2 border-t border-white/5 bg-slate-950/60 p-6 text-left">
              <h2 className="text-xl font-semibold text-emerald-200">
                Auto-play search: TMKOC Episode
              </h2>
              <p className="text-sm text-slate-300">
                Player YouTube search results se sabse fresh TMKOC clips aur
                full episodes queue karta hai. Agar specific episode chahiye, to
                niche wale quick picks try karo.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-emerald-200">
              Quick Episode Picks
            </h3>
            <p className="max-w-2xl text-slate-300">
              Ye list YouTube par Sony SAB ke official uploads se curated hai.
              Har link naya tab mein khulega taaki aap bina delay binge mode
              start kar sako.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {curatedEpisodes.map((episode) => (
              <a
                key={episode.href}
                href={episode.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-emerald-300/80 hover:bg-slate-900"
              >
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Official YouTube Upload
                  </p>
                  <h4 className="text-xl font-semibold text-white group-hover:text-emerald-200">
                    {episode.title}
                  </h4>
                  <p className="text-sm text-slate-300">{episode.description}</p>
                </div>
                <span className="text-sm font-semibold text-emerald-300">
                  Watch now →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-emerald-200">Smart Controls</h3>
            <p className="text-sm text-slate-300">
              Volume aur quality YouTube player ke controls se adjust karo.
              Fullscreen best experience deta hai – especially for Tapu Sena
              antics!
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-emerald-200">Weekend Marathon</h3>
            <p className="text-sm text-slate-300">
              Playlist mode saath mein kaam karta hai. Ek baar play dabao aur
              rest of the night laugh-track pe chhod do.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-emerald-200">Share The Laughter</h3>
            <p className="text-sm text-slate-300">
              Dost ko bhi stream me bulana hai? Simply link copy karo aur unke
              saath Gokuldham ki masti share karo.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
