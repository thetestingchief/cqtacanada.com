'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/maple-leaf.svg',
    alt: 'Red Maple Leaf',
  },
  {
    src: '/maple-leaf.svg',
    alt: 'Red Maple Leaf',
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="relative bg-white">
        <img src={slides[index].src} alt={slides[index].alt} className="w-full h-64 object-contain bg-white p-6" />
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-accent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
