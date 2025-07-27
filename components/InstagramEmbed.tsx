"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function InstagramEmbed() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/dshsirishfootball/"
        data-instgrm-version="14"
      ></blockquote>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
