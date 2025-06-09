"use client";

import { useEffect, useState } from "react";

export default function DynamicSVG({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const [svgContent, setSvgContent] = useState("");
  const [classSvg, setClassSvg] = useState("");

  useEffect(() => {
    const arr_cn = className?.split(" ");
    let res = "";
    arr_cn?.forEach((item) => {
      res += `[&_svg]:${item} `;
    });
    setClassSvg(res);
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((svg) => {
        const arr_cn = className?.split(" ");
        let res = "";
        arr_cn?.forEach((item) => {
          res += `[&_svg]:${item} `;
        });
        setSvgContent(svg);
      })
      .catch((err) => console.error("Error loading SVG:", err));
  }, [classSvg, url]);

  return (
    <div
      className={`inline-block ${classSvg}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
