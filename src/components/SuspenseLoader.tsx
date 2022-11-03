import { useEffect } from "react";
import NProgress from "nprogress";

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  let circleCommonClasses = "h-3 w-3 bg-black rounded-full";

  return (
    <div className="flex justify-center m-6">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default SuspenseLoader;
