import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, CheckCircle, User, GraduationCap, FileText, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner';
import { PageHeader } from './PageHeader';

interface AdmissionFormData {
  // Student Information
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplying: string;
  
  // Parent/Guardian Information
  parentFirstName: string;
  parentLastName: string;
  relationship: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Previous School Information
  previousSchool: string;
  previousGrade: string;
  reasonForTransfer: string;
  
  // Additional Information
  specialNeeds: string;
  medicalConditions: string;
  interests: string;
  
  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelationship: string;
  
  // Documents
  birthCertificate: FileList;
  transcripts: FileList;
  immunizationRecords: FileList;
  
  // Agreements
  termsAccepted: boolean;
  communicationConsent: boolean;
}

export function AdmissionFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<AdmissionFormData>();

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Admission application submitted:', data);
      setSubmitSuccess(true);
      toast.success('Application submitted successfully! We will contact you within 48 hours.');
      reset();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div>
        <PageHeader title="Admission" currentPage="Admission" />
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
                Thank you for choosing Branov School. We have received your admission application 
                and will review it carefully. Our admissions team will contact you within 48 hours 
                to schedule the next steps in the process.
              </p>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• You will receive a confirmation email shortly</li>
                    <li>• Our team will review your application within 2 business days</li>
                    <li>• We'll schedule an assessment and interview</li>
                    <li>• Admission decision will be communicated within 2 weeks</li>
                  </ul>
                </div>
              </div>
              <Button 
                onClick={() => setSubmitSuccess(false)}
                className="bg-secondary hover:bg-secondary/90 text-white mt-6"
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
      <PageHeader title="Admission" currentPage="Admission" />
      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Admission Application Form
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete the form below to begin your admission process at Branov School.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <FileText className="h-6 w-6 text-secondary" />
                Student Admission Application
              </CardTitle>
              <CardDescription>
                Please fill out all required fields accurately. All information will be kept confidential.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Student Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <User className="h-5 w-5 text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground">Student Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studentFirstName">Student First Name *</Label>
                      <Input
                        id="studentFirstName"
                        {...register('studentFirstName', { 
                          required: 'Student first name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className={errors.studentFirstName ? 'border-destructive' : ''}
                      />
                      {errors.studentFirstName && (
                        <p className="text-destructive text-sm mt-1">{errors.studentFirstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="studentLastName">Student Last Name *</Label>
                      <Input
                        id="studentLastName"
                        {...register('studentLastName', { 
                          required: 'Student last name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className={errors.studentLastName ? 'border-destructive' : ''}
                      />
                      {errors.studentLastName && (
                        <p className="text-destructive text-sm mt-1">{errors.studentLastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        {...register('dateOfBirth', { required: 'Date of birth is required' })}
                        className={errors.dateOfBirth ? 'border-destructive' : ''}
                      />
                      {errors.dateOfBirth && (
                        <p className="text-destructive text-sm mt-1">{errors.dateOfBirth.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => setValue('gender', value)}>
                        <SelectTrigger className={errors.gender ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        {...register('gender', { required: 'Please select gender' })}
                      />
                      {errors.gender && (
                        <p className="text-destructive text-sm mt-1">{errors.gender.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                      <Select onValueChange={(value) => setValue('gradeApplying', value)}>
                        <SelectTrigger className={errors.gradeApplying ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kindergarten">Kindergarten</SelectItem>
                          <SelectItem value="grade-1">Grade 1</SelectItem>
                          <SelectItem value="grade-2">Grade 2</SelectItem>
                          <SelectItem value="grade-3">Grade 3</SelectItem>
                          <SelectItem value="grade-4">Grade 4</SelectItem>
                          <SelectItem value="grade-5">Grade 5</SelectItem>
                          <SelectItem value="grade-6">Grade 6</SelectItem>
                          <SelectItem value="grade-7">Grade 7</SelectItem>
                          <SelectItem value="grade-8">Grade 8</SelectItem>
                          <SelectItem value="grade-9">Grade 9</SelectItem>
                          <SelectItem value="grade-10">Grade 10</SelectItem>
                          <SelectItem value="grade-11">Grade 11</SelectItem>
                          <SelectItem value="grade-12">Grade 12</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        {...register('gradeApplying', { required: 'Please select grade' })}
                      />
                      {errors.gradeApplying && (
                        <p className="text-destructive text-sm mt-1">{errors.gradeApplying.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <User className="h-5 w-5 text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground">Parent/Guardian Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="parentFirstName">First Name *</Label>
                      <Input
                        id="parentFirstName"
                        {...register('parentFirstName', { 
                          required: 'Parent first name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className={errors.parentFirstName ? 'border-destructive' : ''}
                      />
                      {errors.parentFirstName && (
                        <p className="text-destructive text-sm mt-1">{errors.parentFirstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="parentLastName">Last Name *</Label>
                      <Input
                        id="parentLastName"
                        {...register('parentLastName', { 
                          required: 'Parent last name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className={errors.parentLastName ? 'border-destructive' : ''}
                      />
                      {errors.parentLastName && (
                        <p className="text-destructive text-sm mt-1">{errors.parentLastName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="relationship">Relationship to Student *</Label>
                      <Select onValueChange={(value) => setValue('relationship', value)}>
                        <SelectTrigger className={errors.relationship ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="guardian">Legal Guardian</SelectItem>
                          <SelectItem value="grandmother">Grandmother</SelectItem>
                          <SelectItem value="grandfather">Grandfather</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        type="hidden"
                        {...register('relationship', { required: 'Please select relationship' })}
                      />
                      {errors.relationship && (
                        <p className="text-destructive text-sm mt-1">{errors.relationship.message}</p>
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

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Input
                        id="address"
                        {...register('address', { required: 'Address is required' })}
                        className={errors.address ? 'border-destructive' : ''}
                      />
                      {errors.address && (
                        <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        {...register('city', { required: 'City is required' })}
                        className={errors.city ? 'border-destructive' : ''}
                      />
                      {errors.city && (
                        <p className="text-destructive text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        {...register('state', { required: 'State is required' })}
                        className={errors.state ? 'border-destructive' : ''}
                      />
                      {errors.state && (
                        <p className="text-destructive text-sm mt-1">{errors.state.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <User className="h-5 w-5 text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="emergencyName">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyName"
                        {...register('emergencyName', { required: 'Emergency contact name is required' })}
                        className={errors.emergencyName ? 'border-destructive' : ''}
                      />
                      {errors.emergencyName && (
                        <p className="text-destructive text-sm mt-1">{errors.emergencyName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        {...register('emergencyPhone', { 
                          required: 'Emergency contact phone is required',
                          pattern: {
                            value: /^[+]?[\d\s\-\(\)]+$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        className={errors.emergencyPhone ? 'border-destructive' : ''}
                      />
                      {errors.emergencyPhone && (
                        <p className="text-destructive text-sm mt-1">{errors.emergencyPhone.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="emergencyRelationship">Relationship to Student *</Label>
                      <Input
                        id="emergencyRelationship"
                        {...register('emergencyRelationship', { required: 'Relationship is required' })}
                        className={errors.emergencyRelationship ? 'border-destructive' : ''}
                        placeholder="e.g., Aunt, Uncle, Family Friend"
                      />
                      {errors.emergencyRelationship && (
                        <p className="text-destructive text-sm mt-1">{errors.emergencyRelationship.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground">Agreements</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="termsAccepted"
                        {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                        className={errors.termsAccepted ? 'border-destructive' : ''}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="termsAccepted"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I accept the terms and conditions *
                        </label>
                        <p className="text-xs text-muted-foreground">
                          You agree to our Terms of Service and Privacy Policy
                        </p>
                      </div>
                    </div>
                    {errors.termsAccepted && (
                      <p className="text-destructive text-sm">{errors.termsAccepted.message}</p>
                    )}

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="communicationConsent"
                        {...register('communicationConsent')}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="communicationConsent"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I consent to receive communications
                        </label>
                        <p className="text-xs text-muted-foreground">
                          Optional: Receive updates about school events and programs
                        </p>
                      </div>
                    </div>
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
  );
}