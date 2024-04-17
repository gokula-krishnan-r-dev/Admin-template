import React, { useState } from "react";

const ImageGallery = ({ provider }: any) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const images = [
    { label: "Identification Proof", src: provider.identification_proof },
    { label: "PAN Card", src: provider.pan_proof },
    { label: "Address Proof", src: provider.addressproof },
    {
      label: "Licence and Certificates",
      src: provider.licence_and_certificates[0],
    },
  ];

  const handleMouseEnter = (src: any) => {
    setFullScreenImage(src);
  };

  const handleMouseLeave = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      {images.map((image, index) => (
        <div key={index} className="space-y-2">
          <h4 className="text-base font-semibold">{image.label}</h4>
          <img
            className="w-full h-48 object-cover rounded-lg shadow-lg"
            src={image.src}
            alt={image.label}
            onClick={() => handleMouseEnter(image.src)}
          />
        </div>
      ))}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <img
            src={fullScreenImage}
            alt="Full Screen"
            className="max-w-full rounded-3xl w-full h-full max-h-[500px]"
          />
          <button
            className="absolute px-6 py-4 bg-gray-800 rounded-full top-8 right-4 text-white"
            onClick={() => setFullScreenImage(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
