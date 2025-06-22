import { influencerGalleryData } from '@/utils/data/Gallery';
import React from 'react';

export function Gallery() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center px-4 py-10 mx-auto">
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8"> Gallery</h2>

        {/*gallery-container */}
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-full mx-auto">
          {influencerGalleryData.map(function (item) {
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-full"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full max-w-full h-64 max-h-64 object-cover"
                />
                <div className="p-4 text-center max-w-full">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
