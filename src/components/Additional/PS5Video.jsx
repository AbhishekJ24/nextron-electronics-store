import React, { useEffect, useRef } from "react";

function PS5Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <figure className="media-block__figure opacity@mobile--100 opacity@tablet--100 opacity@desktop--100">
      <div className="vsc-controller"></div>

      <video
        ref={videoRef}
        className="media-block__video lozad lazy-loaded"
        autoPlay
        muted
        playsInline
        webkitPlaysInline
        poster="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23"
      >
        <source
          src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2023/ps5-overview/hero/video-hero/ps5-slim-overview-video-hero-01-en-08nov23.mp4"
          type="video/mp4"
        />
      </video>

      <picture className="media-block__img lozad">
        <source
          srcSet="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$4000px$"
          media="(min-width: 3000px)"
        />
        <source
          srcSet="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$3200px$"
          media="(min-width: 1920px)"
        />
        <source
          srcSet="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$2400px$"
          media="(min-width: 1367px)"
        />
        <source
          srcSet="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$1600px$"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$1200px$"
          media="(min-width: 768px)"
        />
        <source
          srcSet="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$800px$"
          media="(min-width: 320px)"
        />

        <noscript>
          <img
            itemprop="contentUrl"
            src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-overview-video-hero-thumbnail-01-en-08nov23?$100px$"
            alt="PS5 model slim consoles standing upright with DualSense wireless controllers at either side"
          />
        </noscript>
      </picture>
    </figure>
  );
}

export default PS5Video;
