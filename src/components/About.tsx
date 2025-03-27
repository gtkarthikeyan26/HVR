import { Download, CheckCircle } from 'lucide-react';
export default function About() {
  return <section id="about" className="py-24 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Resume card */}
          <div className="bg-light dark:bg-dark p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div>
                <h2 className="text-heading-1 mb-2 text-gradient">Storyteller & <span className="text-accent-blue">Visual Creator</span></h2>
                
                <p className="text-body-large mb-4">
                  I'm a professional video editor and motion graphics designer with a passion for 
                  storytelling through visual media. With experience across different sectors and 
                  industries, I bring a unique perspective to every project.
                </p>
                
                <p className="text-body mb-6">
                  My approach to editing focuses on three axes - purpose, story, and theme - creating 
                  compelling narratives that resonate with audiences. I specialize in creating content 
                  that not only looks professional but also delivers your message effectively.
                </p>
              </div>
              
              {/* Two column layout for Education and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-heading-3 mb-4">Education</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent-blue w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">B.Sc. Multimedia and Animation</p>
                        <p className="text-sm text-accent-4">Vellore Institute of Technology</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent-blue w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Drone Operator Certification</p>
                        <p className="text-sm text-accent-4">Madras Institute of Technology</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-heading-3 mb-4">Experience</h3>
                  <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent-blue w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Video Editor & Creative Designer</p>
                        <p className="text-sm text-accent-4">Mentor Match (Oct 2024 - April 2025)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent-blue w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Video Editor</p>
                        <p className="text-sm text-accent-4">Money Vittae (June 2024 - Sept 2024)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent-blue w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Video Editor/Graphic Designer</p>
                        <p className="text-sm text-accent-4">Estudio International (July 2021 - May 2024)</p>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
              
              {/* Work Experience & Achievements */}
              <div className="mb-6">
                <h3 className="text-heading-3 mb-4">Working Experience & Achievements</h3>
                
                <div className="space-y-6">
                  {/* Mentor Match */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Mentor Match, <span className="italic">Video editor & Creative Designer</span></h4>
                      <span className="text-sm text-accent-4">Oct 2024 - April 2025</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Created a video for email follow up, achieving a 90% customer engagement rate.</li>
                      <li>Streamlined design workflows and repurposed assets, Doubling production speed.</li>
                      <li>Ideated a ad and creative in 'Parent Ease' content, worked on production line from creative to landing page, which was the best AD with most acquisition in the USA.</li>
                      <li>Designed a top-tier Pitch deck, Website and product video with CEO's collaboration.</li>
                    </ul>
                  </div>
                  
                  {/* Vittae Money */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Vittae Money, <span className="italic">Video editor</span></h4>
                      <span className="text-sm text-accent-4">June 2024 - Sept 2024</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Advanced video editing and on-site shooting drove 5x Instagram engagement in 3 months.</li>
                      <li>Optimised production quality with a planned green screen setup, elevating final output.</li>
                    </ul>
                  </div>
                  
                  {/* Estudio International */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Estudio International, <span className="italic">Video editor & Creative designer</span></h4>
                      <span className="text-sm text-accent-4">July 2021 - May 2024</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Shot and edited 700 products from multiple angles, yielding 2800 optimised images for E-commerce website in 2 months.</li>
                      <li>Crafted a bespoke logo and designed a user-centric website with UI/UX Skillset.</li>
                      <li>Led 'Alchemy-the Art show' production at Kesakku Phoenix, Bengaluru (Sept 2021).</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Software Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Illustrator", "Figma"].map((software, index) => <span key={index} className="px-3 py-1 bg-accent-2 dark:bg-accent-1 rounded-full text-sm">
                      {software}
                    </span>)}
                </div>
              </div>
              
              {/* Download Resume Button */}
              <div>
                <a href="/lovable-uploads/753fa809-8201-47b9-9e23-5c43711539f7.png" download="Gokul_HVR_Resume.png" className="bg-accent-blue text-white rounded-full hover:bg-accent-blue/90 transition-colors duration-300 flex items-center justify-center gap-2 hover:translate-y-[-2px] py-3 px-3">
                  Download Resume
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}