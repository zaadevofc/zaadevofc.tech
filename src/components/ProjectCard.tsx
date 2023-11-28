import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import useListing from "../hooks/useListing";

const ProjectCard = (props: any) => {
  const { projects } = useListing()

  return (
    <Card shadow="none" className={`${props.class} w-full !font-[Behtix] text-slate-200 border border-slate-600 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-600 to-indigo-700`}>
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar  className={'bg-transparent'} radius="none" size="sm" src={projects[props.index].image} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-[16px] tracking-wide text-white font-bold leading-none">{projects[props.index].title}</h4>
            <h5 className="text-small text-slate-300 tracking-wider">zaadevofc</h5>
          </div>
        </div>
        <Button onClick={() => window.open(projects[props.index].url, '_blank')} color="default" radius="full" size="sm">Visit</Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px">
          {projects[props.index].desc ?? 'No description.'}
        </p>
      </CardBody>
      <CardFooter className="gap-1">
        {projects[props.index].stack.map((x) => (
          <Chip size='sm'>{x}</Chip>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard