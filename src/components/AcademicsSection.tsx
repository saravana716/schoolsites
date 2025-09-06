import { GraduationCap, Users, Clock, BookOpen, Beaker, Palette, Music, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { PageHeader } from './PageHeader'

export function AcademicsSection() {
  const programs = [
    {
      title: "Primary School",
      subtitle: "Grades K-5",
      description: "Building strong foundations with interactive learning and creative exploration.",
      features: ["Play-based Learning", "STEAM Integration", "Character Development"],
      icon: Users,
      color: "bg-muted border-muted-foreground/20"
    },
    {
      title: "Middle School", 
      subtitle: "Grades 6-8",
      description: "Fostering critical thinking and preparing students for advanced academics.",
      features: ["Advanced Curriculum", "Leadership Programs", "Peer Mentoring"],
      icon: BookOpen,
      color: "bg-secondary/10 border-secondary/20"
    },
    {
      title: "High School",
      subtitle: "Grades 9-12",
      description: "Comprehensive preparation for university and career success.",
      features: ["AP Courses", "College Counseling", "Internship Programs"],
      icon: GraduationCap,
      color: "bg-card border-card-foreground/20"
    }
  ]

  const subjects = [
    {
      name: "Science & Technology",
      icon: Beaker,
      description: "Modern labs and STEM programs",
      color: "text-secondary bg-secondary/10"
    },
    {
      name: "Arts & Design",
      icon: Palette,
      description: "Creative expression and visual arts",
      color: "text-purple-600 bg-purple-50"
    },
    {
      name: "Music & Drama",
      icon: Music,
      description: "Performing arts and cultural programs",
      color: "text-green-600 bg-green-50"
    },
    {
      name: "Sports & Athletics",
      icon: Trophy,
      description: "Physical education and team sports",
      color: "text-orange-600 bg-orange-50"
    }
  ]

  const stats = [
    { number: "25:1", label: "Student-Teacher Ratio" },
    { number: "45+", label: "Subjects Offered" },
    { number: "12", label: "Sports Programs" },
    { number: "30+", label: "Clubs & Activities" }
  ]

  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Academic" currentPage="Academic" />
      
      <section className="py-20 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Academic Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive curriculum is designed to challenge and inspire students 
              at every level, preparing them for success in higher education and beyond.
            </p>
          </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card key={index} className={`${program.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <program.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                <p className="text-secondary font-medium">{program.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Specialized Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${subject.color} group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon className="h-10 w-10" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{subject.name}</h4>
                <p className="text-gray-600 text-sm">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Info */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">School Hours</h4>
              <p className="opacity-90">8:00 AM - 3:30 PM</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">Extended Learning</h4>
              <p className="opacity-90">After-school programs available</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">Small Classes</h4>
              <p className="opacity-90">Personalized attention guaranteed</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}