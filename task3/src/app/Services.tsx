import React from "react";

const services = [
  {
    title: "Big Data & Analytics",
    image: "/big data analysis.jpg",
    description:
      "We are committed to providing quality products and services that add value to your business and to run your business successfully.",
  },
  {
    title: "Consultancy",
    image: "/consultancy.jpg",
    description:
      "Our consulting and strategic group offers Business Transformations, Information Technology Transformation, and Human Resource Transformations.",
  },
  {
    title: "HR & staffing",
    image: "/HR.jpg",
    description:
      "Blackcoffer offers a full complement of human resource and recruitment services.",
  },
  {
    title: "Cybersecurity",
    image: "/cybersecurity.jpg",
    description:
      "Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow..",
  },
  {
    title: "Consultancy",
    image: "/consultant.jpg",
    description:
      "Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.",
  },
  {
    title: "Sustainability",
    image: "/sustainability.jpg",
    description:
      "Sustainability spans environmental, social and governance issues. Today every organization must embrace sustainability for future competitiveness.",
  },
  {
    title: "Cloud",
    image: "/cloud.jpg",
    description:
      "Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people around the world.",
  },
  {
    title: "Metaverse",
    image: "/metaverse.jpg",
    description:
      "The physical and virtual worlds are blending. The metaverse offers new ways to connect, create and consume.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-16 px-12 bg-transparent">
      <h2 className="text-4xl font-normal text-white mb-8">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative rounded-none overflow-hidden group h-[400px] flex items-start"
          >
            {/* Service image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay always */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Service title */}
            <h3 className="absolute top-6 left-6 text-2xl font-bold text-white z-10">
              {service.title}
            </h3>
            {/* Hover overlay for ALL services */}
            <div className="
              absolute inset-0 flex flex-col justify-between p-6
              bg-gradient-to-br from-[#2d133b]/90 to-[#1a0a23]/80
              opacity-0 translate-x-full
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-500 z-20
            ">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white text-lg font-normal">{service.description}</p>
              </div>
              <button className="flex items-center gap-2 text-white font-semibold mt-4">
                Expand
                <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 