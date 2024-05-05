const breakpoints = [3840, 2400, 1280, 640, 384, 256, 128, 96, 64, 48];

const localPhotos = [
  { src: '/com-1.png', width: 1780, height: 1280 },
  { src: '/com-2.png', width: 1780, height: 1620 },
  { src: '/com-3.png', width: 1280, height: 720 },
  { src: '/com-4.png', width: 1280, height: 721 },
  { src: '/com-5.png', width: 1280, height: 1620 },
  { src: '/com-6.png', width: 1280, height: 607 },
  { src: '/com-7.png', width: 1280, height: 608 },
  { src: '/com-8.png', width: 1280, height: 720 },
  { src: '/com-9.png', width: 1280, height: 1549 },
  { src: '/com-10.png', width: 1280, height: 720 },
  { src: '/com-11.png', width: 1280, height: 694 },
  { src: '/com-12.png', width: 1280, height: 1620 },
  { src: '/com-13.png', width: 1280, height: 720 },
  { src: '/com-14.png', width: 1280, height: 1440 },
  { src: '/com-15.png', width: 1280, height: 1620 },
  { src: '/com-16.png', width: 1280, height: 810 },
  { src: '/com-17.png', width: 1280, height: 610 },
  { src: '/com-18.png', width: 1280, height: 720 },
];

const photos = localPhotos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photo.src, // Use the same local photo for all breakpoints
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;
