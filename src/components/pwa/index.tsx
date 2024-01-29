import { useEffect } from 'react';
import { css } from '@emotion/react';

const PWA = function () {
  console.log(location);
  useEffect(() => {
    const imgUrl = new URL('@/../vite.svg', import.meta.url).href;
    console.log(imgUrl);
    const manifest = {
      name: 'pwa demo',
      short_name: 'name',
      start_url: location.href,
      scope: location.href,
      display: 'standalone',
      background_color: 'black',
      theme_color: 'white',
      orientation: 'portrait-primary',
      description: 'A pwa demo',
      icons: [
        {
          src: imgUrl,
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: imgUrl,
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: imgUrl,
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: imgUrl,
          sizes: '144x144',
          type: 'image/png',
        },
      ],
    };
    const el = document.createElement('link');
    const content = encodeURIComponent(JSON.stringify(manifest));
    const href = 'data:application/manifest+json,' + content;
    el.setAttribute('rel', 'manifest');
    el.setAttribute('href', href);
    document.head.append(el);
  }, []);

  return (
    <div
      css={css`
        font-size: 100px;
        padding: 20px;
        button {
          width: fit-content;
          margin: 10px;
        }
      `}
    ></div>
  );
};
export default PWA;
