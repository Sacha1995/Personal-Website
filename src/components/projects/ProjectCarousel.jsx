"use client";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { useEffect, useState } from "react";
import { carouselItemsInfo } from "@/config";
import CarouselItem from "./CarouselItem";
import Button from "../reusable-code/Button";
import { useRef, useCallback } from "react";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // [Autoplay()]
  const [initialized, setInitialized] = useState(false);
  const tweenFactor = useRef(0);

  useEffect(() => {
    if (emblaApi) {
      setInitialized(true);
    }
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselItemsInfo.map((item) => {
            const { id, src, alt, title, description, technologies } = item;
            return (
              <CarouselItem
                key={id}
                title={title}
                srcWebsite={"https://github.com/Sacha1995/holiDough-front-end"}
                description={description}
                src={src}
                alt={alt}
                technologies={technologies}
                className="embla__slide"
              />
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>

      <div className="containerBtnProjects">
        <Button
          buttonText="Front End"
          link="https://github.com/Sacha1995/holiDough-front-end"
          target="_blank"
          src="./arrow-right.svg"
          alt="right pointing arrow"
          className="rightArrow"
        />
        <Button
          buttonText="Back End"
          link="https://github.com/Sacha1995/holiDough-back-end"
          target="_blank"
          src="./arrow-right.svg"
          alt="right pointing arrow"
          className="rightArrow"
        />
      </div>
    </section>
  );
};

export default ProjectCarousel;
