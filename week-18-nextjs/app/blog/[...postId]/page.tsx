import axios from "axios"


export default async  function blogPage({params}:{params: any}){
    const postId = (await params).postId;
    return <div>
        Blog page {postId.join('/')}
    </div>
}