import { prisma } from "@/lib/prisma";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import {
  Film,
  Music,
  Users,
  Mic,
  Camera,
  Palette,
  Sparkles,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  actors: Film,
  musicians: Music,
  dancers: Users,
  "voice-artists": Mic,
  models: Camera,
  artists: Palette,
};

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
              Talent Categories
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our diverse range of professional talents.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {categories.length === 0 ? (
              <p className="text-slate-400 text-center text-lg">
                No categories have been created yet.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {categories.map((category, index) => {
                  const Icon = iconMap[category.slug] || Sparkles;

                  return (
                    <Link
                      href={`/talents?category=${category.slug}`}
                      key={category.id}
                      className="group relative"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

                        <div className="relative w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent" />
                        </div>

                        <div className="relative space-y-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-slate-400 line-clamp-2">
                            {category.description || "Browse this category"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
