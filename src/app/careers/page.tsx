'use client'
import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, Users, Award, Coffee, Heart, Zap } from 'lucide-react';

const openings = [
  {
    id: 1,
    title: "Senior Architect",
    department: "Design",
    location: "Kampala, Uganda",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead architectural design projects from concept to completion. Work with clients to understand their vision and translate it into innovative, sustainable designs.",
    requirements: [
      "Bachelor's or Master's degree in Architecture",
      "5+ years of professional experience",
      "Proficiency in AutoCAD, Revit, and SketchUp",
      "Strong design and visualization skills",
      "Experience with sustainable design principles"
    ]
  },
  {
    id: 2,
    title: "Interior Designer",
    department: "Design",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful, functional interior spaces that enhance our architectural projects. Collaborate with architects and clients to deliver exceptional interior design solutions.",
    requirements: [
      "Bachelor's degree in Interior Design",
      "3+ years of professional experience",
      "Proficiency in design software (AutoCAD, 3ds Max, Photoshop)",
      "Strong understanding of materials and finishes",
      "Excellent communication and presentation skills"
    ]
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Kampala, Uganda",
    type: "Full-time",
    experience: "4+ years",
    description: "Oversee multiple architectural projects from initiation to completion. Ensure projects are delivered on time, within budget, and to the highest quality standards.",
    requirements: [
      "Bachelor's degree in Architecture, Engineering, or Construction Management",
      "4+ years of project management experience",
      "PMP certification preferred",
      "Strong organizational and leadership skills",
      "Experience with construction processes"
    ]
  },
  {
    id: 4,
    title: "Junior Architect",
    department: "Design",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    experience: "1-2 years",
    description: "Support senior architects in design development and documentation. Great opportunity for recent graduates to gain experience in a dynamic, growing firm.",
    requirements: [
      "Bachelor's degree in Architecture",
      "1-2 years of experience or recent graduate",
      "Basic proficiency in AutoCAD and Revit",
      "Strong design fundamentals",
      "Eagerness to learn and grow"
    ]
  }
];

const benefits = [
  // {
  //   icon: Users,
  //   title: "Collaborative Culture",
  //   description: "Work with a diverse, talented team in an open, supportive environment"
  // },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning opportunities and career advancement paths"
  },
  // {
  //   icon: Coffee,
  //   title: "Work-Life Balance",
  //   description: "Flexible working arrangements and generous time-off policies"
  // },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description: "Work on cutting-edge projects using the latest design technologies"
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const handleApply = (jobId: number, jobTitle: string) => {
    setSelectedJob(jobId);
    setApplicationData({ ...applicationData, position: jobTitle });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationData);
    setSelectedJob(null);
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: ''
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Join Our <span className="brand-text-primary">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build your career while helping us shape East Africa&apos;s architectural future
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold brand-text-primary">25+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold brand-text-primary">4</div>
                <div className="text-gray-600">Office Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold brand-text-primary">11+</div>
                <div className="text-gray-600">Years Growing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where creativity thrives and careers flourish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 brand-text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Discover opportunities to grow your career with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 brand-text-primary" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 brand-text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 brand-text-primary" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 brand-text-primary" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(job.id, job.title)}
                      className="btn-primary mt-4 md:mt-0"
                    >
                      Apply Now
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.name}
                      onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                    placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="btn-primary flex-1">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don&apos;t See the Right Position?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <button className="bg-white brand-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Send General Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;