"use client";
import React from "react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import { Card } from "antd";
import { useRouter } from "next/navigation";

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
          <button
            onClick={() => router.push(`/${place.id}`)}
            className="border-none bg-[#773dbd] text-white px-5 py-2 rounded-lg"
          >
            Visitar
          </button>
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
