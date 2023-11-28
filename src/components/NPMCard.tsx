import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import moment from "moment";
import { HiSpeakerphone } from "react-icons/hi";
import { HiMiniHeart } from "react-icons/hi2";
import useGithubAPi from "../query/useGithubAPi";
import useNpmAPi from "../query/useNpmAPi";
import Loading from "./Loading";

const NPMCard = (props: any) => {
  const { data: github, isLoading: githubLoading } = useGithubAPi()
  const { data: npm, isLoading: npmLoading } = useNpmAPi()
  if (githubLoading || npmLoading) return <Loading loading={githubLoading || npmLoading} />

  return (
    <Card shadow="none" className={`${props.class} w-full !font-[Behtix] text-slate-200 border border-slate-500 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-gray-800`}>
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar className={'border-2 border-slate-200'} radius="full" size="sm" src={github.repos[props.index].owner.avatar_url} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-[16px] tracking-wide text-white font-bold leading-none">{npm.registry[props.index].package.name}</h4>
            <h5 className="text-small text-slate-300 tracking-wider">v{npm.registry[props.index].package.version}</h5>
          </div>
        </div>
        <Button onClick={() => window.open(npm.registry[props.index].package.links.npm, '_blank')} color="default" radius="full" size="sm">Visit</Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px">
          {npm.registry[props.index].package.description ?? 'No description.'}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-bold text-small flex items-center gap-1"><HiMiniHeart className='text-lime-500 text-lg' /> Author</p>
          <p className="text-small font-thin">{npm.registry[props.index].package.author.name}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold text-small flex items-center gap-1"><HiSpeakerphone className='text-sky-400 text-lg' /> Last Publish</p>
          <p className="text-small font-thin tracking-wider">{moment(npm.registry[props.index].package.date).format('DD/MM/YY')}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NPMCard