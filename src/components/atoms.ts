import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//test
export const countState = atom({
    key: "count",
    default: 0,
    effects_UNSTABLE: [persistAtom] //追加
});