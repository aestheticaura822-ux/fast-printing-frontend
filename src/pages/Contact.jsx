import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Send, CheckCircle, ArrowRight, 
  Clock, Users, Award, Star, MessageCircle,
  AlertCircle, Loader
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: '',
    width: '',
    height: '',
    quantity: '',
    paperType: '',
    finishing: '',
    deadline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeTab, setActiveTab] = useState('inquiry');

  // API URL - Production or Local
  const API_URL = import.meta.env.VITE_API_URL || 'https://fast-printing-backend.vercel.app/api';

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .reveal.active { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
    const revealElements = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', revealElements);
    revealElements();
    return () => { window.removeEventListener('scroll', revealElements); document.head.removeChild(style); };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send email via backend API
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setSubmitError('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          fullName: '', email: '', phone: '', company: '', industry: '', service: '',
          width: '', height: '', quantity: '', paperType: '', finishing: '', deadline: '', message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please call us directly or try WhatsApp.');
    }
  };

  // WhatsApp Message
  const sendWhatsApp = () => {
    const message = `Hello Fast Printing!%0A%0A*New Project Inquiry*%0A%0A*Name:* ${formData.fullName || 'Not provided'}%0A*Email:* ${formData.email || 'Not provided'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Company:* ${formData.company || 'Not provided'}%0A*Industry:* ${formData.industry || 'Not provided'}%0A*Service:* ${formData.service || 'Not provided'}%0A*Dimensions:* ${formData.width || '0'} x ${formData.height || '0'} inches%0A*Quantity:* ${formData.quantity || 'Not provided'}%0A*Message:* ${formData.message || 'Not provided'}`;
    window.open(`https://wa.me/16042396141?text=${message}`, '_blank');
  };

  const industries = [
    'Select your industry...',
    'Schools & Education', 'Healthcare & Medical', 'Restaurants & Food Service',
    'Retail & E-commerce', 'Corporate & Business', 'Events & Hospitality',
    'Technology & Startups', 'Fashion & Apparel', 'Other'
  ];

  const services = [
    'Select a core service...',
    'Digital Printing', 'Offset Printing', 'Screen Printing', 'Large Format Printing',
    'Custom Boxes', 'Labels & Stickers', 'Bags & Pouches', 'Brand Identity',
    'Logo Design', 'Packaging Design', 'Marketing Materials', 'Business Printing',
    'Promotional Products', 'Specialty Printing'
  ];

  const paperTypes = ['Select paper type...', '14pt Cardstock', '16pt Cardstock', '18pt Cardstock', 'Kraft Paper', 'Art Paper', 'Bond Paper', 'Premium Cardstock'];
  const finishingOptions = ['Select finishing...', 'Matte Lamination', 'Gloss Lamination', 'Soft-touch', 'Spot UV', 'Foil Stamping', 'Embossing', 'None'];

  const contactInfo = [
    { icon: MapPin, title: 'Visit HQ', details: ['101 Queen Street, West Toronto ON M5H 2N1 CANADA'], action: 'Get Directions →', link: 'https://maps.google.com/?q=Valencia+Town+Lahore' },
    { icon: Phone, title: 'Call Us', details: ['+1 (604) 239-6141'], action: 'Call Now', link: 'tel:16042396141' },
    { icon: Mail, title: 'Email Us', details: ['fastmediaagencyofficial@gmail.com'], action: 'Send Email', link: 'mailto:fastmediaagencyofficial@gmail.com' }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '99%', label: 'Satisfaction Rate' },
    { icon: Clock, value: '24h', label: 'Response Time' },
    { icon: Star, value: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://cdn.pixabay.com/video/2016/10/07/5807-186111314_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"><Mail className="w-4 h-4 text-yellow-500" /><span className="text-yellow-500 text-sm font-semibold">Get In Touch</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Let's Start Your <span className="text-yellow-500">Project</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Have a premium project in mind? We'd love to hear from you. Send us a message and our experts will respond within 24 hours.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (<div key={idx} className="text-center reveal"><stat.icon className="w-8 h-8 text-red-600 mx-auto mb-2" /><div className="text-2xl font-bold text-gray-800">{stat.value}</div><div className="text-sm text-gray-500">{stat.label}</div></div>))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 reveal">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4"><info.icon className="w-6 h-6 text-red-600" /></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (<p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>))}
                  <a href={info.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm mt-3 hover:gap-3 transition">{info.action} <ArrowRight className="w-4 h-4" /></a>
                </div>
              ))}
              
              {/* Business Hours Card */}
              <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-6 text-white reveal">
                <div className="flex items-center gap-3 mb-4"><Clock className="w-6 h-6 text-yellow-400" /><h3 className="text-xl font-bold">Business Hours</h3></div>
                <div className="space-y-2"><div className="flex justify-between"><span>Monday - Friday</span><span className="font-semibold">10:00 AM - 8:00 PM</span></div><div className="flex justify-between"><span>Saturday</span><span className="font-semibold">10:00 AM - 8:00 PM</span></div><div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-yellow-400">Closed</span></div></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden reveal">
              <div className="border-b border-gray-100 flex">
                <button onClick={() => setActiveTab('inquiry')} className={`flex-1 py-4 text-center font-semibold transition ${activeTab === 'inquiry' ? 'text-red-600 border-b-2 border-red-600 bg-red-50' : 'text-gray-500 hover:text-gray-700'}`}>Project Inquiry</button>
                <button onClick={() => setActiveTab('quote')} className={`flex-1 py-4 text-center font-semibold transition ${activeTab === 'quote' ? 'text-red-600 border-b-2 border-red-600 bg-red-50' : 'text-gray-500 hover:text-gray-700'}`}>Quick Quote</button>
              </div>

              {isSubmitted && (<div className="m-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /><p className="text-green-700">Thank you! Our team will contact you within 24 hours.</p></div>)}
              {submitError && (<div className="m-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"><AlertCircle className="w-5 h-5 text-red-500" /><p className="text-red-700">{submitError}</p></div>)}

              <form onSubmit={sendEmail} className="p-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">FULL NAME *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="John Doe" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">EMAIL ADDRESS *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="john@company.com" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">PHONE NUMBER *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="+92 XXX XXXXXXX" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">COMPANY NAME</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="Your Organization" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">INDUSTRY *</label><select name="industry" required value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500">{industries.map((ind, i) => (<option key={i} value={ind}>{ind}</option>))}</select></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">PRIMARY SERVICE NEEDED *</label><select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500">{services.map((svc, i) => (<option key={i} value={svc}>{svc}</option>))}</select></div>
                </div>

                {activeTab === 'quote' && (
                  <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">QUANTITY</label><input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg" placeholder="e.g., 500" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">PAPER TYPE</label><select name="paperType" value={formData.paperType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg">{paperTypes.map((pt, i) => (<option key={i} value={pt}>{pt}</option>))}</select></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">FINISHING</label><select name="finishing" value={formData.finishing} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg">{finishingOptions.map((fo, i) => (<option key={i} value={fo}>{fo}</option>))}</select></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1">DEADLINE</label><input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">WIDTH (INCHES)</label><input type="number" step="0.1" name="width" value={formData.width} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="0.0" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1">HEIGHT (INCHES)</label><input type="number" step="0.1" name="height" value={formData.height} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="0.0" /></div>
                </div>

                <div><label className="block text-sm font-semibold text-gray-700 mb-1">PROJECT DETAILS *</label><textarea name="message" rows="4" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500" placeholder="Please include quantities, paper weights, finishing options, and any deadlines..."></textarea></div>

                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500"><AlertCircle className="w-4 h-4" /><span>🔒 Your information is secure. We never sell or share data with third parties.</span></div>
                  <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">{isSubmitting ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}{isSubmitting ? 'Sending...' : 'SUBMIT INQUIRY'}</button>
                </div>
              </form>

              {/* WhatsApp Alternative */}
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <p className="text-center text-gray-600 mb-3">Or send us your inquiry directly on WhatsApp</p>
                <button onClick={sendWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Send via WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Call Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 reveal">Prefer a <span className="text-yellow-500">Quick Call?</span></h2>
            <p className="text-gray-200 mb-8 reveal">Our team is available Monday through Saturday (10 AM - 8 PM) to answer your questions and provide instant quotes</p>
            <div className="flex flex-wrap justify-center gap-4 reveal">
              <a href="tel:16042396141"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"><Phone className="w-5 h-5" /> Call +1 (604) 239-6141</button></a>
              <a href="https://wa.me/16042396141"><button className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp Now</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-80 bg-gray-200 relative overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217700.7886882753!2d74.142998!3d31.47899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190461e5b1cd11%3A0x4f1e0f3f8f5e9e1!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Fast Printing Location"></iframe>
      </section>
    </div>
  );
};

export default Contact;