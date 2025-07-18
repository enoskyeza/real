'use client'
import React, {useState} from 'react';
import {Search, ArrowRight, Tag, TrendingUp, Eye} from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

const blogPosts = [
    {
        id: 1,
        title: 'The Future of Sustainable Architecture in Uganda',
        excerpt: 'Exploring how green building practices are transforming the architectural landscape across Uganda, from solar integration to locally sourced materials.',
        content: 'As Uganda continues to develop rapidly, the need for sustainable architecture has never been more critical. Our latest projects demonstrate how traditional building methods can be enhanced with modern sustainable practices...',
        category: 'Uganda Architecture Trends',
        author: 'David Kamau',
        authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2024-01-15',
        readTime: '5 min read',
        views: 1247,
        image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: true,
        tags: ['Sustainability', 'Green Building', 'Uganda', 'Innovation']
    },
    // {
    //   id: 2,
    //   title: 'Behind the Build: Kampala Business Center',
    //   excerpt: 'Take a behind-the-scenes look at the construction of our latest commercial masterpiece, from initial concept to final completion.',
    //   content: 'The Kampala Business Center project presented unique challenges that required innovative solutions. Here\'s how our team approached each obstacle...',
    //   category: 'Behind the Build',
    //   author: 'Sarah Nakimuli',
    //   authorImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    //   date: '2024-01-10',
    //   readTime: '8 min read',
    //   views: 892,
    //   image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    //   featured: false,
    //   tags: ['Commercial', 'Case Study', 'Construction', 'Design Process']
    // },
    {
        id: 3,
        title: 'How to Choose the Right Architect for Your Project',
        excerpt: 'Essential tips for finding and working with the perfect architect for your construction project, from initial consultation to project completion.',
        content: 'Selecting the right architect is crucial for the success of your project. Here are the key factors to consider when making this important decision...',
        category: 'How-To Guides',
        author: 'James Mugisha',
        authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2024-01-05',
        readTime: '6 min read',
        views: 1534,
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: false,
        tags: ['Tips', 'Client Guide', 'Architecture', 'Planning']
    },
    {
        id: 4,
        title: 'Modern Residential Design Trends in East Africa',
        excerpt: 'Discover the latest trends shaping residential architecture across East Africa, from minimalist designs to smart home integration.',
        content: 'East African residential architecture is experiencing a renaissance, blending traditional elements with contemporary design principles...',
        category: 'Uganda Architecture Trends',
        author: 'Grace Nalumansi',
        authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2024-01-02',
        readTime: '7 min read',
        views: 967,
        image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: false,
        tags: ['Residential', 'Trends', 'East Africa', 'Modern Design']
    },
    {
        id: 5,
        title: 'In the Studio: Our Design Process Revealed',
        excerpt: 'Get an exclusive look inside our design studio and learn about the creative process behind our award-winning architectural projects.',
        content: 'Our design process is a carefully orchestrated blend of creativity, technical expertise, and client collaboration...',
        category: 'In the Studio',
        author: 'Michael Ssebunya',
        authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2023-12-28',
        readTime: '9 min read',
        views: 743,
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: false,
        tags: ['Design Process', 'Studio', 'Creative', 'Architecture']
    },
    {
        id: 6,
        title: 'Maximizing Natural Light in Tropical Architecture',
        excerpt: 'Learn how to harness Uganda\'s abundant natural light while managing heat and glare in your architectural designs.',
        content: 'In tropical climates like Uganda\'s, natural light is both a blessing and a challenge. Here\'s how we approach this delicate balance...',
        category: 'How-To Guides',
        author: 'David Kamau',
        authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2023-12-20',
        readTime: '6 min read',
        views: 1156,
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: false,
        tags: ['Natural Light', 'Tropical', 'Design Tips', 'Climate']
    },
    {
        id: 7,
        title: 'The Rise of Co-working Spaces in Kampala',
        excerpt: 'Analyzing the growing trend of co-working spaces in Kampala and how architecture is adapting to support flexible work environments.',
        content: 'The co-working revolution has reached Kampala, and architects are responding with innovative designs that foster collaboration...',
        category: 'Uganda Architecture Trends',
        author: 'Sarah Nakimuli',
        authorImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2023-12-15',
        readTime: '5 min read',
        views: 834,
        image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: false,
        tags: ['Co-working', 'Commercial', 'Kampala', 'Workplace Design']
    },
    {
        id: 8,
        title: 'Building with Local Materials: A Sustainable Approach',
        excerpt: 'Discover how using locally sourced materials can reduce costs, support communities, and create authentic architectural expressions.',
        content: 'Local materials offer more than just cost savings - they connect buildings to their environment and support local economies...',
        category: 'Uganda Architecture Trends',
        author: 'James Mugisha',
        authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        date: '2023-12-10',
        readTime: '7 min read',
        views: 1089,
        image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        featured: false,
        tags: ['Local Materials', 'Sustainability', 'Community', 'Cost-Effective']
    }
];

const categories = [
    'All Posts',
    'Uganda Architecture Trends',
    'Behind the Build',
    'How-To Guides',
    'In the Studio'
];

const popularTags = [
    'Sustainability',
    'Design Process',
    'Commercial',
    'Residential',
    'Uganda',
    'Modern Design',
    'Construction',
    'Tips'
];

export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState('All Posts');
    const [searchTerm, setSearchTerm] = useState('');

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const filteredPosts = regularPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const mostPopularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5);

    return (
        <div className="pt-20 min-h-screen bg-gray-50 dark:bg-slate-900">
            {/* Header */}
            <section className="py-20 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                            The Architect&apos;s Insight
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Latest thoughts, trends, and insights from our team of architectural experts
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="pb-16 bg-white dark:bg-slate-800">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex items-center space-x-2 mb-8">
                            <TrendingUp className="w-6 h-6 brand-text-primary"/>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Featured Article</h2>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                                    </div>
                                </div>

                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center space-x-4 mb-4">
                    <span
                        className="bg-red-100 dark:bg-red-900/30 brand-text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                                        <div
                                            className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm">
                                            <Eye className="w-4 h-4"/>
                                            <span>{featuredPost.views.toLocaleString()} views</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                        {featuredPost.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                src={featuredPost.authorImage}
                                                alt={featuredPost.author}
                                                width={800}              // desired display width in px
                                                height={500}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-slate-800 dark:text-white">{featuredPost.author}</p>
                                                <div
                                                    className="flex items-center space-x-3 text-sm text-slate-500 dark:text-slate-400">
                                                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                                                    <span>•</span>
                                                    <span>{featuredPost.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="bg-brand-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2 w-fit">
                                        <span>Read Full Article</span>
                                        <ArrowRight className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Search and Filters */}
            <section className="py-8 bg-gray-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-4 lg:px-8">
                    <div
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        selectedCategory === category
                                            ? 'bg-brand-primary text-white'
                                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-red-100 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"/>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-red-600 dark:focus:border-red-400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Blog Posts */}
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredPosts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                                    >
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={800}              // desired display width in px
                                                height={500}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 left-4">
                        <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <div
                                                    className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                                    <Eye className="w-3 h-3"/>
                                                    <span>{post.views}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <Image
                                                        src={post.authorImage}
                                                        alt={post.author}
                                                        width={800}              // desired display width in px
                                                        height={500}
                                                        className="w-8 h-8 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <p className="text-sm font-medium text-slate-800 dark:text-white">{post.author}</p>
                                                        <div
                                                            className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                                                            <span>{new Date(post.date).toLocaleDateString()}</span>
                                                            <span>•</span>
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {post.tags.slice(0, 3).map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs"
                                                    >
                            {tag}
                          </span>
                                                ))}
                                            </div>

                                            <button
                                                className="w-full bg-brand-primary hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                                                <span>Read More</span>
                                                <ArrowRight className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {filteredPosts.length === 0 && (
                                <div className="text-center py-16">
                                    <p className="text-xl text-slate-600 dark:text-slate-300">
                                        No articles found matching your criteria.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Newsletter Signup */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                    Stay Updated
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    Get the latest architectural insights delivered to your inbox.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-red-600 dark:focus:border-red-400"
                                    />
                                    <button
                                        className="w-full bg-brand-primary hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            {/* Popular Posts */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                    Most Popular
                                </h3>
                                <div className="space-y-4">
                                    {mostPopularPosts.map((post, index) => (
                                        <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                      <span
                          className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-slate-800 dark:text-white group-hover:text-orange-700 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <div
                                                    className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                    <Eye className="w-3 h-3"/>
                                                    <span>{post.views.toLocaleString()} views</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                    Popular Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map((tag, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSearchTerm(tag)}
                                            className="bg-gray-100 dark:bg-slate-700 hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-red-400 px-3 py-1 rounded-full text-sm transition-colors duration-300 flex items-center space-x-1"
                                        >
                                            <Tag className="w-3 h-3"/>
                                            <span>{tag}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-brand-primary rounded-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">
                                    Start Your Project
                                </h3>
                                <p className="mb-4 opacity-90">
                                    Ready to bring your architectural vision to life? Let&apos;s discuss your project.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white brand-text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}