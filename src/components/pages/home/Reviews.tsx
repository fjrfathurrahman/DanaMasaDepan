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
    name: "Jessen Smitth",
    job: "Software Engineer",
    content: "Website tabungan ini sangat membantu saya mengatur keuangan dengan mudah. Fitur-fiturnya lengkap dan user-friendly.",
    time: "2024-10-10 14:23:00"
  },
  {
    avatar: "",
    name: "Pak Kissan",
    job: "Graphic Designer",
    content: "Saya suka antarmuka pengguna yang intuitif dan modern. Membuat proses menabung jadi lebih menyenangkan.",
    time: "2024-10-09 09:45:00"
  },
  {
    // avatar: "",
    name: "Rizky Aditya",
    job: "Data Analyst",
    content: "Sangat mudah digunakan dan saya dapat melihat perkembangan tabungan saya dengan jelas. Sangat direkomendasikan!",
    time: "2024-10-08 16:50:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Siti Nurhaliza",
    job: "Accountant",
    content: "Keamanan yang ditawarkan oleh platform ini sangat baik. Saya merasa lebih tenang menabung di sini.",
    time: "2024-10-07 12:15:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Fajar Setiawan",
    job: "Marketing Specialist",
    content: "Website ini sangat membantu saya untuk merencanakan keuangan jangka panjang. Fitur analisisnya juga sangat berguna.",
    time: "2024-10-06 11:05:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Andini Prameswari",
    job: "UI/UX Designer",
    content: "Desain website ini sangat memudahkan navigasi. Pengalaman pengguna yang dihadirkan sangat memuaskan.",
    time: "2024-10-05 10:35:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Dimas Haryanto",
    job: "Financial Advisor",
    content: "Sebagai penasihat keuangan, saya sangat merekomendasikan platform ini untuk siapa saja yang ingin mulai menabung.",
    time: "2024-10-04 08:20:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Nadia Syafira",
    job: "Product Manager",
    content: "Platform ini menawarkan fitur yang luar biasa dengan fokus pada kebutuhan pengguna. Sangat mengesankan!",
    time: "2024-10-03 15:47:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Budi Santoso",
    job: "Entrepreneur",
    content: "Sangat membantu dalam mengelola cash flow bisnis saya. Saya dapat mengatur anggaran dengan lebih baik.",
    time: "2024-10-02 13:05:00"
  },
  {
    // avatar: "../assets/images/avatar-3.png",
    name: "Lina Maulida",
    job: "Teacher",
    content: "Mudah digunakan bahkan untuk orang awam dalam keuangan. Saya bisa mengatur tabungan dengan sangat baik.",
    time: "2024-10-01 17:30:00"
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
