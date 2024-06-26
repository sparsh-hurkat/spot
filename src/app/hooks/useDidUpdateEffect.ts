import { useEffect, useRef } from "react";

const useDidUpdateEffect = (cb, inputs) => {
    const didMountRef = useRef(null);
    useEffect(()=>{
        if(didMountRef.current) cb();
        else didMountRef.current = true;
    }, inputs);
};

export default useDidUpdateEffect;