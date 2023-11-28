import { useEffect, useState } from "preact/hooks"

const Loading = ({ loading } : { loading: boolean }) => {
    const [load, setLoad] = useState<boolean>(loading || true)
    useEffect(() => {
        setLoad(loading)
    }, [loading])
    if (load) return (
        <div class={'flex h-screen w-screen items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'}>
            <h1 class={'text-4xl animate-pulse'}>{'</zaadevofc>'}</h1>
        </div>
    )

    return (<></>)
}

export default Loading