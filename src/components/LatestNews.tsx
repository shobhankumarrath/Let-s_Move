import React from "react";
import grouppeople from "../assets/group-people-discussion.avif";

type NewsItem = {
  title: string;
  date: string;
  author: string;
};

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title:
        "AI Breakthrough: New Algorithm Achieves Near-Human Level Text Summarization",
      date: "October 27, 2023",
      author: "Tech News Desk",
    },
    {
      title:
        "Cybersecurity Alert: Zero-Day Exploit Targeting Popular Web Framework Discovered",
      date: "October 27, 2023",
      author: "Security Analyst",
    },
    {
      title: "Web Development Trend: Serverless Architectures Gaining Momentum",
      date: "October 26, 2023",
      author: "Front-End Focus",
    },
    {
      title:
        "Mobile Development: Cross-Platform Frameworks See Surge in Enterprise Adoption",
      date: "October 26, 2023",
      author: "Mobile Dev Weekly",
    },
    {
      title:
        "AI Ethics Debate: Facial Recognition Technology Under Scrutiny for Bias",
      date: "October 25, 2023",
      author: "AI Watch",
    },
    {
      title:
        "Cybersecurity Best Practices: Companies Urged to Implement Multi-Factor Authentication",
      date: "October 25, 2023",
      author: "Cyber Defense",
    },
    {
      title:
        "Web Development: New JavaScript Library Promises Faster Rendering Speeds",
      date: "October 24, 2023",
      author: "Web Dev Digest",
    },
    {
      title:
        "Mobile Development: Native vs. Cross-Platform - The Ongoing Debate",
      date: "October 24, 2023",
      author: "App Developers Hub",
    },
  ];

  return (
    <section id="#News" className="bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Let’s Checkout our All Latest News
        </h2>
        <p className="text-center text-gray-500 mb-10 uppercase tracking-widest">
          Latest News
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Featured News */}
          <div className="md:col-span-2 space-y-4">
            <img
              src={grouppeople}
              alt="Main News"
              className="rounded-md w-full"
            />
            <div className="flex items-center text-sm text-gray-600 space-x-4">
              <span>👤 by Admin</span>
              <span>📅 23 October 2023</span>
            </div>
            <h3 className="text-xl font-bold">
              Let’s Move Solutions Expands Its Digital Services Across India
            </h3>
            <p className="text-gray-600">
              We’re excited to announce that Let’s Move Solutions is now
              offering premium digital services in Mumbai, Delhi, and Bangalore.
              Our expert team specializes in UI/UX design, web development, and
              digital marketing—delivering tailor-made solutions to help
              businesses grow in the digital era.
            </p>
            <button
              className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded disabled:opacity-60"
              disabled
            >
              Read More »
            </button>
          </div>

          {/* Right: News List */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Latest</h4>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                View All
              </a>
            </div>

            {newsItems.map((item, index) => (
              <div
                key={index}
                className="border-b pb-4 mb-4 text-sm text-gray-700"
              >
                <div className="flex items-center space-x-2 text-gray-500 text-xs mb-1">
                  <span>👤 {item.author}</span>
                  <span>📅 {item.date}</span>
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
