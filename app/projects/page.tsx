export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">KidTracker</h3>
          <p className="text-gray-600">Face recognition app with real-time tracking.</p>
        </div>
        <div className="border p-6 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Image Captioning & Search</h3>
          <p className="text-gray-600">Hugging Face + semantic search pipeline.</p>
        </div>
      </div>
    </section>
  );
}
