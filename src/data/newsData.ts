export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content?: string; // Added content for the full article
  date: string;
  author?: string;
  image: string;
  category: string;
  main: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Andromeda Secure Spot in Galactic Championship Finals",
    excerpt: "After a grueling 5-game series, the team has officially punched their ticket to the finals. The atmosphere was electric as the final nexus fell.",
    content: `
      <p>The journey to the Galactic Championship Finals has been nothing short of miraculous for Andromeda. Starting the season as underdogs, the roster has coalesced into a formidable unit that fears no one.</p>
      
      <p>In yesterday's semifinal match against the Orbitals, the team showed resilience that has become their trademark. After dropping the first two games, reverse sweeps seemed impossible against the Orbitals' defensive playstyle. However, a crucial Baron steal by Nebula in Game 3 turned the tides.</p>
      
      <h3>The Turning Point</h3>
      <p>It was the 25-minute mark of Game 3 where everything changed. With the gold deficit sitting at 5k, the call to rush Baron was risky. "We knew we had to force a fight or we'd slowly bleed out," explained Captain Cosmos in the post-game interview.</p>
      
      <p>The resulting teamfight was a clean ace, leading to a momentum shift that carried through Games 4 and 5. By the time the final nexus exploded, the arena was shaking with the chants of "Andromeda!"</p>
      
      <h3>Looking Ahead</h3>
      <p>The finals will take place next Saturday against the reigning champions, Supernova. It will be a battle of styles: Andromeda's chaotic aggression against Supernova's calculated control.</p>
    `,
    date: "Jan 23, 2026",
    author: "Alex 'Cosmos' Rivera",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    category: "Tournament",
    main: true
  },
  {
    id: 2,
    title: "Introducing Our New Star Jungler",
    excerpt: "Welcome 'Nebula' to the starting lineup. Bringing aggression and tactical brilliance to the rift.",
    content: `
      <p>We are thrilled to announce the latest addition to the Andromeda roster: Sarah "Nebula" Chen.</p>
      <p>Known for her aggressive pathing and unparalleled objective control in the challenger scene, Nebula brings a fresh dynamic to our jungle position. Her signature champions, Lee Sin and Elise, are expected to draw target bans immediately.</p>
    `,
    date: "Jan 20, 2026",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2665&auto=format&fit=crop",
    category: "Roster",
    main: true
  },
  {
    id: 3,
    title: "Patch 4.2 Meta Analysis",
    excerpt: "Everything you need to know about the latest changes and how they affect the competitive landscape.",
    content: `
      <p>Patch 4.2 has landed, and with it comes a significant shake-up to the bot lane meta. The changes to itemization for crit-based ADCs have pushed hyper-carries back into the spotlight.</p>
      <p>In this analysis, our coaching staff breaks down the biggest winners and losers of the patch.</p>
    `,
    date: "Jan 18, 2026",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
    category: "Analysis",
    main: true
  },
  {
    id: 4,
    title: "Community Cup Registration Open",
    excerpt: "Join the battle and win exclusive prizes. Open to all ranks and regions.",
    content: `
      <p>Ready to prove yourself? The Andromeda Community Cup returns this February!</p>
      <p>Grab your friends and form a team to compete for a prize pool of $5,000 and exclusive in-game skins. Registration is open until January 30th.</p>
    `,
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2670&auto=format&fit=crop",
    category: "Community",
    main: false
  }
];
