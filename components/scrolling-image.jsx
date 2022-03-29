/**
 * @file components/scrolling-image.jsx
 */

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollingImage({
  source,
  vertical = false,
  steps = 500,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentStep((s) => (s + 1) % steps);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentStep, steps]);

  return (
    <Image
      src={source}
      layout="fill"
      objectFit="cover"
      objectPosition={
        vertical === true
          ? `0px ${(currentStep / steps) * 100}%`
          : `${(currentStep / steps) * 100}% 0px`
      }
      {...rest}
    />
  );
}
