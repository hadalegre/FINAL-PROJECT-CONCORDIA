const getAlbumPhotos = () =>
  [...Array(50).keys()].map(i => ({
    src: `/img/album/IMG_${i}.jpeg`,
    placeholder: `/img/album/IMG_${i}.jpeg`
  }));

export { getAlbumPhotos };
