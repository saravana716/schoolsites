import { motion } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  Users, 
  Calendar,
  Award,
  Target,
  Clock,
  FileText,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';

export function AcademicsSection() {
  const programs = [
    {
      title: "Primary School",
      grades: "Grades 1-5",
      description: "Foundation years focusing on core literacy, numeracy, and social skills development.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&q=80",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
      highlights: ["Play-based learning", "Individual attention", "Character building", "Creative expression"]
    },
    {
      title: "Middle School",
      grades: "Grades 6-8",
      description: "Transitional phase building critical thinking and preparing for advanced academics.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop&q=80",
      subjects: ["Advanced Math", "Sciences", "Languages", "History", "Geography", "Technology"],
      highlights: ["Project-based learning", "Leadership development", "Skill enhancement", "Career guidance"]
    },
    {
      title: "High School",
      grades: "Grades 9-12",
      description: "Comprehensive preparation for higher education and career readiness.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&q=80",
      subjects: ["Advanced Sciences", "Mathematics", "Literature", "Economics", "Computer Science", "Arts"],
      highlights: ["College preparation", "Research projects", "Internship programs", "University partnerships"]
    }
  ];

  const curriculum = [
    {
      icon: BookOpen,
      title: "Core Academics",
      description: "Comprehensive curriculum covering all essential subjects with depth and rigor."
    },
    {
      icon: Trophy,
      title: "Co-curricular Activities",
      description: "Sports, arts, music, and clubs that develop well-rounded personalities."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Focus on 21st-century skills including critical thinking and problem-solving."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Group projects and peer learning to enhance communication and teamwork."
    }
  ];

  const achievements = [
    { title: "Board Exam Results", value: "98%", description: "Pass percentage in recent board exams" },
    { title: "College Admissions", value: "95%", description: "Students admitted to top colleges" },
    { title: "Scholarship Winners", value: "50+", description: "Students receiving merit scholarships" },
    { title: "Competition Awards", value: "100+", description: "Awards in academic competitions" }
  ];

  const examSchedule = [
    { exam: "Unit Test 1", date: "April 15-20, 2024", classes: "All Grades" },
    { exam: "Mid-term Exams", date: "May 10-18, 2024", classes: "Grades 6-12" },
    { exam: "Unit Test 2", date: "June 12-16, 2024", classes: "All Grades" },
    { exam: "Final Exams", date: "July 8-20, 2024", classes: "All Grades" }
  ];

  return (
    <div>
      <PageHeader
        title="Academics"
        subtitle="Excellence in education with comprehensive curriculum and innovative teaching methods"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop&q=80"
      />

      {/* Academic Programs */}
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
              Academic Programs
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our structured programs provide age-appropriate learning experiences 
              that challenge students and prepare them for future success.
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-card p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground">
                          {program.title}
                        </h3>
                        <p className="text-secondary font-medium">{program.grades}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-3">Key Subjects:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.subjects.map((subject, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-muted-foreground">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Program Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
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
              Our Curriculum Approach
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Excellence</h2>
            <div className="w-24 h-1 bg-white/30 rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {achievement.title}
                </div>
                <div className="text-white/80 text-sm">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Schedule */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Examination Schedule
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Important examination dates for the current academic session
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Academic Year 2024-25</h3>
              </div>
            </div>

            <div className="divide-y divide-border">
              {examSchedule.map((exam, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-1">
                        {exam.exam}
                      </h4>
                      <p className="text-muted-foreground">{exam.classes}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-primary font-medium">
                        <Clock className="w-4 h-4" />
                        <span>{exam.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-card-foreground mb-4">
              Join Our Academic Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience education that goes beyond textbooks. Enroll your child in 
              our comprehensive academic programs designed for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Apply for Admission
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Download Curriculum Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}