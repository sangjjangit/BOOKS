import ReadArea from "../components/read/ReadArea";
import RecommendationArea from "../components/read/RecommendationArea";

// 글 상세 페이지
export default function Read () {
  return (
    <main className="page__main">
      {/* <!-- ReadArea --> */}
      <ReadArea />
      {/* <!-- RecommendationArea --> */}
      <RecommendationArea />
    </main>
  )
}