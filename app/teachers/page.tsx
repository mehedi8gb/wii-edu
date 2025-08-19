'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {TeacherSearchHero} from "@/components/TeacherSearchHero";
import {useThemeStore} from "@/store/useThemeStore";


export default function TeachersPage() {
    const { mainGradient } = useThemeStore();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
          <section className={`${mainGradient} text-white py-16 md:py-24`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Teacher</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Meet our distinguished faculty members who bring expertise, passion, and real-world experience to guide
                your educational journey
              </p>
            </div>
          </div>
        </section>

        {/* Teacher Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Expert Teacher</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Hold Advanced Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12:1</div>
                <div className="text-muted-foreground">Student-Teacher Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Avg Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Directory */}
        <section className="py-20">
              <TeacherSearchHero />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className={`${mainGradient} rounded-2xl p-8 md:p-12 text-center text-white`}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Learn from the Best</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join our community of learners and benefit from personalized guidance from industry experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="/admissions">Apply Now</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <a href="/contact">Contact Teacher</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
