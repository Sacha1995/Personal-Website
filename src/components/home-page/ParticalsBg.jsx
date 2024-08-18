import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      setInit(true); // Set state after particles are initialized
    };

    initializeParticles();
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      background: {
        color: {
          value: "#111111",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 0.4,
            size: 5,
          },
        },
        resize: true,
      },
      particles: {
        color: {
          value: "#999",
        },
        links: {
          color: "#999",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Particles id="tsparticles" options={options} />
        {children}
      </>
    );
  }

  return <></>;
};

export default ParticlesBg;
