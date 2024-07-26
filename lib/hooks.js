const useResponsive = () => {
  // screen resolutions
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // update the state on the initial load
    onResizeHandler();

    // assign the event
    setUp();

    return () => {
      // remove the event
      cleanUp();
    };
  }, [setUp, cleanUp]);

  // update the state on window resize
  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    setState({ isMobile, isTablet, isDesktop });
  };

  // debounce the resize call
  const debouncedCall = useDebounce(onResizeHandler, 500);

  // add event listener
  const setUp = () => {
    window.addEventListener("resize", debouncedCall, false);
  };

  // remove the listener
  const cleanUp = () => {
    window.removeEventListener("resize", debouncedCall, false);
  };

  return state;
};
