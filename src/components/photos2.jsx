const breakpoints = [3840, 2400, 1280, 640, 384, 256, 128, 96, 64, 48];

const localPhotos = [
  { src: '/res-1.png', width: 3080, height: 1280 },
  { src: '/res-2.png', width: 1780, height: 1620 },
  { src: '/res-3.png', width: 1280, height: 720 },
  { src: '/res-4.png', width: 1280, height: 721 },
  { src: '/res-5.png', width: 1680, height: 1620 },
  { src: '/res-8.png', width: 1280, height: 607 },
  { src: '/res-7.png', width: 1280, height: 608 },
  { src: '/res-9.png', width: 1280, height: 1549 },
  { src: '/res-10.png', width: 1280, height: 720 },
  { src: '/res.png', width: 1280, height: 694 },
];

const photos2 = localPhotos.map((photo) => ({
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

export default photos2;
