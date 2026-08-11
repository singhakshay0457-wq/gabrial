import React, { useState } from 'react';
import { INSTAGRAM_POSTS } from '../data/content';
import { Instagram, Heart, Eye, X } from 'lucide-react';

export const InstagramGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#F3F0E6] border-b border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#E2DDD0]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold block mb-2">
              Social Editorial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917]">
              Life in Gabriel
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1917] hover:text-[#C5A059] transition-colors border-b border-[#1C1917] hover:border-[#C5A059] pb-1 w-max"
          >
            <Instagram className="w-4 h-4 text-[#C5A059]" />
            <span>Follow @gabrieljewellery</span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedImage(post.image)}
              className="group relative aspect-square bg-[#FAF9F5] overflow-hidden cursor-pointer border border-[#E2DDD0]"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1C1917]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                <Instagram className="w-6 h-6 text-[#C5A059] mb-2" />
                <div className="flex items-center gap-1.5 text-xs font-medium mb-2">
                  <Heart className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  <span>{post.likes} Likes</span>
                </div>
                <p className="text-[11px] font-light text-[#D4CEBF] line-clamp-2">
                  {post.caption}
                </p>
                <span className="mt-3 text-[10px] uppercase tracking-widest text-[#E8D3A7] border border-[#C5A059]/50 px-2.5 py-1">
                  View Editorial
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-2xl w-full bg-[#1C1917] p-2 border border-[#C5A059]/40" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-[#C5A059] transition-colors rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Editorial View"
              className="w-full max-h-[80vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-center">
              <p className="text-xs text-[#E8D3A7] uppercase tracking-widest font-medium">Gabriel Jewellery Atelier Gallery</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
