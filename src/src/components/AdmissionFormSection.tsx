import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form@';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  FileText,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
// Using native select element instead of complex Select component

interface AdmissionFormData {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  grade: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  previousSchool: string;
  additionalInfo: string;
}

export function AdmissionFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AdmissionFormData>();

  const grades = [
    { value: '', label: 'Select Grade' },
    { value: 'nursery', label: 'Nursery' },
    { value: 'lkg', label: 'Lower KG' },
    { value: 'ukg', label: 'Upper KG' },
    { value: 'grade-1', label: 'Grade 1' },
    { value: 'grade-2', label: 'Grade 2' },
    { value: 'grade-3', label: 'Grade 3' },
    { value: 'grade-4', label: 'Grade 4' },
    { value: 'grade-5', label: 'Grade 5' },
    { value: 'grade-6', label: 'Grade 6' },
    { value: 'grade-7', label: 'Grade 7' },
    { value: 'grade-8', label: 'Grade 8' },
    { value: 'grade-9', label: 'Grade 9' },
    { value: 'grade-10', label: 'Grade 10' },
    { value: 'grade-11', label: 'Grade 11' },
    { value: 'grade-12', label: 'Grade 12' }
  ];

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Admission form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  const admissionProcess = [
    {
      step: "1",
      title: "Application Form",
      description: "Submit the completed admission application form with required documents.",
      icon: FileText
    },
    {
      step: "2", 
      title: "Document Verification",
      description: "Our admissions team will review and verify all submitted documents.",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Assessment",
      description: "Student assessment based on age-appropriate evaluation criteria.",
      icon: User
    },
    {
      step: "4",
      title: "Interview",
      description: "Personal interview with parents and student (for applicable grades).",
      icon: User
    },
    {
      step: "5",
      title: "Admission Confirmation",
      description: "Admission confirmation and fee payment to secure the seat.",
      icon: CheckCircle
    }
  ];

  const requiredDocuments = [
    "Birth Certificate (Original + Photocopy)",
    "Previous School Transfer Certificate",
    "Academic Records/Report Cards",
    "Passport Size Photographs (4 copies)",
    "Parent's Identity Proof",
    "Address Proof",
    "Medical Certificate",
    "Caste Certificate (if applicable)"
  ];

  if (isSubmitted) {
    return (
      <div>
        <PageHeader
          title="Admission Application"
          subtitle="Join our school community and embark on a journey of academic excellence"
          backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop&q=80"
        />
        
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                Application Submitted Successfully!
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Thank you for your interest in Pranav Global School. We have received 
                your admission application and will contact you within 2-3 business days 
                regarding the next steps in the admission process.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Application ID:</strong> PGS{Date.now().toString().slice(-6)}
                  <br />
                  <strong>Submitted on:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Another Application
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Admission Application"
        subtitle="Join our school community and embark on a journey of academic excellence"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop&q=80"
      />

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your child's admission to our school
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {admissionProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < admissionProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-secondary/30 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                    <span className="text-primary font-bold text-lg">{process.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {process.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Form
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Please fill out all required fields to complete your admission application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Student Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground border-b border-border pb-2">
                  Student Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentName">Student Full Name *</Label>
                    <Input
                      id="studentName"
                      {...register('studentName', { required: 'Student name is required' })}
                      placeholder="Enter student's full name"
                      className={errors.studentName ? 'border-destructive' : ''}
                    />
                    {errors.studentName && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.studentName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      {...register('dateOfBirth', { required: 'Date of birth is required' })}
                      className={errors.dateOfBirth ? 'border-destructive' : ''}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <select
                      id="gender"
                      {...register('gender', { required: 'Gender is required' })}
                      className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                        errors.gender ? 'border-destructive' : ''
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="grade">Grade Applying For *</Label>
                    <select
                      id="grade"
                      {...register('grade', { required: 'Grade is required' })}
                      className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                        errors.grade ? 'border-destructive' : ''
                      }`}
                    >
                      {grades.map(grade => (
                        <option key={grade.value} value={grade.value}>
                          {grade.label}
                        </option>
                      ))}
                    </select>
                    {errors.grade && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.grade.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Parent Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground border-b border-border pb-2">
                  Parent/Guardian Information
                </h3>
                
                <div>
                  <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                  <Input
                    id="parentName"
                    {...register('parentName', { required: 'Parent name is required' })}
                    placeholder="Enter parent/guardian name"
                    className={errors.parentName ? 'border-destructive' : ''}
                  />
                  {errors.parentName && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.parentName.message}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                      placeholder="Enter email address"
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email.message}
                      </p>
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
                          value: /^[0-9]{10}$/,
                          message: 'Phone number must be 10 digits'
                        }
                      })}
                      placeholder="Enter 10-digit phone number"
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                    placeholder="Enter complete address"
                    className={errors.address ? 'border-destructive' : ''}
                  />
                  {errors.address && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Previous School */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground border-b border-border pb-2">
                  Previous School Information
                </h3>
                
                <div>
                  <Label htmlFor="previousSchool">Previous School Name</Label>
                  <Input
                    id="previousSchool"
                    {...register('previousSchool')}
                    placeholder="Enter previous school name (if applicable)"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground border-b border-border pb-2">
                  Additional Information
                </h3>
                
                <div>
                  <Label htmlFor="additionalInfo">Special Requirements or Comments</Label>
                  <Textarea
                    id="additionalInfo"
                    {...register('additionalInfo')}
                    placeholder="Any special requirements, medical conditions, or additional comments"
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-medium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send size={20} />
                      <span>Submit Application</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Required Documents
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Please ensure you have the following documents ready:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{document}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All documents should be submitted within 7 days of 
                application submission. Original documents will be verified and returned.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}