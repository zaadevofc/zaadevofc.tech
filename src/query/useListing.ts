type Skills = { title: string; src: string; type: string; level: string; border?: boolean; }

let skills: Skills[] = [
  { title: 'javascript', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'typescript', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'html5', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'css3', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'github', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'vercel', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'netlify', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'bun', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'npm', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'nodejs', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'expressjs', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'fastify', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'nextjs', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'vitejs', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'astrojs', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'reactjs', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'preact', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'socket.io', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'tailwind', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'nextui', src: '/skills/', type: 'png', level: 'Master', border: true },
  { title: 'daisyui', src: '/skills/', type: 'png', level: 'Master', border: true },
  { title: 'firebase', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'supabase', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'mongodb', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'postgresql', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'mysql', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'adobe premiere', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'capcut', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'canva', src: '/skills/', type: 'png', level: 'Master' },
  { title: 'arduino', src: '/skills/', type: 'png', level: 'Master' },
]

type Stats = {
  title: string;
  src: string;
  class?: string;
}

let stats: Stats[] = [
  { title: 'zaadevofc snake', src: '/snake.svg', class: 'border border-slate-600 p-1' },
  { title: 'zaadevofc stats', src: 'https://github-stats-alpha.vercel.app/api?username=zaadevofc', class: 'border-2 border-red-600 bg-white' },
  { title: 'zaadevofc streak', src: 'https://github-readme-streak-stats.herokuapp.com/?user=zaadevofc&mode=weekly&exclude_days=Sun%2CMon%2CTue%2CWed%2CThu%2CFri%2CSat', class: 'border-2 border-amber-700 bg-white' },
  { title: 'zaadevofc stats', src: 'https://github-readme-stats.vercel.app/api?username=zaadevofc&show_icons=true&rank_icon=github&include_all_commits=true&hide_title=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage', class: 'border-2 border-blue-600 bg-white' },
]

type Sosmed = {
  title: string;
  src: string;
  href: string;
}

let sosmed: Sosmed[] = [
  { title: 'zaadevofc github', src: '/logo/github.png', href: 'https://github.com/zaadevofc' },
  { title: 'zaadevofc instagram', src: '/logo/instagram.png', href: 'https://instagram.com/zaadevofc' },
  { title: 'zaadevofc tiktok', src: '/logo/tiktok.png', href: 'https://tiktok.com/@zaadevofc' },
  { title: 'zaadevofc telegram', src: '/logo/telegram.png', href: 'https://t.me/zaadevofc' },
]

type Experience = {
  title: string;
  colors: "success" | "default" | "primary" | "secondary" | "warning" | "danger" | undefined;
}

let experience: Experience[] = [
  { title: 'Website', colors: 'warning' },
  { title: 'APi', colors: 'success' },
  { title: 'Backend', colors: 'primary' },
  { title: 'Bot', colors: 'danger' },
]

type Projects = {
  title: string;
  desc: string;
  source: string;
  url: string;
  image: string;
  stack: string[];
}

let projects: Projects[] = [
  {
    title: 'Zarest APi',
    desc: 'Layanan Rest APi Terbaik di Indonesia || Nikmati Fitur Gratis Yang Memukai! Tingkatkan Ke Premium Untuk Hal Menarik Lainnya - zarestapi',
    url: 'https://zarest.tech/',
    source: 'https://zarest.tech/',
    image: 'https://www.zarest.tech/logo.png',
    stack: ['astrojs', 'alpinejs', 'tailwindcss']
  },
  {
    title: 'Zarest APi',
    desc: 'Layanan Rest APi Terbaik di Indonesia || Nikmati Fitur Gratis Yang Memukai! Tingkatkan Ke Premium Untuk Hal Menarik Lainnya - zarestapi',
    url: 'https://zarest.tech/',
    source: 'https://zarest.tech/',
    image: 'https://www.zarest.tech/logo.png',
    stack: ['astrojs', 'alpinejs', 'tailwindcss']
  },
  {
    title: 'Zarest APi',
    desc: 'Layanan Rest APi Terbaik di Indonesia || Nikmati Fitur Gratis Yang Memukai! Tingkatkan Ke Premium Untuk Hal Menarik Lainnya - zarestapi',
    url: 'https://zarest.tech/',
    source: 'https://zarest.tech/',
    image: 'https://www.zarest.tech/logo.png',
    stack: ['astrojs', 'alpinejs', 'tailwindcss']
  },
  {
    title: 'Zarest APi',
    desc: 'Layanan Rest APi Terbaik di Indonesia || Nikmati Fitur Gratis Yang Memukai! Tingkatkan Ke Premium Untuk Hal Menarik Lainnya - zarestapi',
    url: 'https://zarest.tech/',
    source: 'https://zarest.tech/',
    image: 'https://www.zarest.tech/logo.png',
    stack: ['astrojs', 'alpinejs', 'tailwindcss']
  },
]

type Listing = {
  skills: Skills[];
  stats: Stats[];
  sosmed: Sosmed[];
  experience: Experience[];
  projects: Projects[];
}

type Payload = Listing

const useListing = () => {
  let payload: Payload = {
    skills: skills,
    stats: stats,
    sosmed: sosmed,
    experience: experience,
    projects: projects
  }
  return payload
}

export default useListing