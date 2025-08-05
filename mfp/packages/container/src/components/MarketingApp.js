import { mount as mountMarketing } from "marketing/Marketing";

import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mountMarketing(ref.current);
  }, []);
  return <div ref={ref}></div>;
};
