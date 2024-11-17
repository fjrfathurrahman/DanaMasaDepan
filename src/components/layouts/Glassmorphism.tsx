import React from "react";

export const Glassmorphism = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 max-w-[1440px] mx-auto min-h-[700px] flex items-center justify-center">
      {/* Background Circle for Light Mode */}
      <div className="absolute -top-20 left-12 w-72 h-72 bg-blue-200/35 blur-lg rounded-full dark:hidden" />
      <div className="absolute top-32 right-10 w-64 h-64 bg-purple-200/35 blur-lg rounded-full dark:hidden" />
      <div className="absolute bottom-20 -left-6 w-80 h-80 bg-green-200/35 blur-lg rounded-full dark:hidden" />

      {/* Background Circle for Dark Mode */}
      <div className="absolute -top-20 left-12 w-72 h-72 bg-blue-900/40 blur-lg rounded-full hidden dark:block" />
      <div className="absolute top-32 right-10 w-64 h-64 bg-purple-900/30 blur-lg rounded-full hidden dark:block" />
      <div className="absolute bottom-20 -left-6 w-80 h-80 bg-pink-900/20 blur-lg rounded-full hidden dark:block" />
    </div>
  );
};