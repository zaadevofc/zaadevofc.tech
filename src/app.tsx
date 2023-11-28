import { Code, ScrollShadow, Tooltip } from "@nextui-org/react";
import { BsPatchCheckFill } from "react-icons/bs";
import Container from "./components/Container";
import GithubCard from "./components/GithubCard";
import Loading from "./components/Loading";
import NPMCard from "./components/NPMCard";
import ProjectCard from "./components/ProjectCard";
import useGithubAPi from "./query/useGithubAPi";
import useListing from "./query/useListing";
import useNpmAPi from "./query/useNpmAPi";

export function App() {
  const { skills, stats, sosmed, experience, projects } = useListing()
  const { data: github, isLoading: githubLoading } = useGithubAPi()
  const { data: npm, isLoading: npmLoading } = useNpmAPi()

  if (githubLoading || npmLoading) return <Loading loading={githubLoading || npmLoading} />
  return (
    <>
      <Container class={'w-full'}>
        <div class={'grid md:grid-cols-3 grid-cols-1 justify-between gap-8 w-[1200px] h-full'}>
          <div class={'w-auto mx-auto flex flex-col h-full p-3 gap-10'}>
            <div class={'flex flex-row items-center space-x-8 w-full'}>
              <span class={'relative w-1/3'}>
                {github.user.hireable && <BsPatchCheckFill data-aos="zoom-in" class='absolute right-0 top-0 !fill-green-500' />}
                <img data-aos="flip-left" class={'rounded-full w-full border-2 border-white/75'} width={500} height={500} src={github.user.avatar_url} alt={github.user.login} />
              </span>
              <div class={'flex flex-col text-4xl'}>
                <h1 class={'bg-clip-text text-transparent bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900'}>{github.user.login}</h1>
                <h4 class={'text-lg text-gray-400 tracking-wide font-[Jemboree]'}>{github.user.company}</h4>
                <div class={'flex flex-row mt-4 gap-3'}>
                  {sosmed.map(x => (
                    <img onClick={() => window.open(x.href, '_blank')} class={'md:cursor-pointer'} width={25} height={25} src={x.src} alt={x.title}></img>
                  ))}
                </div>
              </div>
            </div>
            <div class={''}>
              <h5 class={'font-["Libre_Barcode_39_Extended"] text-[40px] mt-3 text-gray-300 leading-5'}>
                {github.user.login}
              </h5>
              <h1 class={'font-[Behtix] text-gray-300 leading-5 py-6'}>
                {github.user.bio}
              </h1>
              <div class={'grid grid-cols-4 text-center gap-2'}>
                {experience.map(x => (
                  <Tooltip content='Click Me!!' color={x.colors} showArrow className='font-[Behtix]'>
                    <Code color={x.colors}>
                      <h1 class={'md:cursor-pointer'}>{x.title}</h1>
                    </Code>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div class={'flex flex-col gap-2'}>
              {stats.map(x => (
                <img data-aos="flip-up" data-aos-duration="1000" class={`rounded-lg ${x.class}`} src={x.src} alt={x.title} />
              ))}
            </div>
            <div>
              <h1 class={'font-[Bestigia] font-bold text-2xl tracking-wider'}>My Skills & Experience</h1>
            </div>
            <div class={'grid grid-cols-9 w-full gap-2 items-center -mt-4'}>
              {skills.map((x) => {
                return (
                  <Tooltip showArrow={true} content={x.title} color='warning' className='!font-[Behtix]'>
                    <img data-aos="zoom-in" class={`${x.border ? 'border border-white' : ''} w-auto md:cursor-pointer rounded-sm`} src={x.src + x.title + '.' + x.type}></img>
                  </Tooltip>
                )
              })}
            </div>
          </div>
          <div class={'w-full mx-auto flex flex-col p-3 gap-8'}>
            <div class={'w-full mx-auto flex flex-col gap-5'}>
              <div class={'flex flex-row gap-3 items-center'}>
                <img class={'rounded-sm w-6 h-6'} src="/skills/github.png" width={20} height={20} alt="zaadevofc" />
                <h1 class={'font-[Bestigia] font-bold text-[20px] tracking-wider'}>Github Projects</h1>
              </div>
              <div class={'overflow-y-auto w-full h-[360px]'}>
                <ScrollShadow hideScrollBar className="w-full h-full">
                  <div class={'grid grid-cols-1 w-full h-auto gap-2 items-center'}>
                    {github.repos.map((x, i) => <GithubCard key={x} index={i} />)}
                  </div>
                </ScrollShadow>
              </div>
            </div>
            <div class={'w-full mx-auto flex flex-col gap-5'}>
              <div class={'flex flex-row gap-3 items-center'}>
                <img class={'rounded-sm w-6 h-6'} src="/skills/npm.png" width={20} height={20} alt="zaadevofc" />
                <h1 class={'font-[Bestigia] font-bold text-[20px] tracking-wider'}>NPM Projects</h1>
              </div>
              <div class={'overflow-y-auto hide-scroll w-full h-[360px]'}>
                <ScrollShadow hideScrollBar className="w-full h-full">
                  <div class={'grid grid-cols-1 w-full h-auto gap-2 items-center'}>
                    {npm.registry.map((x, i) => <NPMCard key={x} index={i} />)}
                  </div>
                </ScrollShadow>
              </div>
            </div>
          </div>

          <div class={'w-full mx-auto flex flex-col p-3 gap-8'}>
            <div class={'w-full mx-auto flex flex-col gap-5'}>
              <div class={'flex flex-row gap-3 items-center'}>
                <img class={'rounded-full w-7 h-7'} src={github.user.avatar_url} width={20} height={20} alt="zaadevofc" />
                <h1 class={'font-[Bestigia] font-bold text-[20px] tracking-wider'}>My Projects</h1>
              </div>
              <div class={'overflow-y-auto hide-scroll w-full h-[550px]'}>
                <ScrollShadow hideScrollBar className="w-full h-full">
                  <div class={'grid grid-cols-1 w-full h-auto gap-2 items-center'}>
                    {projects.map((x, i) => <ProjectCard key={x} index={i} />)}
                  </div>
                </ScrollShadow>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}