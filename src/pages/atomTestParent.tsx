import { useRecoilState } from "recoil";
import { countState } from "../../components/atoms";
export default function AtomTestParent() {
  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);

  //count increment処理
  const increment = (c: number) => {
    return c + 1;
  };
  return (
    <>
      <h1>Recoilで管理したcountを永続化するテスト</h1>
      <p>count:{count}</p>
      <button onClick={() => setCount(increment)}>count increment</button>
    </>
  );
}
