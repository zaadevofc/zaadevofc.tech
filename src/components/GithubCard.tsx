import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaCodeFork } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import useGithubAPi from "../hooks/useGithubAPi";
import Loading from "./Loading";

const GithubCard = (props: any) => {
  const { data: github, isLoading: githubLoading } = useGithubAPi()
  if (githubLoading) return <Loading loading={githubLoading} />

  return (
    <Card shadow="none" className={`${props.class} w-full !font-[Behtix] text-slate-200 border border-slate-400 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-gray-800`}>
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar className={'border-2 border-slate-200'} radius="full" size="sm" src={github.repos[props.index].owner.avatar_url} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-[16px] tracking-wide text-white font-bold leading-none">{github.repos[props.index].name}</h4>
            <h5 className="text-small text-slate-300 tracking-tight">@{github.repos[props.index].owner.login}</h5>
          </div>
        </div>
        <Button onClick={() => window.open(github.repos[props.index].html_url, '_blank')} color="default" radius="full" size="sm">Visit</Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px">
          {github.repos[props.index].description ?? 'No description.'}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-small flex items-center gap-1"><GoStarFill className='text-yellow-500' /> {github.repos[props.index].stargazers_count}</p>
          <p className="text-small">Stars</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-small flex items-center gap-1"><FaCodeFork className='text-emerald-500' /> {github.repos[props.index].forks_count}</p>
          <p className="text-small">Forks</p>
        </div>
        <div className="flex gap-1" onClick={() => github.repos[props.index].license?.url && window.open(github.repos[props.index].license?.url, "_blank")}>
          <p className={`${github.repos[props.index].license?.spdx_id && 'underline md:cursor-pointer'} font-semibold text-small flex items-center gap-1`}><HiBadgeCheck className='text-purple-500 text-medium' /> {github.repos[props.index].license?.spdx_id ?? 'No License.'}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GithubCard