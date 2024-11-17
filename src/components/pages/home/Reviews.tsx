"use client";

import { motion, useAnimation } from "framer-motion";
import { Title } from "@/components/common/Import";
import { Layout } from "@/components/modules/import";
import { useEffect, useRef } from "react";
import Render from "@/components/fragments/Cards";

export const Reviews = () => {
  return (
    <Layout.Container sizing={["h-max"]}>
      <Title text="Apa yang mereka Katakan?" />
      <ReviewSlider />
    </Layout.Container>
  );
};

const dReviews = [
  {
    avatar: "https://i.pinimg.com/enabled/564x/23/22/b7/2322b7799c1a5161203f0800ac97e716.jpg",
    name: "Jessen",
    job: "Software Engineer",
    content: "Website tabungan ini sangat membantu saya mengatur keuangan dengan mudah. Fitur-fiturnya lengkap dan user-friendly.",
    time: "Senin, 25 September 2006"
  },
  {
    name: "Pak Kissan",
    job: "Graphic Designer",
    content: "Saya suka antarmuka pengguna yang intuitif dan modern. Membuat proses menabung jadi lebih menyenangkan.",
    time: "Selasa, 17 Agustus 2006"
  },
  {
    name: "Alexxander",
    job: "Data Analyst",
    content: "Sangat mudah digunakan dan saya dapat melihat perkembangan tabungan saya dengan jelas. Sangat direkomendasikan!",
    time: "Selasa, 01 Januari 2001"
  },
  {
    name: "John Doe",
    job: "Accountant",
    content: "Keamanan yang ditawarkan oleh platform ini sangat baik. Saya merasa lebih tenang menabung di sini.",
    time: "Kamis, 22 Desember 2022"
  },
  {
    name: "Rachelie",
    job: "Marketing Specialist",
    content: "Website ini sangat membantu saya untuk merencanakan keuangan jangka panjang. Fitur analisisnya juga sangat berguna.",
    time: "Jumat, 15 November 2022"
  },
  {
    name: "Ambatukam",
    job: "UI/UX Designer",
    content: "Desain website ini sangat memudahkan navigasi. Pengalaman pengguna yang dihadirkan sangat memuaskan.",
    time: "Rabu, 10 November 2022"
  },
  {
    name: "Rusdi Pratama",
    job: "Financial Advisor",
    content: "Sebagai penasihat keuangan, saya sangat merekomendasikan platform ini untuk siapa saja yang ingin mulai menabung.",
    time: "Senin, 05 November 2022"
  },
  {
    name: "Nadia Syafira",
    job: "Product Manager",
    content: "Platform ini menawarkan fitur yang luar biasa dengan fokus pada kebutuhan pengguna. Sangat mengesankan!",
    time: "Minggu, 29 Oktober 2022"
  },
  {
    name: "Shiro",
    job: "Entrepreneur",
    content: "Sangat membantu dalam mengelola cash flow bisnis saya. Saya dapat mengatur anggaran dengan lebih baik.",
    time: "Kamis, 21 September 2022"  
  },
  {
    name: "Shanny",
    job: "Teacher",
    content: "Mudah digunakan bahkan untuk orang awam dalam keuangan. Saya bisa mengatur tabungan dengan sangat baik.",
    time: "Senin, 23 Agustus 2022"
  }
];

const ReviewSlider = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    const animate = async () => {
      const sliderWidth = (slider as HTMLElement).scrollWidth;
      const viewportWidth = (slider as HTMLElement).offsetWidth;

      await controls.start({
        x: [-(sliderWidth - viewportWidth), 0],
        transition: {
          x: { repeat: Infinity, repeatType: "loop", duration: 90, ease: "linear" },
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden py-10" ref={containerRef}>
      <motion.div className="flex w-max" animate={controls}>
        {[...dReviews, ...dReviews].map((review, index) => (
          <Render.CardsReview key={index} index={index} review={review} />
        ))}
      </motion.div>
    </div>
  );
};
