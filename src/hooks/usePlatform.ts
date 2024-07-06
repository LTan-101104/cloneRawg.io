import { PlatformParent } from "../interface/interface";
import useData from "./useData"

export const usePlatform = () => {
    return useData<PlatformParent>('platforms/lists/parents');

}