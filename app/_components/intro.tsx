import styles from './intro.module.css'

export function Intro() {
  return (
    <section id="intro" className="px-6 pt-20 max-w-4xl mx-auto">
      <div className="text-stone-500 text-base md:text-lg leading-relaxed italic">
          I love turning technology into meaningful, human-centered solutions.
          <br/><br/>
          I&apos;m currently on a career break, using the time to reset, explore, and grow.
          Previously, I worked at <a className="text-neutral-950 hover:text-indigo-400 focus-visible:text-indigo-400 hover:underline focus-visible:underline" target="_blank" rel="noreferrer noopener" href="https://www.microsoft.com/education">Microsoft</a> building education products for classrooms around the world.
          When I&apos;m not tinkering or learning something new, you&apos;ll find me <span className={`${styles.skiing} text-neutral-950 hover:text-cyan-400`}>skiing</span>, on a <span className={`${styles.tennis} text-neutral-950 hover:text-lime-400`}>tennis court</span>, or planning my next <span className={`${styles.travel} text-neutral-950 hover:text-sky-400`}>travel adventure</span>.
      </div>
    </section>
  );
}
