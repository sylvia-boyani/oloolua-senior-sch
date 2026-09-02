import { useState } from "react";
import "./Gallery.css";

/* =====================
   SCHOOL LIFE
========================= */

import students1 from "../../../assets/images/students.jpeg";
import students2 from "../../../assets/images/6.jpeg";
import students3 from "../../../assets/images/7.jpeg";

/* =========================
   ACADEMICS
========================= */

import academics1 from "../../../assets/images/8.jpeg";
import academics2 from "../../../assets/images/9.jpeg";
import academics3 from "../../../assets/images/10.jpeg";

import teachers1 from "../../../assets/images/teachers-r1.jpeg";
import teachers2 from "../../../assets/images/teachers-r2.jpeg";
import teachers3 from "../../../assets/images/teachers-r3.jpeg";
import teachers4 from "../../../assets/images/teachers-r4.jpeg";


import fashion1 from "../../../assets/images/fashion-pri.jpeg";
import fashion2 from "../../../assets/images/fashion-win.jpeg";
import fashion3 from "../../../assets/images/fashi-2.jpeg";
import fashion4 from "../../../assets/images/fash-1.jpeg";
import fashion5 from "../../../assets/images/fash-selfie.jpeg";

const gallerySections = [

  {
    category: "School Life",

    description:
      "Everyday moments that reflect friendship, learning and life within the Oloolua community.",

    images: [

      {
        image: students1,
        title: "Life at Oloolua"
      },

      {
        image: students2,
        title: "Students Learning Together"
      },

      {
        image: students3,
        title: "Student Community"
      }

    ]
  },


  {
    category: "Academics",

    description:
      "Learning, discovery and academic experiences that inspire curiosity and excellence.",

    images: [

      {
        image: academics1,
        title: "Classroom Learning"
      },

      {
        image: academics2,
        title: "Learning & Discovery"
      },

      {
        image: academics3,
        title: "Academic Excellence"
      }

    ]
  },


  {
    category: "Sports",

    description:
      "Moments from the field where learners develop teamwork, discipline and sporting talent.",

    images: [

      {
        image: students2,
        title: "Sports & Talent"
      },

      {
        image: academics1,
        title: "Teamwork"
      },

      {
        image: students3,
        title: "Student Athletes"
      },

      {
        image: academics2,
        title: "Training Sessions"
      }

    ]
  },


  {
    category: "Fashion",

    description:
      "Celebrating creativity, confidence, culture and personal expression through fashion.",

    images: [

      {
        image: fashion1,
        title: "Fashion Showcase"
      },

      {
        image: fashion2,
        title: "Creative Style"
      },

      {
        image: fashion3,
        title: "Student Fashion"
      },

      {
        image: fashion4,
        title: "Culture & Style"
      },

      {
        image: fashion5,
        title: "Fashion Day"
      },

      {
        image: fashion1,
        title: "Creative Expression"
      }

    ]
  },


  {
    category: "Achievements",

    description:
      "Celebrating accomplishments, milestones and moments of excellence across the school.",

    images: [

      {
        image: academics3,
        title: "Student Achievement"
      },

      {
        image: students1,
        title: "Celebrating Excellence"
      },

      {
        image: academics2,
        title: "Recognising Success"
      }

    ]
  }

];


const categories = [
  "All",
  "School Life",
  "Academics",
  "Sports",
  "Fashion",
  "Achievements"
];


const Gallery = () => {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);


  const visibleSections =
    activeCategory === "All"
      ? gallerySections
      : gallerySections.filter(
          section =>
            section.category === activeCategory
        );


  return (
    <main className="galleryPage">


      {/* =========================
          HERO
      ========================= */}

      <section
        className="galleryHero"
        style={{
          backgroundImage: `url(${students1})`
        }}
      >

        <div className="galleryHeroOverlay"></div>


        <div className="galleryHeroContent">

          <span>
            OUR GALLERY
          </span>

          <h1>

            Moments That

            <strong>
              Tell Our Story.
            </strong>

          </h1>

          <p>
            Explore academic life, student activities,
            fashion, sports, achievements and memorable
            moments from the Oloolua community.
          </p>

        </div>

      </section>



      {/* =========================
          INTRO
      ========================= */}

      <section className="galleryIntro">

        <span>
          THE OLOOLUA EXPERIENCE
        </span>

        <h2>

          Every Moment

          <strong>
            Matters.
          </strong>

        </h2>

        <p>
          From classrooms and competitions to fashion,
          friendships and celebrations, every experience
          contributes to the story of Oloolua Senior School.
        </p>

      </section>



      {/* =========================
          FILTERS
      ========================= */}

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

              onClick={() =>
                setActiveCategory(category)
              }
            >

              {category}

            </button>

          ))}

        </div>



        {/* =========================
            GALLERY SECTIONS
        ========================= */}

        <div className="gallerySections">


          {visibleSections.map(section => (

            <section
              className="galleryCategorySection"
              key={section.category}
            >


              {/* SECTION HEADING */}

              <div className="galleryCategoryHeading">

                <span>
                  OLOOLUA MOMENTS
                </span>

                <h2>
                  {section.category}
                </h2>

                <p>
                  {section.description}
                </p>

              </div>



              {/* IMAGES */}

              <div className="galleryGrid">

                {section.images.map(
                  (item, index) => (

                    <article
                      className={`galleryItem ${
                        index === 0
                          ? "galleryFeatured"
                          : ""
                      }`}
                      key={`${section.category}-${index}`}

                      onClick={() =>
                        setSelectedImage({
                          ...item,
                          category:
                            section.category
                        })
                      }
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                      />


                      <div className="galleryItemOverlay">

                        <span>
                          {section.category}
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                      </div>

                    </article>

                  )
                )}

              </div>

            </section>

          ))}

        </div>

      </section>



      {/* =========================
          LIGHTBOX
      ========================= */}

      {selectedImage && (

        <div
          className="galleryLightbox"

          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            className="galleryClose"

            onClick={() =>
              setSelectedImage(null)
            }
          >

            ×

          </button>


          <img
            src={selectedImage.image}
            alt={selectedImage.title}

            onClick={(event) =>
              event.stopPropagation()
            }
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

    </main>
  );
};

export default Gallery;