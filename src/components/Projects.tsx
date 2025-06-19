import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'carousel', label: 'Carousel' },
    { id: 'thumbnails', label: 'Thumbnails' },
    { id: 'posters', label: 'Posters' },
    { id: 'videos', label: 'Videos' },
    { id: 'reels', label: 'Reels' }
  ];

  const projects = [
    // CAROUSEL 1
    {
      id: 1,
      title: "3D Model Carousel",
      category: "carousel",
      description: "Interactive carousel showcasing 3D models and visual effects with smooth transitions and dynamic animations.",
      images: [
        "/uploads/carousel1.jpg",
        "/uploads/carousel2.jpg", 
        "/uploads/carousel3.jpg",
        "/uploads/carousel4.jpg",
        "/uploads/carousel5.jpg",
        "/uploads/carousel6.jpg",
        "/uploads/carousel7.jpg"
      ],
      type: "carousel"
    },

    // THUMBNAILS - Video thumbnails and preview images
    {
      id: 2,
      title: "Video Thumbnail 1",
      category: "thumbnails",
      description: "Professional video thumbnail design for content marketing.",
      thumbnail: "/uploads/thumbnail.png",
      type: "image"
    },
    {
      id: 3,
      title: "Video Thumbnail 2",
      category: "thumbnails",
      description: "Engaging thumbnail design for social media content.",
      thumbnail: "/uploads/Thumbnail1.png",
      type: "image"
    },
    {
      id: 4,
      title: "Video Thumbnail 3",
      category: "thumbnails",
      description: "Creative thumbnail design for promotional videos.",
      thumbnail: "/uploads/thumbnail2.png",
      type: "image"
    },
    {
      id: 5,
      title: "Video Thumbnail 4",
      category: "thumbnails",
      description: "Professional thumbnail design for corporate content.",
      thumbnail: "/uploads/thumbnail3.png",
      type: "image"
    },
    {
      id: 6,
      title: "Video Thumbnail 5",
      category: "thumbnails",
      description: "Eye-catching thumbnail design for entertainment content.",
      thumbnail: "/uploads/thumbnail4.png",
      type: "image"
    },

    // POSTERS - Design work and promotional materials
    {
      id: 7,
      title: "Dance Event Poster",
      category: "posters",
      description: "Promotional poster for dance event with vibrant colors and dynamic typography.",
      thumbnail: "/uploads/Dance Poster.png",
      type: "image"
    },
    {
      id: 8,
      title: "Dance Performance Poster",
      category: "posters",
      description: "Performance poster design with elegant layout and artistic elements.",
      thumbnail: "/uploads/Dance Poster2.png",
      type: "image"
    },
    {
      id: 9,
      title: "Event Information Design",
      category: "posters",
      description: "Event information and details poster with clear communication design.",
      thumbnail: "/uploads/Dance Information .png",
      type: "image"
    },
    {
      id: 10,
      title: "Event Signage Design",
      category: "posters",
      description: "No parking and event signage with professional layout and clear messaging.",
      thumbnail: "/uploads/Dance No Parking Board.png",
      type: "image"
    },
    {
      id: 11,
      title: "Food Photography - Burger",
      category: "posters",
      description: "Delicious burger photography for marketing with appetizing presentation.",
      thumbnail: "/uploads/Burger Poster.jpg",
      type: "image"
    },
    {
      id: 12,
      title: "Automotive Photography",
      category: "posters",
      description: "Professional car photography with dramatic lighting and composition.",
      thumbnail: "/uploads/Cars.png",
      type: "image"
    },
    {
      id: 13,
      title: "Brand Introduction Design",
      category: "posters",
      description: "Company brand introduction visual with modern design elements.",
      thumbnail: "/uploads/intro page.png",
      type: "image"
    },
    {
      id: 14,
      title: "Company Introduction Visual",
      category: "posters",
      description: "Professional company introduction design with corporate aesthetics.",
      thumbnail: "/uploads/intro.png",
      type: "image"
    },
    {
      id: 15,
      title: "Brand Identity Design",
      category: "posters",
      description: "Complete brand identity package with comprehensive visual elements.",
      thumbnail: "/uploads/introo.png",
      type: "image"
    },

    // VIDEOS - Full length commercial videos (not reels)
    {
      id: 16,
      title: "Coca Cola Commercial",
      category: "videos",
      description: "Dynamic commercial showcasing Coca Cola's refreshing appeal with cinematic visuals and compelling storytelling.",
      video: "/uploads/Coca Cola.mp4",
      type: "video"
    },
    {
      id: 17,
      title: "Real Estate Promotional",
      category: "videos",
      description: "Luxury real estate promotional video with stunning aerial shots and elegant property showcases.",
      video: "/uploads/realestate .mp4",
      type: "video"
    },
    {
      id: 18,
      title: "Gym Advertisement",
      category: "videos",
      description: "Energetic gym advertisement promoting fitness lifestyle with dynamic workout sequences.",
      video: "/uploads/GYM Ad.mp4",
      type: "video"
    },
    {
      id: 19,
      title: "Product Launch",
      category: "videos",
      description: "Creative product launch video for Orange brand with innovative visual effects.",
      video: "/uploads/Orange (1).mp4",
      type: "video"
    },
    {
      id: 20,
      title: "Trial Project",
      category: "videos",
      description: "Corporate trial project showcasing our capabilities in professional video production.",
      video: "/uploads/Trial.mp4",
      type: "video"
    },

    // REELS - Short form content
    {
      id: 21,
      title: "Podcast Reel",
      category: "reels",
      description: "Professional podcast promotional content with engaging visuals and audio highlights.",
      video: "/uploads/Podcast Reel.mp4",
      type: "video"
    },
    {
      id: 22,
      title: "After Effects Showcase",
      category: "reels",
      description: "Motion graphics and visual effects compilation showcasing our creative capabilities.",
      video: "/uploads/After Effcets.mp4",
      type: "video"
    },
    {
      id: 23,
      title: "Professional Advertisement",
      category: "reels",
      description: "Professional advertisement with multiple angles and dynamic editing.",
      video: "/uploads/Formal reel.mp4",
      type: "video"
    },
    {
      id: 24,
      title: "Gym Workout Reel",
      category: "reels",
      description: "High-energy workout compilation with motivational music and dynamic transitions.",
      video: "/uploads/Gym.mp4",
      type: "video"
    },

    // CAROUSEL 2
    {
      id: 25,
      title: "Explanatory Carousel",
      category: "carousel",
      description: "Educational carousel with step-by-step process explanations and interactive elements for better user engagement.",
      images: [
        "/uploads/Carousel 2_01.jpg",
        "/uploads/carousel 2_02.jpg",
        "/uploads/carousel2_03.jpg",
        "/uploads/carousel2_04.jpg",
        "/uploads/carousel2_05.jpg",
        "/uploads/carousel2_06.jpg"
      ],
      type: "carousel"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const scrollLeft = () => {
    const container = document.getElementById('projects-carousel');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('projects-carousel');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setCarouselIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCarouselIndex(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const nextImage = () => {
    if (selectedProject?.type === "carousel") {
      setCarouselIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.type === "carousel") {
      setCarouselIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section id="projects" className="py-20 md:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Explore our diverse portfolio of video production work. From commercials to corporate films, 
              each project showcases our commitment to quality and creativity.
            </p>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full px-6 py-3 text-base font-medium"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Carousel */}
          <div className="relative">
            <div 
              id="projects-carousel"
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-80 md:w-96">
                  <div className="group relative bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div 
                      className="relative aspect-video overflow-hidden cursor-pointer bg-black flex items-center justify-center"
                      onClick={() => openModal(project)}
                    >
                      {project.type === "video" ? (
                        <video
                          src={project.video}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-black"
                          muted
                          loop
                        />
                      ) : project.type === "carousel" ? (
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-black"
                        />
                      ) : (
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-black"
                        />
                      )}
                      {project.type === "video" && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button size="lg" className="rounded-full">
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                      )}
                      {project.type === "carousel" && (
                        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                          {project.images.length} images
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" onClick={() => openModal(project)}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={scrollRight}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = 'https://wa.me/9535858066'}>
              Contact Us
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleModalBackdropClick}
        >
          <div className="relative w-full h-full md:w-3/4 md:h-3/4 max-w-7xl max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Modal Content */}
            <div className="flex-1 flex flex-col md:flex-row h-full">
              {/* Image/Video Section */}
              <div className="flex-1 flex items-center justify-center p-4 relative">
                <div className="w-full h-full flex items-center justify-center">
                  {selectedProject.type === "video" ? (
                    <video
                      controls
                      className="max-w-full max-h-full object-contain rounded-lg"
                      src={selectedProject.video}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : selectedProject.type === "carousel" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={selectedProject.images[carouselIndex]}
                        alt={`${selectedProject.title} - Image ${carouselIndex + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                      
                      {/* Carousel Navigation */}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {carouselIndex + 1} / {selectedProject.images.length}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-80 bg-background/95 backdrop-blur-sm p-6 pt-16 border-l border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium uppercase tracking-wide">
                      {selectedProject.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {selectedProject.type}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>

                  {selectedProject.type === "video" && (
                    <div className="pt-4">
                      <Button className="w-full" size="lg">
                        <Play className="w-5 h-5 mr-2" />
                        Play Video
                      </Button>
                    </div>
                  )}

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Click outside or press ESC to close
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
