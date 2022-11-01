import { useEffect } from "react";
import NProgress from "nprogress";

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  let circleCommonClasses = "h-2.5 w-2.5 bg-blue rounded-full";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses}`}></div>
    </div>
  );
};

export default SuspenseLoader;
