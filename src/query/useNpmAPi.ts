import { useQuery } from "react-query";

type RegistryNPM = {
    package: {
        name: string;
        scope: string;
        version: string;
        description: string;
        keywords: string[],
        date: string;
        links: {
            npm: string;
            homepage?: string;
            repository?: string;
            bugs?: string;
        },
        author: {
            name: string;
            username?: string;
            email?: string;
            url?: string;
        },
        publisher: {
            username: string;
            email: string;
        },
        maintainers: {
            username: string;
            email: string;
        }[]
    },
    flags: {
        insecure: 0
    },
    score: {
        final: 0.34600645066066765,
        detail: {
            quality: 0.794167791567818,
            popularity: 0.002047887935425729,
            maintenance: 0.3058267211797807
        }
    },
    searchScore: 8.284842e-7
}

type ResultPayload = {
    registry: RegistryNPM[]
}

type QueryPayload = {
    data?: any;
    error: unknown;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    status: "idle" | "error" | "loading" | "success";
}

const useNpmAPi = () => {
    const { data, error, isError, isLoading, isSuccess, status } = useQuery(['npmAPi'], async () => {
        const registryAPi = await fetch('https://registry.npmjs.org/-/v1/search?text=author:zaadevofc&size=99999')
        return { registry: await registryAPi.json() }
    })

    let result: ResultPayload = { registry: data?.registry?.objects }
    let queryPayload: QueryPayload = { error, isError, isLoading, isSuccess, status }

    return { ...queryPayload, data: result }
}

export default useNpmAPi