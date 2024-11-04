"use client";

import { useRef, useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maptilersdk.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const zoomLevel = 14;

  maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY ?? "";

  useEffect(() => {
    if (mapRef.current) return;

    if (containerRef.current) {
      mapRef.current = new maptilersdk.Map({
        container: containerRef.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [107.60981, -6.91959],
        zoom: zoomLevel,
      });

      mapRef.current.on("load", () => {
        console.log("Map loaded");
        setIsLoading(false);

        // Add marker after map is loaded
        new maptilersdk.Marker({ color: "#FF0000" })
          .setLngLat([107.60981, -6.91959])
          .addTo(mapRef.current!);
      });
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [zoomLevel]);

  return (
    <>
      {isLoading ? <Skeleton className="w-full h-96 rounded-xl" /> : <div ref={containerRef} className="w-full h-96 rounded-xl" />}
    </>
  );
};

export default Map;
