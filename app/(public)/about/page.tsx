import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import { Award, Users, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
              About Ambassadors
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Connecting visionary projects with extraordinary talent.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-700">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                  alt="Agency team meeting"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                  Our Story
                </h2>
                <p className="text-lg text-slate-300">
                  Founded in 2020, Ambassadors was born from a simple idea: to
                  create a talent agency that prioritizes transparency,
                  professionalism, and a genuine passion for the arts. We saw a
                  gap between incredible, undiscovered talent and the projects
                  that needed them.
                </p>
                <p className="text-slate-400">
                  Today, we are a leading agency representing a diverse roster
                  of actors, musicians, dancers, and models. Our mission is to
                  nurture the careers of our artists and to provide our clients
                  with the perfect talent to bring their visions to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Our Mission & Values
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We are guided by a core set of principles that define who we are
                and how we work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-950/50 border border-slate-700 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Passion</h3>
                <p className="text-slate-400">
                  We are driven by a deep love for the creative arts and the
                  extraordinary individuals who bring them to life.
                </p>
              </div>
              <div className="bg-slate-950/50 border border-slate-700 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Partnership</h3>
                <p className="text-slate-400">
                  We build lasting relationships with our clients and talents,
                  working collaboratively to achieve shared success.
                </p>
              </div>
              <div className="bg-slate-950/50 border border-slate-700 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Excellence</h3>
                <p className="text-slate-400">
                  We hold ourselves to the highest standards, representing only
                  the best and delivering exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Meet the Team
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                The dedicated professionals behind our success.
              </p>
            </div>
            <p className="text-slate-400 text-center">
              (Team member profiles will go here.)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
