// Asset URLs - All images now on Cloudinary with compression
export const ASSETS = {
  // Hero images (compressed and uploaded to Cloudinary)
  hero: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423665/landing/hero.jpg',
  hero1: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423668/landing/hero1.jpg',
  hero2: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423669/landing/hero2.jpg',
  hero3: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423671/landing/hero3.jpg',
  hero4: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423672/landing/hero4.jpg',
  
  // Section images (compressed and uploaded to Cloudinary)
  value: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423678/landing/value.jpg',
  how: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423673/landing/how.jpg',
  more: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423674/landing/more.jpg',
  preview: 'https://res.cloudinary.com/dz9dmfrvr/image/upload/v1761423676/landing/preview.jpg',
  
  // Logos (using local files for now)
  logo1: '/landing/logos/1.png',
  logo2: '/landing/logos/2.png',
  logo3: '/landing/logos/3.png',
  logo4: '/landing/logos/4.png',
  logo5: '/landing/logos/5.png',
  logo6: '/landing/logos/6.png',
} as const;
