export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <form
        className="grid gap-4 max-w-md"
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" className="p-3 border rounded-lg" required />
        <input type="email" name="email" placeholder="Your Email" className="p-3 border rounded-lg" required />
        <textarea name="message" placeholder="Your Message" rows={6} className="p-3 border rounded-lg" required></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
