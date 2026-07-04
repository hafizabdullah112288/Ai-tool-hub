/* ============================================================
   TOOLS — this is the ONLY place you need to touch to add,
   remove, or edit a tool. Just add a new object to the array.

   category must be exactly one of: "image" | "video" | "coding" | "research"
   ============================================================ */
const TOOLS = [
  /* ---------------- IMAGE (25) ---------------- */
  { name: "Midjourney",        category: "image", desc: "High-quality AI image generation from text prompts.",         url: "https://www.midjourney.com" },
  { name: "DALL·E 3",          category: "image", desc: "OpenAI's image generator, built into ChatGPT.",               url: "https://openai.com/dall-e-3" },
  { name: "Adobe Firefly",     category: "image", desc: "Generative image tools inside the Adobe ecosystem.",          url: "https://firefly.adobe.com" },
  { name: "Ideogram",          category: "image", desc: "Strong at generating readable text inside images.",           url: "https://ideogram.ai" },
  { name: "Stable Diffusion",  category: "image", desc: "Open-source image model you can run or use via the web.",     url: "https://stability.ai" },
  { name: "Leonardo AI",       category: "image", desc: "Full creative suite with real-time canvas and upscaling.",    url: "https://leonardo.ai" },
  { name: "Canva AI",          category: "image", desc: "Magic Media image generation built into Canva's editor.",     url: "https://www.canva.com" },
  { name: "Recraft",           category: "image", desc: "Great for vector art, icons, and brand-consistent graphics.", url: "https://www.recraft.ai" },
  { name: "Freepik AI",        category: "image", desc: "AI image generation bundled with stock design assets.",       url: "https://www.freepik.com/ai" },
  { name: "NightCafe",         category: "image", desc: "Community-driven AI art generator with many models.",         url: "https://creator.nightcafe.studio" },
  { name: "Google Gemini",     category: "image", desc: "Google's assistant with built-in image generation.",          url: "https://gemini.google.com" },
  { name: "Playground AI",     category: "image", desc: "Free, easy-to-use image generation and editing canvas.",      url: "https://playground.com" },
  { name: "Krea AI",           category: "image", desc: "Real-time AI generation and image upscaling.",                url: "https://www.krea.ai" },
  { name: "Clipdrop",          category: "image", desc: "Quick AI image tools: cleanup, relight, and upscale.",        url: "https://clipdrop.co" },
  { name: "DreamStudio",       category: "image", desc: "Stability AI's official Stable Diffusion web app.",           url: "https://dreamstudio.ai" },
  { name: "Fotor AI",          category: "image", desc: "AI photo editor with generation and background tools.",       url: "https://www.fotor.com" },
  { name: "Picsart AI",        category: "image", desc: "AI-powered photo and design editing app.",                    url: "https://picsart.com" },
  { name: "StarryAI",          category: "image", desc: "Simple mobile-friendly AI art generator.",                    url: "https://starryai.com" },
  { name: "Craiyon",           category: "image", desc: "Free, lightweight text-to-image generator.",                  url: "https://www.craiyon.com" },
  { name: "Lexica",            category: "image", desc: "Search engine and generator built on Stable Diffusion.",      url: "https://lexica.art" },
  { name: "Artbreeder",        category: "image", desc: "Blend and evolve images collaboratively with AI.",            url: "https://www.artbreeder.com" },
  { name: "Dream by WOMBO",    category: "image", desc: "Fast, stylized AI art generation app.",                       url: "https://dream.ai" },
  { name: "Getimg.ai",         category: "image", desc: "Access to many image models in one simple interface.",       url: "https://getimg.ai" },
  { name: "Magnific AI",       category: "image", desc: "AI upscaler that adds realistic detail to images.",           url: "https://magnific.ai" },
  { name: "Bing Image Creator",category: "image", desc: "Microsoft's free DALL·E-powered image generator.",           url: "https://www.bing.com/images/create" },

  /* ---------------- VIDEO (25) ---------------- */
  { name: "Runway",            category: "video", desc: "Text-to-video generation and professional video editing.",   url: "https://runwayml.com" },
  { name: "Pika",               category: "video", desc: "Fast text-to-video generation for short stylized clips.",    url: "https://pika.art" },
  { name: "Sora",               category: "video", desc: "OpenAI's text-to-video generation model.",                  url: "https://openai.com/sora" },
  { name: "Luma Dream Machine", category: "video", desc: "Realistic AI video generation from text or images.",        url: "https://lumalabs.ai/dream-machine" },
  { name: "Google Veo",         category: "video", desc: "Google DeepMind's high-fidelity video generation model.",   url: "https://deepmind.google/technologies/veo" },
  { name: "Kling AI",           category: "video", desc: "Cinematic AI video generation with strong motion realism.", url: "https://klingai.com" },
  { name: "HeyGen",             category: "video", desc: "AI avatar and spokesperson video generation.",              url: "https://www.heygen.com" },
  { name: "Synthesia",          category: "video", desc: "Create presenter-style videos from text using AI avatars.", url: "https://www.synthesia.io" },
  { name: "Hailuo AI",          category: "video", desc: "MiniMax's fast text/image-to-video generator.",             url: "https://hailuoai.video" },
  { name: "PixVerse",           category: "video", desc: "Text and image-to-video with motion and audio control.",    url: "https://pixverse.ai" },
  { name: "InVideo AI",         category: "video", desc: "Assembles polished videos from text using stock + AI.",     url: "https://invideo.io" },
  { name: "CapCut",             category: "video", desc: "Popular AI-powered video editor for social content.",       url: "https://www.capcut.com" },
  { name: "D-ID",               category: "video", desc: "Turns photos and text into talking-head videos.",           url: "https://www.d-id.com" },
  { name: "Colossyan",          category: "video", desc: "AI avatar videos for training and corporate content.",      url: "https://www.colossyan.com" },
  { name: "Elai.io",            category: "video", desc: "Turn text scripts into avatar-narrated videos.",            url: "https://elai.io" },
  { name: "Fliki",              category: "video", desc: "Text-to-video and text-to-speech for content creators.",    url: "https://fliki.ai" },
  { name: "Vidu",               category: "video", desc: "AI video generation with strong character consistency.",    url: "https://www.vidu.studio" },
  { name: "Opus Clip",          category: "video", desc: "Turns long videos into short, viral-ready clips.",          url: "https://www.opus.pro" },
  { name: "Descript",           category: "video", desc: "Edit video by editing text, with AI voice tools built in.", url: "https://www.descript.com" },
  { name: "Renderforest",       category: "video", desc: "AI templates for quick promo and explainer videos.",        url: "https://www.renderforest.com" },
  { name: "Lumen5",             category: "video", desc: "Turns blog posts and articles into short videos.",          url: "https://lumen5.com" },
  { name: "Vizard",             category: "video", desc: "AI clipping tool for repurposing long-form video.",         url: "https://vizard.ai" },
  { name: "Steve AI",           category: "video", desc: "Script-to-video generation with animated styles.",          url: "https://www.steve.ai" },
  { name: "DeepBrain AI",       category: "video", desc: "AI Studios for avatar-based video production.",             url: "https://www.deepbrain.io" },
  { name: "Higgsfield",         category: "video", desc: "Multi-model creative suite for cinematic AI video.",        url: "https://higgsfield.ai" },

  /* ---------------- CODING (25) ---------------- */
  { name: "GitHub Copilot",     category: "coding", desc: "AI pair programmer built into your editor.",                url: "https://github.com/features/copilot" },
  { name: "Cursor",             category: "coding", desc: "AI-first code editor built for fast iteration.",           url: "https://cursor.sh" },
  { name: "Claude Code",        category: "coding", desc: "Agentic coding tool that works from your terminal.",       url: "https://claude.com/product/claude-code" },
  { name: "Replit AI",          category: "coding", desc: "Build, run, and deploy apps with AI assistance.",          url: "https://replit.com" },
  { name: "OpenAI Codex",       category: "coding", desc: "OpenAI's coding agent for autonomous multi-file work.",    url: "https://openai.com/codex" },
  { name: "Windsurf",           category: "coding", desc: "AI-native code editor with agentic multi-file edits.",     url: "https://codeium.com/windsurf" },
  { name: "Tabnine",            category: "coding", desc: "AI completion that can run fully on-premise.",             url: "https://www.tabnine.com" },
  { name: "JetBrains AI",       category: "coding", desc: "AI assistant built directly into JetBrains IDEs.",         url: "https://www.jetbrains.com/ai" },
  { name: "Gemini Code Assist", category: "coding", desc: "Google's AI coding assistant for Cloud workflows.",        url: "https://codeassist.google" },
  { name: "Amazon Q Developer", category: "coding", desc: "AWS's AI assistant for building and debugging apps.",      url: "https://aws.amazon.com/q/developer" },
  { name: "Sourcegraph Cody",   category: "coding", desc: "AI assistant built for understanding huge codebases.",     url: "https://sourcegraph.com/cody" },
  { name: "Aider",              category: "coding", desc: "Open-source AI pair programmer for your terminal.",        url: "https://aider.chat" },
  { name: "Devin",              category: "coding", desc: "Autonomous AI software engineer by Cognition.",            url: "https://www.cognition.ai/devin" },
  { name: "Qodo",               category: "coding", desc: "AI code review platform for pull-request validation.",     url: "https://www.qodo.ai" },
  { name: "Pieces",             category: "coding", desc: "Saves and organizes reusable code snippets with AI.",      url: "https://pieces.app" },
  { name: "Bolt.new",           category: "coding", desc: "Build full-stack web apps from a single prompt.",          url: "https://bolt.new" },
  { name: "Lovable",            category: "coding", desc: "AI app builder that turns prompts into working software.", url: "https://lovable.dev" },
  { name: "v0 by Vercel",       category: "coding", desc: "Generates React UI components from text prompts.",         url: "https://v0.dev" },
  { name: "Augment Code",       category: "coding", desc: "Multi-agent AI coding platform for large codebases.",      url: "https://www.augmentcode.com" },
  { name: "Continue.dev",       category: "coding", desc: "Open-source AI code assistant, bring your own model.",     url: "https://continue.dev" },
  { name: "Supermaven",         category: "coding", desc: "Very fast AI autocomplete with a huge context window.",    url: "https://supermaven.com" },
  { name: "Blackbox AI",        category: "coding", desc: "AI code search, chat, and generation assistant.",          url: "https://www.blackbox.ai" },
  { name: "Warp",               category: "coding", desc: "AI-powered terminal that helps write and explain commands.", url: "https://www.warp.dev" },
  { name: "Phind",              category: "coding", desc: "AI search engine built specifically for developers.",      url: "https://www.phind.com" },
  { name: "Cline",              category: "coding", desc: "Open-source autonomous coding agent for VS Code.",         url: "https://cline.bot" },

  /* ---------------- DEEP RESEARCH (25) ---------------- */
  { name: "Perplexity",         category: "research", desc: "AI answer engine with cited, up-to-date sources.",       url: "https://www.perplexity.ai" },
  { name: "Elicit",             category: "research", desc: "AI research assistant for reviewing academic papers.",   url: "https://elicit.com" },
  { name: "Consensus",          category: "research", desc: "Search engine that surfaces findings from real studies.", url: "https://consensus.app" },
  { name: "Semantic Scholar",   category: "research", desc: "Free, AI-powered search engine for academic papers.",    url: "https://www.semanticscholar.org" },
  { name: "ResearchRabbit",     category: "research", desc: "Visual citation-mapping tool for literature discovery.", url: "https://www.researchrabbit.ai" },
  { name: "Scite",              category: "research", desc: "Checks whether citations support, contrast, or mention a claim.", url: "https://scite.ai" },
  { name: "SciSpace",           category: "research", desc: "Read, summarize, and chat with academic PDFs.",          url: "https://scispace.com" },
  { name: "Google NotebookLM",  category: "research", desc: "AI notebook that answers only from your own sources.",   url: "https://notebooklm.google" },
  { name: "ChatGPT",            category: "research", desc: "General AI assistant with a Deep Research mode.",        url: "https://chat.openai.com" },
  { name: "Claude",              category: "research", desc: "Anthropic's assistant with an in-depth research mode.", url: "https://claude.ai" },
  { name: "Gemini",              category: "research", desc: "Google's assistant with Deep Research capabilities.",   url: "https://gemini.google.com" },
  { name: "Grok",                category: "research", desc: "xAI's assistant with a DeeperSearch research mode.",    url: "https://grok.com" },
  { name: "Connected Papers",    category: "research", desc: "Visual graph tool for exploring related academic work.", url: "https://www.connectedpapers.com" },
  { name: "Undermind",           category: "research", desc: "Iterative AI search across scientific literature.",     url: "https://undermind.ai" },
  { name: "PapersFlow",          category: "research", desc: "End-to-end research workspace: discovery to writing.",  url: "https://papersflow.ai" },
  { name: "OpenAlex",            category: "research", desc: "Free, open catalog of scholarly works and citations.",  url: "https://openalex.org" },
  { name: "Litmaps",             category: "research", desc: "Visualize and track citation networks over time.",      url: "https://www.litmaps.com" },
  { name: "You.com",             category: "research", desc: "Search with AI-generated summaries and citations.",     url: "https://you.com" },
  { name: "Genspark",            category: "research", desc: "AI agent that builds custom research pages on demand.", url: "https://www.genspark.ai" },
  { name: "Exa",                 category: "research", desc: "Search engine built for AI agents and deep retrieval.", url: "https://exa.ai" },
  { name: "Kagi",                category: "research", desc: "Privacy-focused search engine with AI-assisted answers.", url: "https://kagi.com" },
];

const CATEGORY_LABEL = {
  image: "Image",
  video: "Video",
  coding: "Coding",
  research: "Research",
};

const grid = document.getElementById("toolGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".cat-btn");
const emptyState = document.getElementById("emptyState");

function buildCard(tool) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--card-accent", `var(--${tool.category})`);

  card.innerHTML = `
    <div class="card-top">
      <h3 class="card-name">${tool.name}</h3>
      <span class="card-tag" style="background: var(--${tool.category})">${CATEGORY_LABEL[tool.category]}</span>
    </div>
    <p class="card-desc">${tool.desc}</p>
    <a class="card-visit" href="${tool.url}" target="_blank" rel="noopener">Visit ↗</a>
  `;
  return card;
}

const CATEGORY_ALIASES = {
  image: ["image", "img", "picture", "photo", "art"],
  video: ["video", "vid", "movie", "clip"],
  coding: ["coding", "code", "dev", "developer", "programming"],
  research: ["research", "deep research", "deepresearch", "search", "study"],
};

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function fuzzyIncludes(text, query) {
  if (text.includes(query)) return true;
  const words = text.split(/\s+/);
  return words.some(word => {
    const maxDist = word.length > 5 ? 2 : 1;
    return levenshtein(word, query) <= maxDist;
  });
}

/* ---------- Search bar: filters the tools shown on the main page ---------- */
function renderSearchResults() {
  const query = searchInput.value.trim().toLowerCase();
  grid.innerHTML = "";

  if (query === "") {
    emptyState.hidden = true;
    return;
  }

  const filtered = TOOLS.filter(tool => {
    const nameMatch = fuzzyIncludes(tool.name.toLowerCase(), query);
    const descMatch = tool.desc.toLowerCase().includes(query);
    const categoryMatch = CATEGORY_ALIASES[tool.category].some(alias => fuzzyIncludes(alias, query));
    return nameMatch || descMatch || categoryMatch;
  });

  emptyState.hidden = filtered.length !== 0;
  filtered.forEach(tool => grid.appendChild(buildCard(tool)));
}

searchInput.addEventListener("input", renderSearchResults);

/* ---------- Category buttons: each one opens an animated popup ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const modalTitle = document.getElementById("modalTitle");
const modalGrid = document.getElementById("modalGrid");
const modalClose = document.getElementById("modalClose");

function openCategoryModal(category) {
  const icons = { image: "🎨", video: "🎬", coding: "💻", research: "🔎" };
  modalTitle.textContent = `${icons[category]} ${CATEGORY_LABEL[category]} tools`;
  modalBox.style.setProperty("--modal-accent", `var(--${category})`);

  modalGrid.innerHTML = "";
  TOOLS.filter(tool => tool.category === category)
       .forEach(tool => modalGrid.appendChild(buildCard(tool)));

  modalOverlay.classList.add("open");
}

function closeCategoryModal() {
  modalOverlay.classList.remove("open");
}

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => openCategoryModal(btn.dataset.category));
});

modalClose.addEventListener("click", closeCategoryModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeCategoryModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCategoryModal();
});

/* ---------- Theme toggle (persists only for this session) ---------- */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeIcon.textContent = isLight ? "☀️" : "🌙";
});