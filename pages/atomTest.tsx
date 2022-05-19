import { useRecoilValue } from "recoil";
import { countState } from "../components/atoms";

export default function AtomTest() {
  //atomの値の操作を定義（read only)
  const count = useRecoilValue(countState);
  return (
    <>
      <h1>こちらは確認為の別ページです</h1>
      <p>遷移後もcountのデータが残っているかを確認します</p>
      <div>
        <p>count:{count}</p>
      </div>
      <hr />
    </>
  );
}
