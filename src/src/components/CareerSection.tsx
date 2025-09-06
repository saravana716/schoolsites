import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  GraduationCap,
  Users,
  Heart,
  TrendingUp,
  Award,
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  Mail,
  Phone,
  User
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
  resume?: FileList;
}

interface JobPosting {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  posted: string;
}

export function CareerSection() {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<JobApplication>();

  const jobPostings: JobPosting[] = [
    {
      id: '1',
      title: 'Mathematics Teacher',
      department: 'Academic',
      type: 'Full-time',
      location: 'Main Campus',
      experience: '3-5 years',
      description: 'We are looking for a passionate Mathematics teacher to join our dedicated team. The ideal candidate will have strong subject knowledge and excellent communication skills.',
      requirements: [
        'Master\'s degree in Mathematics or related field',
        'B.Ed. qualification preferred',
        '3+ years of teaching experience',
        'Strong communication and interpersonal skills',
        'Proficiency in modern teaching methodologies'
      ],
      responsibilities: [
        'Plan and deliver engaging Mathematics lessons',
        'Assess student progress and provide feedback',
        'Collaborate with colleagues and parents',
        'Participate in school events and activities',
        'Maintain accurate records and reports'
      ],
      benefits: [
        'Competitive salary package',
        'Professional development opportunities',
        'Health insurance coverage',
        'Retirement benefits',
        'Paid vacation and holidays'
      ],
      posted: '2024-03-15'
    },
    {
      id: '2',
      title: 'Science Laboratory Assistant',
      department: 'Academic Support',
      type: 'Full-time',
      location: 'Science Block',
      experience: '2-3 years',
      description: 'Join our science department as a Laboratory Assistant to support practical learning experiences for students across all science subjects.',
      requirements: [
        'Bachelor\'s degree in Science',
        'Knowledge of laboratory safety protocols',
        '2+ years of lab experience',
        'Attention to detail and safety consciousness',
        'Ability to maintain lab equipment'
      ],
      responsibilities: [
        'Prepare laboratory equipment and materials',
        'Assist teachers during practical sessions',
        'Maintain laboratory safety standards',
        'Manage inventory of chemicals and equipment',
        'Support student experiments and projects'
      ],
      benefits: [
        'Competitive salary',
        'Training and certification opportunities',
        'Health benefits',
        'Professional growth environment',
        'Flexible working hours'
      ],
      posted: '2024-03-12'
    },
    {
      id: '3',
      title: 'Sports Coordinator',
      department: 'Physical Education',
      type: 'Full-time',
      location: 'Sports Complex',
      experience: '4-6 years',
      description: 'Lead our sports programs and help students develop their athletic abilities while promoting teamwork and healthy competition.',
      requirements: [
        'Bachelor\'s degree in Physical Education',
        'Coaching certification in relevant sports',
        '4+ years of sports coordination experience',
        'Strong leadership and motivational skills',
        'First aid and CPR certification'
      ],
      responsibilities: [
        'Coordinate school sports programs and events',
        'Train and mentor students in various sports',
        'Organize inter-school competitions',
        'Maintain sports facilities and equipment',
        'Promote physical fitness and wellness'
      ],
      benefits: [
        'Attractive salary package',
        'Sports facility access',
        'Training and development programs',
        'Health and wellness benefits',
        'Performance incentives'
      ],
      posted: '2024-03-10'
    },
    {
      id: '4',
      title: 'Librarian',
      department: 'Academic Support',
      type: 'Full-time',
      location: 'Library',
      experience: '2-4 years',
      description: 'Manage our modern library facilities and help students develop research and reading skills in a digital age.',
      requirements: [
        'Master\'s degree in Library Science',
        'Familiarity with library management systems',
        '2+ years of library experience',
        'Knowledge of digital resources and databases',
        'Excellent organizational skills'
      ],
      responsibilities: [
        'Manage library collections and resources',
        'Assist students and teachers with research',
        'Maintain library databases and catalogs',
        'Organize reading programs and events',
        'Train users on digital resources'
      ],
      benefits: [
        'Competitive compensation',
        'Quiet and intellectual work environment',
        'Professional development opportunities',
        'Health insurance',
        'Educational leave benefits'
      ],
      posted: '2024-03-08'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Healthcare',
      description: 'Complete medical insurance for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and career advancement'
    },
    {
      icon: Award,
      title: 'Performance Recognition',
      description: 'Merit-based rewards and recognition programs'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with passionate educators and supportive teams'
    }
  ];

  const onSubmit = async (data: JobApplication) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Job application submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  const openJobDetails = (job: JobPosting) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
  };

  const applyForJob = () => {
    setShowApplicationForm(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <PageHeader
        title="Careers"
        subtitle="Join our team of dedicated educators and make a difference in students' lives"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop&q=80"
      />

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Pranav Global School, we believe our staff are our greatest asset. Join a 
              community where your passion for education can flourish and make a lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Be Part of Something Special
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our school culture is built on collaboration, innovation, and a shared 
                commitment to student success. We provide a supportive environment where 
                educators can grow professionally while making a meaningful difference in 
                young lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From competitive compensation packages to extensive professional development 
                opportunities, we invest in our team because we know that great teachers 
                inspire great students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80"
                alt="Teachers collaborating"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Explore exciting opportunities to join our educational community
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {jobPostings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openJobDetails(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {job.title}
                      </h3>
                      <p className="text-secondary font-medium">{job.department}</p>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{job.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>Posted {formatDate(job.posted)}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {job.description}
                </p>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {!showApplicationForm ? (
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-2">
                        {selectedJob.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span className="font-medium">{selectedJob.department}</span>
                        <span>{selectedJob.type}</span>
                        <span>{selectedJob.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-3">
                        Job Description
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-3">
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-3">
                        Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-3">
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button
                      onClick={applyForJob}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Apply Now
                    </Button>
                    <Button
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 bg-muted text-muted-foreground hover:bg-muted/80"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">
                    Apply for {selectedJob.title}
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          {...register('fullName', { required: 'Full name is required' })}
                          placeholder="Enter your full name"
                          className={errors.fullName ? 'border-destructive' : ''}
                        />
                        {errors.fullName && (
                          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          placeholder="Enter your email"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone', { required: 'Phone number is required' })}
                          placeholder="Enter your phone number"
                          className={errors.phone ? 'border-destructive' : ''}
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input
                          id="experience"
                          {...register('experience', { required: 'Experience is required' })}
                          placeholder="e.g., 5 years"
                          className={errors.experience ? 'border-destructive' : ''}
                        />
                        {errors.experience && (
                          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.experience.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="education">Highest Education *</Label>
                      <Input
                        id="education"
                        {...register('education', { required: 'Education is required' })}
                        placeholder="e.g., Master's in Mathematics"
                        className={errors.education ? 'border-destructive' : ''}
                      />
                      {errors.education && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.education.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter *</Label>
                      <Textarea
                        id="coverLetter"
                        {...register('coverLetter', { required: 'Cover letter is required' })}
                        placeholder="Tell us why you're interested in this position..."
                        rows={4}
                        className={errors.coverLetter ? 'border-destructive' : ''}
                      />
                      {errors.coverLetter && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.coverLetter.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="resume">Resume/CV</Label>
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register('resume')}
                        className="w-full px-3 py-2 border border-border rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-muted file:text-muted-foreground hover:file:bg-muted/80"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send size={16} />
                            <span>Submit Application</span>
                          </div>
                        )}
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setShowApplicationForm(false)}
                        className="bg-muted text-muted-foreground hover:bg-muted/80"
                      >
                        Back to Details
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Success Message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-2xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                Application Submitted!
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in joining our team. We will review your 
                application and contact you within 5-7 business days.
              </p>
              
              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact HR */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Don't See the Right Position?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center space-x-2">
                <Mail size={20} />
                <span>Send Resume</span>
              </Button>
              <Button className="border-2 border-primary text-primary hover:bg-primary/5 flex items-center space-x-2">
                <Phone size={20} />
                <span>Contact HR</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}