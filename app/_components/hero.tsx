"use client";
import styles from './hero.module.css'

export function Hero() {
  return (
    <section className="relative w-full h-[300px] md:h-[450px] border-b border-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Hero background image"
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/58 to-black/70" />

      {/* Content */}
      <div className="relative h-full max-w-4xl mx-auto flex items-center">
        <div className="flex flex-row items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.png"
            alt="Nancy"
            width="112"
            height="112"
            className="h-40 md:h-50 w-auto -mb-3"
          />
          <div className="space-y-4 md:space-y-6 md:pb-2">
            <h1 className={`${styles.heroText} ${styles.heroTitle} text-5xl md:text-7xl`}>
              Nancy
            </h1>
            <p className={`${styles.heroText} ${styles.heroSubtitle} text-l md:text-xl`}>
              Software engineer by training, lifelong learner at heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}