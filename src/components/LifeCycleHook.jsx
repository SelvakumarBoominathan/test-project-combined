import { useEffect, useState } from "react";

const LifeCycleHook = () => {
  const [mounted, setMounted] = useState(false);

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  // Mounted Phase leave the dependency array empty
  // Unmounted Phase should be in the same useEffect of mounted
  useEffect(() => {
    if (!mounted) {
      alert("Component Mounted");
      setMounted(true);
    }

    // Return the call function which will execute during the unmount phase
    return () => {
      // Statements to be executed during the unmount phase
      alert("Bye from the component");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Updation with Mounted phase handled carefully
  useEffect(() => {
    if (mounted) {
      if (like) {
        alert("Nice You like our Post");
      } else {
        alert("Sorry, we will improve");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like]);

  return (
    <>
      <h1>Simple Component to Learn LifeCycle Hook</h1>
      <i
        className={`fa-${like ? "solid" : "regular"} fa-heart fa-2x`}
        onClick={handleLike}
      ></i>
    </>
  );
};

export default LifeCycleHook;
