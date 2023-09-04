"use client";
import React from "react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import { Card } from "antd";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

import Link from "next/link";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
const MapExample = ({ places }) => {
  const router = useRouter();
  const coordinates = { lat: -18.0058762, lng: -70.2524758 };

  const Marker = ({ place }) => (
    <div className="w-32">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <Image
            src={place.imagen && place.imagen[0]}
            width={400}
            height={400}
            alt=""
            className="w-full h-auto max-h-40 object-cover"
          />
        }
      >
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm">{place.name}</h3>
          <Link
            className={`${poppins.className} hover:underline bg-[#EA6A1F] px-3 py-1 no-underline rounded-full text-white hover:opacity-90`}
            href={`/${place.id}/#inicio`}
          >
            <p className="text-md inline-block">Visitar</p>
          </Link>
        </div>
      </Card>
    </div>
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCehanTfefCDNKVwfBk3PCifZyP8Yj3dxg" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        /*  onChange={""}
        onChildClick={""} 
        lat={-18.0058762} lng={-70.2524758}*/
      >
        {places?.map((place) => (
          <Marker
            key={place.id}
            place={place}
            lat={place.lat}
            lng={place.lon}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapExample;
