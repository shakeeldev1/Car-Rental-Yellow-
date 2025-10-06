import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PopularDestination() {
 const countries = [
  { 
    img: "/src/assets/home/c1.svg", 
    title: "Spain", 
    places: [
      { name: "Sagrada Familia, Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded" },
      { name: "Alhambra Palace, Granada", image: "https://img.freepik.com/free-photo/cathedral-transfiguration-lord-huesca_1398-4437.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Park Güell, Barcelona", image: "https://img.freepik.com/free-photo/panoramic-view-barcelona-multiple-building-s-roofs-view-from-parc-guell-spain_1268-18048.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Royal Palace, Madrid", image: "https://img.freepik.com/free-photo/palacio-de-cibeles-summer-night-madrid_1398-2172.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" }
    ]
  },
  { 
    img: "/src/assets/home/c2.svg", 
    title: "Italy", 
    places: [
      { name: "Colosseum, Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5" },
      { name: "Venice Canals", image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0" },
      { name: "Leaning Tower of Pisa", image: "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297190.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Amalfi Coast", image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5" }
    ]
  },
  { 
    img: "/src/assets/home/c3.svg", 
    title: "Portugal", 
    places: [
      { name: "Belém Tower, Lisbon", image: "https://img.freepik.com/free-photo/tower-belem-surrounded-by-sea-buildings-cloudy-sky-portugal_181624-10409.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Pena Palace, Sintra", image: "https://img.freepik.com/free-photo/medieval-bridge-with-gate-tower_1398-3161.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Douro Valley", image: "https://img.freepik.com/free-photo/famous-solutre-rock-with-vineyards-burgundy-france_268835-695.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Algarve Coast", image: "https://img.freepik.com/free-photo/sideways-woman-enjoying-view-with-copy-space_23-2148699837.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" }
    ]
  },
  { 
    img: "/src/assets/home/c4.svg", 
    title: "France", 
    places: [
      { name: "Eiffel Tower, Paris", image: "https://img.freepik.com/free-photo/famous-eiffel-tower-paris-autumn_268835-834.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Mont Saint-Michel", image: "https://img.freepik.com/premium-photo/mont-saint-michel-abbey_70898-2274.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "French Riviera", image: "https://img.freepik.com/free-photo/aegean-sea-coast-greece-loutra-buildings-located-near-rocky-cliffs-greenery-blue-water-view-from-drone_1268-16375.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Louvre Museum", image: "https://img.freepik.com/free-photo/famous-terreaux-square-lyon-city-by-night-france_268835-1081.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" }
    ]
  },
  { 
    img: "/src/assets/home/c5.svg", 
    title: "Croatia", 
    places: [
      { name: "Dubrovnik Old Town", image: "https://img.freepik.com/free-photo/mesmerizing-view-fort-bokar-along-walls-dubrovnik-s-medieval-old-city-croatia_181624-50313.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Plitvice Lakes", image: "https://img.freepik.com/free-photo/panoramic-view-forest-river_23-2148927940.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Diocletian's Palace, Split", image: "https://img.freepik.com/free-photo/weather-effects-collage-concept_23-2150062093.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      
    ]
  },
  { 
    img: "/src/assets/home/c6.svg", 
    title: "Greece", 
    places: [
      { name: "Acropolis, Athens", image: "https://img.freepik.com/free-photo/temple-architecture-from-ancient-greek-civilization_23-2151664676.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Santorini", image: "https://img.freepik.com/free-photo/santorini-typographic-optical-illusion_23-2151005906.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Mykonos Windmills", image: "https://img.freepik.com/premium-photo/traditional-windmill-against-clear-blue-sky_1048944-601859.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Meteora Monasteries", image: "https://img.freepik.com/free-photo/beautiful-shot-mountains-greenery-blue-sky-cuenca-spain_181624-18022.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" }
    ]
  },
  { 
    img: "/src/assets/home/c7.svg", 
    title: "United Arab Emirates", 
    places: [
      { name: "Burj Khalifa, Dubai", image: "https://img.freepik.com/free-photo/futuristic-dubai-landscape_23-2151339742.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Sheikh Zayed Mosque, Abu Dhabi", image: "https://img.freepik.com/free-photo/look-from-afar-awesome-buildings-shekh-zayed-grand-mosque_1304-3215.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Palm Jumeirah", image: "https://img.freepik.com/free-photo/dubai-marina_158595-1999.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" },
      { name: "Dubai Mall", image: "https://img.freepik.com/premium-photo/city-retail-customer-girl-business_926199-2891533.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" }
    ]
  },
  { 
    img: "/src/assets/home/c8.svg", 
    title: "United States", 
    places: [
      { 
        name: "Statue of Liberty, NYC", 
        image: "https://img.freepik.com/free-photo/statue-liberty-liberty-island-new-york_268835-780.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Golden Gate Bridge, SF", 
        image: "https://img.freepik.com/free-photo/golden-gate-bridge-body-water-near-rock-formations-sunset-san-francisco-california_181624-3228.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Grand Canyon", 
        image: "https://img.freepik.com/premium-photo/high-angle-view-man-sitting-cliff-against-canyon_1048944-19573835.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      }
    ]
  },
  { 
    img: "/src/assets/home/c9.svg", 
    title: "Malta", 
    places: [
      { 
        name: "Blue Grotto", 
        image: "https://img.freepik.com/premium-photo/view-sea-seen-through-rock-formation_1048944-5982141.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Mdina Old City", 
        image: "https://img.freepik.com/premium-photo/tuscany-italy-april-4-2017-view-street-old-town-san-gimignano-province-siena-tuscany-italy-april-4-2017_522472-3286.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "St. John's Co-Cathedral", 
        image: "https://img.freepik.com/free-photo/church_1127-3160.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Blue Lagoon, Comino", 
        image: "https://img.freepik.com/free-photo/beautiful-outdoor-swimming-pool-with-sea-ocean-white-cloud-blue-sky_74190-8835.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      }
    ]
  },
  { 
    img: "/src/assets/home/c10.svg", 
    title: "Morocco", 
    places: [
      { 
        name: "Jemaa el-Fnaa, Marrakech", 
        image: "https://img.freepik.com/free-photo/view-koutoubia-mosque-night-marrakech_268835-3935.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Hassan II Mosque, Casablanca", 
        image: "https://img.freepik.com/free-photo/hassan-ii-mosque-surrounded-by-water-buildings-blue-sky-sunlight_181624-26376.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Chefchaouen Blue City", 
        image: "https://img.freepik.com/free-photo/backpacker-explores-intricate-alleyways-jodhpur39s-blue-city-india-experiencing-vibrant-colors-cultural-richness_73899-44095.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Sahara Desert", 
        image: "https://img.freepik.com/free-photo/sahara-desert-sunlight-blue-sky-morocco-africa_181624-12415.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      }
    ]
  },
  { 
    img: "/src/assets/home/c12.svg", 
    title: "Turkey", 
    places: [
      { 
        name: "Hagia Sophia, Istanbul", 
        image: "https://img.freepik.com/free-photo/blue-mosque-night-city-istanbul-turkey_628469-10.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Cappadocia", 
        image: "https://img.freepik.com/premium-photo/hot-air-balloon-flying-rock-landscape-cappadocia-turkey_146671-12868.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
      { 
        name: "Pamukkale Thermal Pools", 
        image: "https://img.freepik.com/free-photo/beautiful-view-te-puia-geyser-rotorua-new-zealand_181624-45943.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80"
      },
     
    ]
  },
  { 
    img: "/src/assets/home/c15.svg", 
    title: "Gambia", 
    places: [
      { 
        name: "Kachikally Crocodile Pool", 
        image: "https://images.unsplash.com/photo-1622012072517-169619cc24d0"
      },
      { 
        name: "Banjul Arch 22", 
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
      },
      { 
        name: "Makasutu Culture Forest", 
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      },
      { 
        name: "Gambia River", 
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
      }
    ]
  },
  // { 
  //   img: "/src/assets/home/c16.svg", 
  //   title: "Tunisia", 
  //   places: [
  //     { 
  //       name: "Amphitheatre of El Jem", 
  //       image: "https://images.unsplash.com/photo-1604937464994-04dd5d14318e"
  //     },
  //     { 
  //       name: "Sidi Bou Said", 
  //       image: "https://images.unsplash.com/photo-1554926757-6bffff2c9a70"
  //     },
  //     { 
  //       name: "Carthage Ruins", 
  //       image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5"
  //     },
  //     { 
  //       name: "Sahara Desert Oasis", 
  //       image: "https://images.unsplash.com/photo-1578314115812-78d10edc91c3"
  //     }
  //   ]
  // },
  // { 
  //   img: "/src/assets/home/c17.svg", 
  //   title: "Poland", 
  //   places: [
  //     { 
  //       name: "Wawel Castle, Krakow", 
  //       image: "https://images.unsplash.com/photo-1612821962044-1fb26a40cc1a"
  //     },
  //     { 
  //       name: "Warsaw Old Town", 
  //       image: "https://images.unsplash.com/photo-1540307049752-16e7887e2213"
  //     },
  //     { 
  //       name: "Auschwitz-Birkenau", 
  //       image: "https://images.unsplash.com/photo-1596765798031-b3b3e2183e87"
  //     },
  //     { 
  //       name: "Tatra Mountains", 
  //       image: "https://images.unsplash.com/photo-1579482937747-d119c676d1a9"
  //     }
  //   ]
  // },
  // { 
  //   img: "/src/assets/home/c18.svg", 
  //   title: "Senegal", 
  //   places: [
  //     { 
  //       name: "Gorée Island", 
  //       image: "https://images.unsplash.com/photo-1526404079166-74e4c3ad3c3f"
  //     },
  //     { 
  //       name: "Lake Retba Pink Lake", 
  //       image: "https://images.unsplash.com/photo-1576013551621-0a8e0c85ef6c"
  //     },
  //     { 
  //       name: "Bandia Wildlife Reserve", 
  //       image: "https://images.unsplash.com/photo-1546979601-0cc9a98e82a6"
  //     },
  //     { 
  //       name: "African Renaissance Monument", 
  //       image: "https://images.unsplash.com/photo-1533967724128-661cc2e59e51"
  //     }
  //   ]
  // }
];


  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const scrollRef = useRef(null);
  const countryRefs = useRef({});

  // Function to scroll to active country
  const scrollToActiveCountry = (countryTitle) => {
    const element = countryRefs.current[countryTitle];
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Calculate scroll position to center the active element
      const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  // Function to handle next button click
  const handleNext = () => {
    const currentIndex = countries.findIndex(c => c.title === activeCountry.title);
    const nextIndex = (currentIndex + 1) % countries.length;
    const nextCountry = countries[nextIndex];
    setActiveCountry(nextCountry);
    scrollToActiveCountry(nextCountry.title);
  };

  // Function to handle previous button click
  const handlePrev = () => {
    const currentIndex = countries.findIndex(c => c.title === activeCountry.title);
    const prevIndex = currentIndex === 0 ? countries.length - 1 : currentIndex - 1;
    const prevCountry = countries[prevIndex];
    setActiveCountry(prevCountry);
    scrollToActiveCountry(prevCountry.title);
  };

  // Function to handle country click
  const handleCountryClick = (country) => {
    setActiveCountry(country);
    scrollToActiveCountry(country.title);
  };

  // Fixed autoplay that loops properly
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = countries.findIndex(c => c.title === activeCountry.title);
      const nextIndex = (currentIndex + 1) % countries.length;
      const nextCountry = countries[nextIndex];
      setActiveCountry(nextCountry);
      scrollToActiveCountry(nextCountry.title);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCountry, countries]);

  // Scroll to active country when component mounts
  useEffect(() => {
    scrollToActiveCountry(activeCountry.title);
  }, []);

  return (
    <div className="py-10 w-full sm:max-w-5xl mx-auto px-4">
      <h1 className="text-center text-4xl font-semibold mb-8">
        Our Most Popular Destinations
      </h1>

      {/* Country List with scroll + arrows */}
      <div className="relative mt-6">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-blue-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-12 scroll-smooth hide-scrollbar"
        >
          {countries.map((value) => (
            <div
              key={value.title}
              ref={(el) => (countryRefs.current[value.title] = el)}
              onClick={() => handleCountryClick(value)}
              className={`flex items-center gap-2 px-4 py-3 cursor-pointer border-b-2 min-w-max transition-all duration-300 ${activeCountry.title === value.title
                  ? "border-blue-600 text-blue-600 font-bold scale-105 bg-blue-50 rounded-lg"
                  : "border-transparent text-gray-600 hover:text-blue-500"
                }`}
            >
              <img
                src={value.img}
                alt={value.title}
                className="h-8 w-8 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h1 className="font-semibold whitespace-nowrap">{value.title}</h1>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-blue-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Active Country Title */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Popular in {activeCountry.title}
        </h2>
      </div>

      {/* Related Places for active country */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCountry.places.map((place, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop";
              }}
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{place.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Add custom CSS to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}