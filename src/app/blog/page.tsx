import React from 'react';
import Image from 'next/image';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  caption: string;
  image: string;
  link?: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 'crewai-tutorial',
    title: 'Learning CrewAI via DeepLearningAI',
    date: 'May 14, 2025',
    caption:
      "Completed the CrewAI tutorial on DeepLearningAI in preparation for upcoming work involving autonomous agent orchestration. Gearing up for implementation starting 14th May 2025.",
    image: '/images/140525.png',
  },
  {
    id: 'cpf-internship-start',
    title: 'Start of Software Engineering Internship at CPF Board',
    date: 'May 13, 2025',
    caption:
      "First day at CPF Board as a Software Engineer Intern. Excited to contribute meaningfully to digital services and gain real-world engineering experience.",
    image: '/images/130525-2.png',
  },
  {
    id: 'jane-street-dinner',
    title: 'Jane Street Pre-Application Dinner',
    date: 'May 13, 2025',
    caption:
      "Attended Jane Street’s pre-application networking dinner — a valuable session filled with insights on their unique work culture and hiring process.",
    image: '/images/130525-1.png',
  },
];

export default function BlogPage() {
  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-sm text-gray-500">Sharing my journey in tech</p>
        </div>
        <div className="max-w-md mx-auto px-2 sm:px-4">
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-1">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {post.date}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <p className="text-gray-600 mb-4">
                    {post.caption}
                  </p>
                  {/* No link shown as per instructions */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
