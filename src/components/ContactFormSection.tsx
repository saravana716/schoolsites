import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { PageHeader } from './PageHeader';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Contact form submitted:', data);
      setSubmitSuccess(true);
      toast.success('Message sent successfully! We will get back to you within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "123 Education Drive, Academic City, AC 12345",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@branovschool.edu",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Monday - Friday: 8:00 AM - 5:00 PM",
      color: "text-secondary bg-secondary/10"
    }
  ];

  const departments = [
    { name: "Admissions Office", email: "admissions@branovschool.edu", phone: "(555) 123-4567" },
    { name: "Academic Affairs", email: "academics@branovschool.edu", phone: "(555) 123-4568" },
    { name: "Student Services", email: "students@branovschool.edu", phone: "(555) 123-4569" },
    { name: "Finance Office", email: "finance@branovschool.edu", phone: "(555) 123-4570" }
  ];

  if (submitSuccess) {
    return (
      <div>
        <PageHeader title="Contact" currentPage="Contact" />
        <div className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted/30 rounded-2xl p-12">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting Branov School. We have received your message 
              and our team will get back to you within 24 hours. If your inquiry is urgent, 
              please call us directly at +1 (555) 123-4567.
            </p>
            <Button 
              onClick={() => setSubmitSuccess(false)}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Send Another Message
            </Button>
          </div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Contact" currentPage="Contact" />
      <div className="py-20 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about admissions, academics, or our programs? 
              We're here to help. Reach out to us and we'll get back to you promptly.
            </p>
          </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${contact.color}`}>
                  <contact.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                <p className="text-muted-foreground text-sm">{contact.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register('firstName', { 
                        required: 'First name is required',
                        minLength: { value: 2, message: 'First name must be at least 2 characters' }
                      })}
                      className={errors.firstName ? 'border-destructive' : ''}
                      placeholder="Enter your first name"
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
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
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
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      pattern: {
                        value: /^[+]?[\d\s\-\(\)]+$/,
                        message: 'Invalid phone number format'
                      }
                    })}
                    className={errors.phone ? 'border-destructive' : ''}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select onValueChange={(value) => setValue('subject', value)}>
                    <SelectTrigger className={errors.subject ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                      <SelectItem value="academics">Academic Information</SelectItem>
                      <SelectItem value="facilities">Facilities Tour</SelectItem>
                      <SelectItem value="enrollment">Enrollment Process</SelectItem>
                      <SelectItem value="financial-aid">Financial Aid</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    {...register('subject', { required: 'Please select a subject' })}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    className={errors.message ? 'border-destructive' : ''}
                    placeholder="Tell us how we can help you..."
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Department Contacts & Info */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Department Contacts</CardTitle>
                <p className="text-muted-foreground">
                  Connect directly with the right department for faster assistance.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4 py-2">
                    <h4 className="font-semibold text-foreground mb-1">{dept.name}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3" />
                        <a href={`mailto:${dept.email}`} className="hover:text-secondary">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3" />
                        <a href={`tel:${dept.phone}`} className="hover:text-secondary">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Visit Our Campus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">View directions to our campus</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Address:</strong> 123 Education Drive, Academic City, AC 12345</p>
                  <p><strong>Parking:</strong> Free visitor parking available</p>
                  <p><strong>Public Transit:</strong> Bus routes 15, 22, and 45 stop nearby</p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-secondary text-secondary hover:bg-secondary/10">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-secondary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <hr className="my-4 border-secondary-foreground/30" />
                <p className="text-sm text-secondary-foreground/80">
                  For emergencies outside office hours, please call our main number 
                  and follow the prompts for urgent matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}