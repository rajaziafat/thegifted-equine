//Using Animation for the Components and Make from Framer motion

//Custom Delay
export const fadeInFromLeft = (customDelay) => ({
  initial: { x: -40, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: customDelay,
    },
  },
  viewport: { once: true },
});
export const fadeInFromRight = (customDelay) => ({
  initial: { x: 40, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: customDelay,
    },
  },
  viewport: { once: true },
});
export const fadeInFromUp = (customDelay) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: customDelay,
    },
  },
  viewport: { once: true },
});
