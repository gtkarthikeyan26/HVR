import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// Portfolio data
const portfolioData = {
  performance: [{
    id: 1,
    title: "Kai's Journey",
    category: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/nGfGtf-zBGE"
  }, {
    id: 2,
    title: "Adem's Experience",
    category: "Instagram Reel",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/DDHmAzdyaJM/?igsh=aXB4dTRjbHVpdDlo"
  }, {
    id: 3,
    title: "Sai Kriti's Progress",
    category: "Instagram Reel",
    thumbnail: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/DCl9Oosy2zl/?igsh=MTZxenp1M3F4ODdibg=="
  }, {
    id: 4,
    title: "Trial Sessions Overview",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/L4d_uPajwRc?feature=share"
  }, {
    id: 5,
    title: "Revision Techniques",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=800&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/vYbQ21drq3w?si=lYBiQiJM_1J9OiLm"
  }, {
    id: 6,
    title: "Student Hobbies",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/sOsAdBjG5vc?si=1iRV3cfAA65Tj9V9"
  }],
  technical: [{
    id: 7,
    title: "Product Showcase",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1508387104394-d13e1b497f85?w=800&auto=format&fit=crop",
    videoUrl: "https://youtu.be/vHE70oyuUII?si=r9beg3Phu5ssYw9d"
  }, {
    id: 8,
    title: "MM Interview Feature",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=800&auto=format&fit=crop",
    videoUrl: "https://youtu.be/uJu_dwbpyBM"
  }, {
    id: 9,
    title: "Gamenation Highlight",
    category: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/DAV2EpISGJ7/?igsh=MWJ6Nmt3aWcxMnZlMA=="
  }, {
    id: 10,
    title: "Renee's Story",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=800&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/-xZst6ZUNso?feature=share"
  }, {
    id: 11,
    title: "Traditional Wear Collection",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=800&auto=format&fit=crop",
    videoUrl: "https://youtube.com/shorts/UpcKTDQiRSg"
  }],
  analysisCreativity: [{
    id: 12,
    title: "Textile Industry Overview",
    category: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/C-h34LCy5c9/?igsh=MWs4d2Fja2ZiM3Y3OQ=="
  }, {
    id: 13,
    title: "Text Sector Analysis",
    category: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/C9w-v7LolUx/?igsh=MWwzM21hN3ZuZW9neQ=="
  }, {
    id: 14,
    title: "CSK Shares Analysis",
    category: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/DATP84dyqqK/?igsh=MXZxYnltcHJvZGE3eg=="
  }, {
    id: 15,
    title: "Recycling Market Insights",
    category: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=800&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/C9PkofoyLWn/?igsh=MXVjaTlua3p2b2k2eQ=="
  }]
}

type PortfolioCategory = "performance" | "technical" | "analysisCreativity";
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("performance");
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const categoryRef = useRef<HTMLDivElement>(null);

  // Handle category change with scroll to projects
  const handleCategoryChange = (category: PortfolioCategory) => {
    if (category) {
      setActiveCategory(category);

      // Add a small delay to allow state to update before scrolling
      setTimeout(() => {
        if (categoryRef.current) {
          categoryRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  // Track image loading state
  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  };
  return <section id="portfolio" className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-4 animate-fade-in text-gradient">Portfolio Showcase</h2>
          <p className="text-body-large text-accent-4 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Explore my creative works across different categories and styles, 
            showcasing versatility and technical expertise.
          </p>
        </div>

        {/* Custom Toggle Group - Border removed */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
          <ToggleGroup type="single" value={activeCategory} onValueChange={handleCategoryChange} className="">
            <ToggleGroupItem value="performance" className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all duration-250 ease-in-out", activeCategory === "performance" ? "bg-[#2563eb] text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] hover:brightness-110" : "bg-[#e5e7eb] text-[#6b7280] hover:bg-[#d1d5db]")}>
              Performance
            </ToggleGroupItem>
            <ToggleGroupItem value="technical" className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all duration-250 ease-in-out", activeCategory === "technical" ? "bg-[#2563eb] text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] hover:brightness-110" : "bg-[#e5e7eb] text-[#6b7280] hover:bg-[#d1d5db]")}>
              Technical
            </ToggleGroupItem>
            <ToggleGroupItem value="analysisCreativity" className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all duration-250 ease-in-out", activeCategory === "analysisCreativity" ? "bg-[#2563eb] text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] hover:brightness-110" : "bg-[#e5e7eb] text-[#6b7280] hover:bg-[#d1d5db]")}>Creativity Analysis </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Portfolio Grid */}
        <div ref={categoryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData[activeCategory].map((item, index) => <div key={item.id} className="portfolio-item rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in" style={{
          animationDelay: `${0.1 + index * 0.1}s`
        }}>
              <div className="relative aspect-video overflow-hidden">
                <img src={item.thumbnail} alt={item.title} className={`w-full h-full object-cover transition-all duration-1000 ${imagesLoaded[item.id] ? 'image-loaded' : 'image-loading'}`} onLoad={() => handleImageLoad(item.id)} />
                
                <div className="portfolio-item-overlay">
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-dark p-3 rounded-full hover:bg-accent-blue hover:text-white transition-colors duration-300">
                    <Play className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-5 bg-white dark:bg-dark">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-heading-3 font-medium">{item.title}</h3>
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="text-accent-4 hover:text-accent-blue transition-colors duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-body-small text-accent-4">{item.category}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}