import { useState } from "react";
import "./Gallery.css";

import gallery1 from "../../../assets/images/students.jpeg";
import gallery2 from "../../../assets/images/6.jpeg";
import gallery3 from "../../../assets/images/7.jpeg";
import gallery4 from "../../../assets/images/8.jpeg";
import gallery5 from "../../../assets/images/9.jpeg";
import gallery6 from "../../../assets/images/10.jpeg";

const galleryItems = [
  {
    image: gallery1,
    title: "Life at Oloolua",
    category: "School Life"
  },
   {
    image: gallery1,
    title: "students-learning",
    category: "School Life"
  },
   {
    image: gallery1,
    title: "students-at-lunch",
    category: "School Life"
  },
  {
    image: gallery2,
    title: "Learning & Discovery",
    category: "Academics"
  },
  {
    image: gallery3,
    title: "Student Community",
    category: "School Life"
  },
  {
    image: gallery4,
    title: "Sports & Talent",
    category: "Sports"
  },
  {
    image: gallery5,
    title: "Student Achievement",
    category: "Achievements"
  },
  {
    image: gallery6,
    title: "Oloolua Community",
    category: "School Life"
  }
];

const categories = [
  "All",
  "School Life",
  "Academics",
  "Sports",
  "Achievements"
];

const Gallery = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          item => item.category === activeCategory
        );

  return (
    <main className="galleryPage">

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="galleryHero"
        style={{ backgroundImage: `url(${gallery1})` }}
      >

        <div className="galleryHeroOverlay"></div>

        <div className="galleryHeroContent">

          <span>OUR GALLERY</span>

          <h1>
            Moments That
            <strong>Tell Our Story.</strong>
          </h1>

          <p>
            Explore moments from academic life, sports, student
            activities and the Oloolua community.
          </p>

        </div>

      </section>


      {/* =====================================
          INTRO
      ===================================== */}

      <section className="galleryIntro">

        <span>THE OLOOLUA EXPERIENCE</span>

        <h2>
          Every Moment
          <strong>Matters.</strong>
        </h2>

        <p>
          From the classroom to the sports field, every experience
          contributes to the growth, confidence and character of
          our learners.
        </p>

      </section>


      {/* =====================================
          FILTERS
      ===================================== */}

      <section className="gallerySection">

        <div className="galleryFilters">

          {categories.map(category => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =====================================
            GALLERY GRID
        ===================================== */}

        <div className="galleryGrid">

          {filteredGallery.map((item, index) => (

            <article
              className={`galleryItem galleryItem${index + 1}`}
              key={item.image}
              onClick={() => setSelectedImage(item)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="galleryItemOverlay">

                <span>
                  {item.category}
                </span>

                <h3>
                  {item.title}
                </h3>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          LIGHTBOX
      ===================================== */}

      {selectedImage && (

        <div
          className="galleryLightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="galleryClose"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="lightboxCaption">

            <span>
              {selectedImage.category}
            </span>

            <h3>
              {selectedImage.title}
            </h3>

          </div>

        </div>

      )}


      {/* =====================================
          CTA
      ===================================== */}

      <section className="galleryCTA">

        <span>THE JOURNEY CONTINUES</span>

        <h2>
          Be Part Of
          <strong>The Story.</strong>
        </h2>

        <p>
          Discover a school where learners are encouraged to learn,
          participate, lead and achieve.
        </p>

        <a href="/admissions">
          Join Oloolua
        </a>

      </section>

    </main>
  );
};

export default Gallery;