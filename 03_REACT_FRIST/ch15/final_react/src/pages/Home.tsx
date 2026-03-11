import PostArea from "../components/home/PostArea";
import SearchArea from "../components/home/SearchArea";

// 메인 페이지
export default function Home () {
  return (
    <main className="page__main">
      {/* <!-- Search --> */}
      <SearchArea />
      {/* <!-- PostArea --> */}
      <PostArea />
    </main>
  )
}