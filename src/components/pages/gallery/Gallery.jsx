import { useState } from "react";
import "./Gallery.css";

/* =================================
   SCHOOL LIFE
================================= */

import students1 from "../../../assets/images/academics1.jpeg";
import students2 from "../../../assets/images/academics2.jpeg";
import students3 from "../../../assets/images/students-fash.jpeg";
import students4 from "../../../assets/images/school-life.jpeg";
import students5 from "../../../assets/images/stude-life3.jpeg";


/* ==============================
   ACADEMICS
================================= */

import academics1 from "../../../assets/images/academics1.jpeg";
import academics2 from "../../../assets/images/highschool.jpeg";
import academics3 from "../../../assets/images/senior.jpeg";
import academics4 from "../../../assets/images/students-aviation.jpeg";
import academics5 from "../../../assets/images/teacher-aviation.jpeg";


/* ==============================
   TEACHERS
================================= */

import teachers1 from "../../../assets/images/teachers-r1.jpeg";
import teachers2 from "../../../assets/images/teachers-r2.jpeg";
import teachers3 from "../../../assets/images/teachers-r3.jpeg";
import teachers4 from "../../../assets/images/teachers-r4.jpeg";
import teachers5 from "../../../assets/images/teachers3.jpeg";
import teachers6 from "../../../assets/images/teachers4.jpeg";


/* =================================
   FASHION
================================= */

import fashion1 from "../../../assets/images/fashion-pri.jpeg";
import fashion2 from "../../../assets/images/fashion-win.jpeg";
import fashion3 from "../../../assets/images/fashi-2.jpeg";
import fashion4 from "../../../assets/images/fash-1.jpeg";
import fashion5 from "../../../assets/images/fash-selfie.jpeg";


/* =================================
   SPORTS
================================= */

import sports1 from "../../../assets/images/basketball-trophy-silver.jpeg";
import sports2 from "../../../assets/images/sports-alb.jpeg";
import sports3 from "../../../assets/images/sports2.jpeg";
import sports4 from "../../../assets/images/boys-bake.jpeg";
import sports5 from "../../../assets/images/girls-bake2.jpeg";
import sports6 from "../../../assets/images/sports-bake.jpeg";


/* =================================
   SCHOOL TRIPS
================================= */

import schTrip1 from "../../../assets/images/geo-trip.jpeg";
import schTrip2 from "../../../assets/images/senate.jpeg";
import schTrip3 from "../../../assets/images/girl-front.jpeg";
import schTrip4 from "../../../assets/images/stu-lake.jpeg";
import schTrip5 from "../../../assets/images/teachers-lake.jpeg";
import schTrip6 from "../../../assets/images/all.jpeg";


/* =================================
   ACHIEVEMENTS
================================= */
import Achiev1 from "../../../assets/images/basketball-trophy-silver.jpeg";
import Achiev2 from "../../../assets/images/celebrating-small.jpeg";
import Achiev3 from "../../../assets/images/girl-front.jpeg";
import Achiev4 from "../../../assets/images/naturing.jpeg";
import Achiev5 from "../../../assets/images/talent-1.jpeg";
import Achiev6 from "../../../assets/images/talent.jpeg";

/* =================================
   GALLERY SECTIONS
================================= */

const gallerySections = [

  /* =================================
     SCHOOL LIFE
  ================================= */

  {
    category: "School Life",

    description:
      "Everyday moments that reflect friendship, learning, growth and life within the Oloolua community.",

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
      },

      {
        image: students4,
        title: "Life Beyond the Classroom"
      },

       {
        image: students5,
        title: "Building lasting relationships"
      }

    ]
  },


  /* =================================
     ACADEMICS
  ================================= */

  {
    category: "Academics",

    description:
      "Learning, discovery and academic experiences that inspire curiosity, innovation and excellence.",

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
      },

      {
        image: academics4,
        title: "Students in Learning"
      },

      {
        image: academics5,
        title: "Innovation & Discovery"
      }

    ]
  },


  /* =================================
     ACHIEVEMENTS
  ================================= */

  {
    category: "Achievements",

    description:
      "Celebrating accomplishments, milestones and moments of excellence across Oloolua Senior School.",

    images: [

      {
        image: Achiev1,
        title: "Celebrating Achievement"
      },

      {
        image: Achiev2,
        title: "Excellence & Success"
      },

      {
        image: Achiev3,
        title: "Academic Achievement"
      },

      {
        image: Achiev4,
        title: "Celebrating Our Learners"
      },

      {
        image: Achiev5,
        title: "Celebrating Talent"
      },

      {
        image: Achiev6,
        title: "Celebrating Hardwork"
      }

    ]
  },


  /* =================================
     SPORTS
  ================================= */

  {
    category: "Sports",

    description:
      "Moments from the field where learners develop teamwork, discipline, confidence and sporting talent.",

    images: [

      {
        image: sports1,
        title: "Basketball Trophy"
      },

      {
        image: sports2,
        title: "Oloolua Sports"
      },

      {
        image: sports3,
        title: "Sports Competition"
      },

      {
        image: sports4,
        title: "Teamwork & Competition"
      },

      {
        image: sports5,
        title: "Student Athletes"
      },

       {
        image: sports6,
        title: "Naturing Talents"
      }

    ]
  },


  /* =================================
     SCHOOL TRIPS
  ================================= */

  {
    category: "School Trips",

    description:
      "Learning beyond the classroom through educational trips, adventures and shared experiences.",

    images: [

      {
        image: schTrip1,
        title: "Educational Experiences"
      },

      {
        image: schTrip2,
        title: "Students on Tour"
      },

      {
        image: schTrip3,
        title: "Learning Beyond the Classroom"
      },

      {
        image: schTrip4,
        title: "Exploring Together"
      },

      {
        image: schTrip5,
        title: "Memorable School Trips"
      },

      {
        image: schTrip6,
        title: "Memorable School Trips"
      }


    ]
  },


  /* =================================
     FASHION
  ================================= */

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


  /* =================================
     TEACHERS
  ================================= */

  {
    category: "Teachers",

    description:
      "Meet some of the dedicated educators who guide, mentor and inspire learners at Oloolua Senior School.",

    images: [

      {
        image: teachers1,
        title: "Our Teaching Team"
      },

      {
        image: teachers2,
        title: "Dedicated Educators"
      },

      {
        image: teachers3,
        title: "Inspiring Excellence"
      },

      {
        image: teachers4,
        title: "Our Teachers"
      },
      {
        image: teachers5,
        title: "Building Strong Relationships"
      },
      {
        image: teachers6,
        title: "Creating Memories"
      }

    ]
  }

];


/* =================================
   FILTER CATEGORIES
================================= */

const categories = [
  "All",
  "School Life",
  "Academics",
  "Achievements",
  "Sports",
  "School Trips",
  "Fashion",
  "Teachers"
];


/* =================================
   GALLERY COMPONENT
================================= */

const Gallery = () => {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);


  /* =================================
     FILTER SECTIONS
  ================================= */

  const visibleSections =
    activeCategory === "All"
      ? gallerySections
      : gallerySections.filter(
          section =>
            section.category === activeCategory
        );


  return (

    <main className="galleryPage">


      {/* =============================
          HERO
      ================================= */}

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
            fashion, sports, achievements, school trips
            and memorable moments from the Oloolua community.
          </p>

        </div>

      </section>



      {/* =================================
          INTRO
      ================================= */}

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
          friendships, school trips and celebrations,
          every experience contributes to the story
          of Oloolua Senior School.
        </p>

      </section>



      {/* =============================
          FILTERS
      ================================= */}

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



        {/* =============================
            GALLERY SECTIONS
        ================================= */}

        <div className="gallerySections">

          {visibleSections.map(section => (

            <section
              className="galleryCategorySection"
              key={section.category}
            >


              {/* CATEGORY HEADING */}

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



              {/* =============================
                  IMAGE GRID
              ================================= */}

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



      {/* =================================
          LIGHTBOX
      ================================= */}

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