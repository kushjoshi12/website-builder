export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'https://fastly.picsum.photos/id/530/200/300.jpg?hmac=pl2pzOmYOiMa6E_Ddf_SFQVGjDvmZ1xgj-JznVHuUsg',
      height: 350,
      width: 250,
    },
    {
      src: 'https://fastly.picsum.photos/id/530/200/300.jpg?hmac=pl2pzOmYOiMa6E_Ddf_SFQVGjDvmZ1xgj-JznVHuUsg',
      height: 350,
      width: 250,
    },
    {
      src: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
      height: 350,
      width: 250,
    },
  ];
  res.json(assets);
};
