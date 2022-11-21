import { memo, useMemo } from "react";

const MainComponent = () => {
  const makeLog = useMemo(() => console.log("hi from MainComponent"), []); // function to make logs from MainComponent

  return <ChildComponent makeLog={makeLog} />;
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>say Hi from ChildComponent</button>
));
