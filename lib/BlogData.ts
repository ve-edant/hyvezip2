// data/blogData.ts

export interface BlogPostContent {
  type: "paragraph" | "heading" | "quote" | "list";
  text?: string;
  author?: string;
  items?: string[];
}

export interface BlogPost {
  title: string;
  category: string;
  heroImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  content: BlogPostContent[];
  tags: string[];
}

export const blogPosts: Record<string, BlogPost> = {
  "future-of-freelancing": {
    title: "The Future of Freelancing: Why Teams Are the New Solo",
    category: "Industry Insights",
    author: {
      name: "Sarah Chen",
      role: "Head of Community",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    date: "Dec 20, 2024",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "The freelance economy has undergone a remarkable transformation over the past decade. What began as a movement of independent workers seeking flexibility has evolved into something far more sophisticated—a collaborative ecosystem where teams of specialists come together to tackle complex projects."
      },
      {
        type: "heading",
        text: "The Rise of Collaborative Freelancing"
      },
      {
        type: "paragraph",
        text: "Traditional freelancing often meant working in isolation, competing against peers for individual gigs. But the landscape is shifting. Today's most successful freelancers are those who've learned to collaborate, forming dynamic teams that can deliver enterprise-level results while maintaining the agility that makes freelancing attractive."
      },
      {
        type: "quote",
        text: "The future belongs to freelancers who can collaborate seamlessly while maintaining their independence.",
        author: "Sarah Chen"
      },
      {
        type: "heading",
        text: "Why Companies Are Embracing Team-Based Freelancing"
      },
      {
        type: "paragraph",
        text: "Enterprise clients are increasingly turning to freelance teams for several compelling reasons. First, they get access to diverse skill sets without the overhead of full-time hires. Second, they benefit from the passion and expertise that freelancers bring—these are professionals who've chosen their craft, not been assigned to it."
      },
      {
        type: "list",
        items: [
          "Access to specialized talent on-demand",
          "Reduced overhead and flexible scaling",
          "Fresh perspectives from diverse backgrounds",
          "Faster project completion through parallel workflows",
          "Lower risk with milestone-based payments"
        ]
      },
      {
        type: "heading",
        text: "Building Your Dream Team"
      },
      {
        type: "paragraph",
        text: "The key to successful team freelancing lies in finding complementary skills and aligned values. At HYVE, we've seen the most successful teams form around shared project types—a designer who always works with the same developer, a writer who partners with a specific strategist."
      },
      {
        type: "paragraph",
        text: "These partnerships develop into something more valuable than the sum of their parts. They build shared processes, understand each other's working styles, and can deliver cohesive results that would be impossible for strangers collaborating for the first time."
      },
      {
        type: "heading",
        text: "The Path Forward"
      },
      {
        type: "paragraph",
        text: "As we look to the future, the distinction between 'freelancer' and 'agency' will continue to blur. The most successful independents will be those who can fluidly move between solo work and team collaboration, choosing the right mode for each project."
      },
      {
        type: "paragraph",
        text: "Platforms like HYVE are designed for this new reality—making it easy to find collaborators, form teams, and manage complex projects while keeping the freedom and flexibility that drew us to freelancing in the first place."
      }
    ],
    tags: ["Freelancing", "Teams", "Future of Work", "Collaboration"]
  },
  "building-portfolio": {
    title: "Building a Portfolio That Actually Gets You Hired",
    category: "Career Growth",
    author: {
      name: "Marcus Johnson",
      role: "Senior Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    date: "Dec 18, 2024",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Your portfolio is more than a collection of work samples—it's your story, your brand, and often your first impression. After reviewing thousands of portfolios and hiring dozens of freelancers, I've learned what separates the good from the exceptional."
      },
      {
        type: "heading",
        text: "Quality Over Quantity"
      },
      {
        type: "paragraph",
        text: "The biggest mistake I see is portfolios stuffed with every project ever completed. Clients don't have time to sift through dozens of mediocre pieces to find your gems. Curate ruthlessly. Five outstanding projects will always beat twenty average ones."
      },
      {
        type: "quote",
        text: "Your portfolio should only contain work you'd be thrilled to do again.",
        author: "Marcus Johnson"
      },
      {
        type: "heading",
        text: "Tell the Story Behind the Work"
      },
      {
        type: "paragraph",
        text: "Beautiful visuals aren't enough. Clients want to understand your process, your thinking, and the results you achieved. For each project, answer these questions: What was the challenge? What was your approach? What was the outcome?"
      },
      {
        type: "list",
        items: [
          "Start with the problem or brief",
          "Explain your strategic approach",
          "Show your process, not just finals",
          "Include measurable results when possible",
          "Add client testimonials for credibility"
        ]
      },
      {
        type: "heading",
        text: "Specialize to Stand Out"
      },
      {
        type: "paragraph",
        text: "Generalists compete on price. Specialists compete on value. If you try to appeal to everyone, you'll appeal to no one. Choose a niche—whether it's an industry, a style, or a specific type of project—and become known for it."
      }
    ],
    tags: ["Portfolio", "Career", "Design", "Tips"]
  },
  "pricing-strategies": {
    title: "Pricing Strategies That Value Your Worth",
    category: "Business Tips",
    author: {
      name: "Elena Rodriguez",
      role: "Business Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    date: "Dec 15, 2024",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Pricing is one of the most challenging aspects of freelancing. Charge too little and you'll burn out chasing volume. Charge too much without the positioning to back it up, and you'll struggle to find clients. Here's how to find your sweet spot."
      },
      {
        type: "heading",
        text: "Stop Thinking in Hours"
      },
      {
        type: "paragraph",
        text: "Hourly billing punishes efficiency. The better you get at your craft, the less you earn per project. Instead, focus on value-based pricing. What is the outcome worth to your client? A logo might take you 4 hours, but if it helps a startup raise millions, it's worth far more than 4x your hourly rate."
      },
      {
        type: "quote",
        text: "Price based on the value you create, not the time you spend.",
        author: "Elena Rodriguez"
      },
      {
        type: "heading",
        text: "The Three-Tier Strategy"
      },
      {
        type: "paragraph",
        text: "Always offer three options: basic, standard, and premium. Psychology shows that most people choose the middle option, so make that your ideal engagement. The basic option serves as an anchor, and the premium option makes your standard seem reasonable while occasionally landing you a bigger project."
      }
    ],
    tags: ["Pricing", "Business", "Strategy", "Growth"]
  }
};

export const relatedPosts = [
  {
    slug: "building-portfolio",
    title: "Building a Portfolio That Gets You Hired",
    category: "Career Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    slug: "pricing-strategies",
    title: "Pricing Strategies That Value Your Worth",
    category: "Business Tips",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
  },
  {
    slug: "future-of-freelancing",
    title: "The Future of Freelancing: Teams Are the New Solo",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop"
  }
];