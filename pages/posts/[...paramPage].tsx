import { useRouter } from "next/dist/client/router";

export interface IParamPageProps {

}
const ParamPage = (props: IParamPageProps) => {

    const router = useRouter()
    return (
        <div>
            <h1>ParamPage</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    )
}

export default ParamPage;