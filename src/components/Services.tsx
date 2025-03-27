import { useState } from 'react';
type ExpertiseArea = {
  id: number;
  title: string;
  icon: string;
  color: string;
};
const expertiseAreas: ExpertiseArea[] = [{
  id: 1,
  title: "Analysing",
  icon: "/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png",
  color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-300"
}, {
  id: 2,
  title: "Creation",
  icon: "/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png",
  color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-300"
}, {
  id: 3,
  title: "Designing",
  icon: "/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png",
  color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300"
}, {
  id: 4,
  title: "Video Editing",
  icon: "/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png",
  color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300"
}, {
  id: 5,
  title: "Motion Graphics",
  icon: "/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png",
  color: "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-300"
}, {
  id: 6,
  title: "Sounds",
  icon: "/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png",
  color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300"
}];
export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return <section id="expertise" className="py-24 px-4 md:px-6 bg-[#fcfcfc] dark:bg-[#0a192f]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-heading-1 mb-4 animate-fade-in dark:text-[#ccd6f6]">
            Area of Expertise
          </h2>
          <p className="text-body-large text-[#2d2d2d]/70 dark:text-[#8892b0] max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Specialized skills in visual storytelling and digital content creation to elevate your brand.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {expertiseAreas.map((area, index) => <div key={area.id} onMouseEnter={() => setHoveredId(area.id)} onMouseLeave={() => setHoveredId(null)} style={{
          animationDelay: `${0.1 + index * 0.1}s`
        }} className="expertise-item group animate-fade-in px-[30px] py-[10px] mx-0">
              <div className={`expertise-icon-wrapper ${area.color}`}>
                <img src={area.icon} alt={area.title} className="w-8 h-8 object-contain" />
              </div>
              
              <h3 className="text-heading-3 mb-1 text-center text-lg font-medium dark:text-[#ccd6f6] group-hover:text-[#1d4ed8] dark:group-hover:text-[#64ffda] transition-colors duration-300">
                {area.title}
              </h3>
            </div>)}
        </div>
      </div>
    </section>;
}