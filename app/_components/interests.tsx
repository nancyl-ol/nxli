const interests = [
  'Coffee',
  'Gaming',
  'Sci-fi',
  'Running',
  'Music',
  'Learning'
];

export function Interests() {
  return (
    <section id="interests" className="px-6 py-20 max-w-4xl mx-auto border-b border-black">
      <h2 className="text-neutral-900 mb-12 pb-3 border-b-2 border-black inline-block">Interests</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black border border-black">
        {interests.map((interest, index) => (
          <div 
            key={index}
            className="bg-white p-6 hover:bg-neutral-50 transition-colors"
          >
            <span className="text-neutral-900">{interest}</span>
          </div>
        ))}
      </div>
    </section>
  );
}