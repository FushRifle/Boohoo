import React from "react";

const collections= [
  {
    title: "Trending: Apparel",
    description: "Vintage, Streetwear, Japanese Brand + More",
    images: ["/trending/trending1.png", "/trending/trending2.jpg", "/trending/trending3.png", "/trending/trending4.png"],
  },
  {
    title: "Staff Picks: Light Layers",
    description: "From Grailed",
    images: ["/trending/trending4.png", "/trending/staff.png", "/trending/staff2.png", "/trending/staff3.png"],
  },
  {
    title: "Trending: Footwear",
    description: "Nike, Jordan Brand, Maison Margiela +More",
    images: ["/trending/foot1.png", "/trending/foot2.png", "/trending/foot3.png", "/trending/foot4.png"],
  },
];

const accessories= [
    {
        title: "Trending: Accessories",
        description: "Vintage, Streetwear, Supreme + More ",
        images: ["/access/ace1.png", "/access/ace2.png", "/access/ace3.png", "/access/ace4.png"],
    } 
]

const largeImage1 = "/trending/chrome.jpg";
const largeImage2 = "/trending/chrome2.jpg";
const largeImage3 = "/trending/chrome3.jpg";
const largeImage4 = "/trending/chrome4.jpg";

const singleCollection = collections[0];

const menImages = [
    "/men/men1.png",
    "/men/men2.png",
    "/men/men3.png",
    "/men/men4.png",
    "/men/men5.png",
    "/men/men6.png",
  ];
  const womenImages = [
    "/women/women1.png",
    "/women/women2.png",
    "/women/women3.png",
    "/women/women4.png",
    "/women/women5.png",
    "/women/women6.png",
  ];
  
const Contents = () => {
  return (
    <div className="p-6 bg-gray-100 space-y-6">

        {/* Section 1 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
        {collections.map((collection, index) => (
          <div key={index} className=" overflow-hidden transition-transform transform hover:scale-105 cursor-pointer p-4">
            {/* Header */}
            <div className="mb-2 border-b pb-2">
              <p className="text-xs text-gray-500">{collection.description}</p>
              <p className="text-md font-semibold text-gray-900">{collection.title}</p>
            </div>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {collection.images.map((src, i) => (
                <div key={i} className="w-full h-50 bg-gray-200 overflow-hidden rounded-md">
                  <img src={src} alt={`${collection.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

        {/* Section 2 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
        
  {/* Single Collection Section */}
  {accessories.map((accessory, index) => (
        <div key={index} className="space-y-4">
          <p className="text-gray-600 text-xs">{accessory.description}</p>
          <h3 className="text-md font-semibold text-gray-900">{accessory.title}</h3>
          

         
            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {accessory.images.map((src, i) => (
                <div key={i} className="w-full h-50 bg-gray-200 overflow-hidden rounded-md">
                  <img src={src} alt={`${accessory.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
        </div>
      ))}

{/* Large Image Section */}
<div className="relative col-span-2 h-[500px] bg-gray-300 rounded-lg overflow-hidden shadow-md">
  {/* Background Image */}
  <img src={largeImage1} alt="Featured Collection" className="w-full h-full object-cover" />

 {/* Text Overlay - Bottom Left */}
<div className="absolute bottom-6 left-10 bg-white w-[320px] md:w-[360px] lg:w-[400px] h-auto px-6 py-4 rounded-lg text-gray-900 text-lg font-semibold shadow-lg flex flex-col justify-center items-start space-y-1">
  <p className="text-sm text-gray-600">In Demand</p>
  <p className="text-xl font-bold">Chrome Hearts</p>
  <p className="text-sm text-gray-500 leading-snug">
    Dagger Pendants, Cross Denim, and Everything in Between.
  </p>
</div>


</div>

      </div>

      {/*  Section 3 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
        {collections.map((collection, index) => (
          <div key={index} className=" overflow-hidden transition-transform transform hover:scale-105 cursor-pointer p-4">
            {/* Header */}
            <div className="mb-2 border-b pb-2">
              <p className="text-xs text-gray-500">{collection.description}</p>
              <p className="text-md font-semibold text-gray-900">{collection.title}</p>
            </div>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {collection.images.map((src, i) => (
                <div key={i} className="w-full h-50 bg-gray-200 overflow-hidden rounded-md">
                  <img src={src} alt={`${collection.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Section 4 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">

        {/* Large Image Section */}
<div className="relative col-span-2 h-[500px] bg-gray-300 rounded-lg overflow-hidden shadow-md">
  {/* Background Image */}
  <img src={largeImage2} alt="Featured Collection" className="w-full h-full object-cover" />

 {/* Text Overlay - Bottom Left */}
<div className="absolute bottom-6 left-10 bg-white w-[320px] md:w-[360px] lg:w-[400px] h-auto px-6 py-4 rounded-lg text-gray-900 text-lg font-semibold shadow-lg flex flex-col justify-center items-start space-y-1">
  <p className="text-sm text-gray-600">Editorial</p>
  <p className="text-xl font-bold">Emerging Designers to Watch</p>
  <p className="text-sm text-gray-500 leading-snug">Meet the newest names working with Jean Paul Gaultier, Stone Island, Nike and more.</p>
</div>


</div>
  {/* Single Collection Section */}
  <div className="col-span-1 overflow-hidden transition-transform transform hover:scale-105 cursor-pointer p-6">
    {/* Header */}
    <div className="mb-4 border-b pb-3">
      <p className="text-sm text-gray-500">{singleCollection.description}</p>
      <p className="text-lg font-semibold text-gray-900">{singleCollection.title}</p>
    </div>

    {/* 2x2 Image Grid */}
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      {singleCollection.images.map((src, i) => (
        <div key={i} className="h-40 bg-gray-200 overflow-hidden rounded-md">
          <img src={src} alt={`${singleCollection.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>
      </div>

        {/* Section 5 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
  {/* Single Collection Section */}
  <div className="col-span-1 overflow-hidden transition-transform transform hover:scale-105 cursor-pointer p-6">
    {/* Header */}
    <div className="mb-4 border-b pb-3">
      <p className="text-sm text-gray-500">{singleCollection.description}</p>
      <p className="text-lg font-semibold text-gray-900">{singleCollection.title}</p>
    </div>

    {/* 2x2 Image Grid */}
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      {singleCollection.images.map((src, i) => (
        <div key={i} className="h-40 bg-gray-200 overflow-hidden rounded-md">
          <img src={src} alt={`${singleCollection.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>

{/* Large Image Section */}
<div className="relative col-span-2 h-[500px] bg-gray-300 rounded-lg overflow-hidden shadow-md">
  {/* Background Image */}
  <img src={largeImage3} alt="Featured Collection" className="w-full h-full object-cover" />

 {/* Text Overlay - Bottom Left */}
<div className="absolute bottom-6 left-10 bg-white w-[320px] md:w-[360px] lg:w-[400px] h-auto px-6 py-4 rounded-lg text-gray-900 text-lg font-semibold shadow-lg flex flex-col justify-center items-start space-y-1">
  <p className="text-sm text-gray-600">Designer Spotlight</p>
  <p className="text-xl font-bold">Balenciaga</p>
  <p className="text-sm text-gray-500 leading-snug">Shop distressed hoodies, baggy denim, exaggerated footwear and more.</p>
</div>


</div>


      </div>

      {/* Section 6 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
        {collections.map((collection, index) => (
          <div key={index} className=" overflow-hidden transition-transform transform hover:scale-105 cursor-pointer p-4">
            {/* Header */}
            <div className="mb-2 border-b pb-2">
              <p className="text-xs text-gray-500">{collection.description}</p>
              <p className="text-md font-semibold text-gray-900">{collection.title}</p>
            </div>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {collection.images.map((src, i) => (
                <div key={i} className="w-full h-50 bg-gray-200 overflow-hidden rounded-md">
                  <img src={src} alt={`${collection.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

        {/* Section 7 */}
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
        {/* Large Image Section */}
<div className="relative col-span-2 h-[500px] bg-gray-300 rounded-lg overflow-hidden shadow-md">
  {/* Background Image */}
  <img src={largeImage4} alt="Featured Collection" className="w-full h-full object-cover" />

 {/* Text Overlay - Bottom Left */}
<div className="absolute bottom-6 left-10 bg-white w-[320px] md:w-[360px] lg:w-[400px] h-auto px-6 py-4 rounded-lg text-gray-900 text-lg font-semibold shadow-lg flex flex-col justify-center items-start space-y-1">
  <p className="text-sm text-gray-600">Editorial</p>
  <p className="text-xl font-bold">Shayne Oliver is Far From Anonymous</p>
  <p className="text-sm text-gray-500 leading-snug">A brief history of the designer behind Anonymous Club</p>
</div>


</div>
  {/* Single Collection Section */}
  <div className="col-span-1 overflow-hidden transition-transform transform hover:scale-105 cursor-pointer p-6">
    {/* Header */}
    <div className="mb-4 border-b pb-3">
      <p className="text-sm text-gray-500">{singleCollection.description}</p>
      <p className="text-lg font-semibold text-gray-900">{singleCollection.title}</p>
    </div>

    {/* 2x2 Image Grid */}
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      {singleCollection.images.map((src, i) => (
        <div key={i} className="h-40 bg-gray-200 overflow-hidden rounded-md">
          <img src={src} alt={`${singleCollection.title} - Image ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>
      </div>

      {/* Section 8 - Menswear */}
    <div className="mx-auto max-w-7xl mt-10">
  <div className="mb-4">
    <h1 className="text-lg font-bold text-gray-900">Shop Menswear</h1>
  </div>

  <div className="grid grid-cols-6 gap-2">
    {menImages.map((src, index) => (
      <div key={index} className="h-40 bg-gray-200 rounded-md overflow-hidden">
        <img src={src} alt={`Menswear Image ${index + 1}`} className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
    </div>

    {/* Section 9 - Womenswear */} 
    <div className="mx-auto max-w-7xl mt-10">
  <div className="mb-4">
    <h1 className="text-lg font-bold text-gray-900">Shop Womenswear</h1>
  </div>

  <div className="grid grid-cols-6 gap-2">
    {womenImages.map((src, index) => (
      <div key={index} className="h-40 bg-gray-200 rounded-md overflow-hidden">
        <img src={src} alt={`Womenswear Image ${index + 1}`} className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
    </div>

    </div>
  );
};

export default Contents;
