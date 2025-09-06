import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Users, GraduationCap, Heart, Award, Clock, MapPin, DollarSign, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { PageHeader } from './PageHeader';

interface CareerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
  availability: string;
  salary: string;
  resume: FileList;
}

export function CareerSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<CareerFormData>();

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Career application submitted:', data);
      setSubmitSuccess(true);
      toast.success('Application submitted successfully! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobOpenings = [
    {
      title: "Mathematics Teacher",
      department: "Academic Department",
      type: "Full-time",
      location: "Main Campus",
      salary: "$45,000 - $65,000",
      experience: "2+ years",
      description: "We are seeking a passionate mathematics teacher to join our team and inspire students in grades 9-12.",
      requirements: [
        "Bachelor's degree in Mathematics or related field",
        "Teaching certification",
        "2+ years of teaching experience",
        "Strong communication skills"
      ]
    },
    {
      title: "Science Laboratory Assistant",
      department: "Science Department",
      type: "Part-time",
      location: "Science Building",
      salary: "$25,000 - $35,000",
      experience: "1+ years",
      description: "Support science teachers in laboratory setup, equipment maintenance, and student supervision.",
      requirements: [
        "Associate degree in Science",
        "Laboratory experience preferred",
        "Safety certification",
        "Attention to detail"
      ]
    },
    {
      title: "Sports Coach",
      department: "Athletics",
      type: "Full-time",
      location: "Sports Complex",
      salary: "$40,000 - $55,000",
      experience: "3+ years",
      description: "Lead our basketball and athletics programs, mentor student athletes, and promote sportsmanship.",
      requirements: [
        "Degree in Sports Science or related field",
        "Coaching certification",
        "3+ years coaching experience",
        "Leadership skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, and vision coverage"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement programs"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules and generous paid time off"
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Employee appreciation and achievement recognition initiatives"
    }
  ];

  if (submitSuccess) {
    return (
      <div>
        <PageHeader title="Career" currentPage="Career" />
        <div className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted/30 rounded-2xl p-12">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for your interest in joining the Branov School team. 
              We have received your application and will review it carefully. 
              Our HR team will contact you within 5-7 business days.
            </p>
            <Button 
              onClick={() => setSubmitSuccess(false)}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Career" currentPage="Career" />
      <div className="py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of our mission to shape future leaders. Explore career opportunities 
              at Branov School and make a difference in students' lives.
            </p>
          </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Job Openings */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-foreground">{job.title}</CardTitle>
                        <CardDescription className="text-secondary font-medium">
                          {job.department}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground">{job.experience}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Apply Now</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Career Application Form</CardTitle>
                <CardDescription>
                  Fill out the form below to apply for any of our open positions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register('firstName', { 
                          required: 'First name is required',
                          minLength: { value: 2, message: 'First name must be at least 2 characters' }
                        })}
                        className={errors.firstName ? 'border-destructive' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register('lastName', { 
                          required: 'Last name is required',
                          minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                        })}
                        className={errors.lastName ? 'border-destructive' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[+]?[\d\s\-\(\)]+$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Position and Experience */}
                  <div>
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Select onValueChange={(value) => setValue('position', value)}>
                      <SelectTrigger className={errors.position ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics-teacher">Mathematics Teacher</SelectItem>
                        <SelectItem value="science-assistant">Science Laboratory Assistant</SelectItem>
                        <SelectItem value="sports-coach">Sports Coach</SelectItem>
                        <SelectItem value="other">Other Position</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      {...register('position', { required: 'Please select a position' })}
                    />
                    {errors.position && (
                      <p className="text-destructive text-sm mt-1">{errors.position.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select onValueChange={(value) => setValue('experience', value)}>
                        <SelectTrigger className={errors.experience ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-5">2-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        {...register('experience', { required: 'Please select your experience level' })}
                      />
                      {errors.experience && (
                        <p className="text-destructive text-sm mt-1">{errors.experience.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="education">Highest Education *</Label>
                      <Select onValueChange={(value) => setValue('education', value)}>
                        <SelectTrigger className={errors.education ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School Diploma</SelectItem>
                          <SelectItem value="associate">Associate Degree</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        {...register('education', { required: 'Please select your education level' })}
                      />
                      {errors.education && (
                        <p className="text-destructive text-sm mt-1">{errors.education.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      rows={4}
                      placeholder="Tell us why you want to join our team and what makes you a great fit for this position..."
                      {...register('coverLetter', { 
                        required: 'Cover letter is required',
                        minLength: { value: 100, message: 'Cover letter must be at least 100 characters' }
                      })}
                      className={errors.coverLetter ? 'border-destructive' : ''}
                    />
                    {errors.coverLetter && (
                      <p className="text-destructive text-sm mt-1">{errors.coverLetter.message}</p>
                    )}
                  </div>

                  {/* Additional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="availability">Available Start Date *</Label>
                      <Input
                        id="availability"
                        type="date"
                        {...register('availability', { required: 'Start date is required' })}
                        className={errors.availability ? 'border-destructive' : ''}
                      />
                      {errors.availability && (
                        <p className="text-destructive text-sm mt-1">{errors.availability.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="salary">Expected Salary Range</Label>
                      <Select onValueChange={(value) => setValue('salary', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select salary range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25k-35k">$25,000 - $35,000</SelectItem>
                          <SelectItem value="35k-45k">$35,000 - $45,000</SelectItem>
                          <SelectItem value="45k-55k">$45,000 - $55,000</SelectItem>
                          <SelectItem value="55k-65k">$55,000 - $65,000</SelectItem>
                          <SelectItem value="65k+">$65,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="mt-2">
                      <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/20">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-medium">Click to upload</span> your resume
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (MAX. 5MB)</p>
                        </div>
                        <input
                          id="resume"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          {...register('resume', { 
                            required: 'Resume is required',
                            validate: {
                              fileSize: (files) => {
                                if (files && files[0] && files[0].size > 5 * 1024 * 1024) {
                                  return 'File size must be less than 5MB';
                                }
                                return true;
                              },
                              fileType: (files) => {
                                if (files && files[0]) {
                                  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                                  if (!allowedTypes.includes(files[0].type)) {
                                    return 'Only PDF, DOC, and DOCX files are allowed';
                                  }
                                }
                                return true;
                              }
                            }
                          })}
                        />
                      </label>
                      {errors.resume && (
                        <p className="text-destructive text-sm mt-1">{errors.resume.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}