import { useRouter } from "next/dist/client/router";

export interface IPostDetaiPageProps {

}
const PostDetaiPage = (props: IPostDetaiPageProps) => {

    const router = useRouter()
    return (
        <div>
            <h1>PostDetaiPage</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    )
}

export default PostDetaiPage;