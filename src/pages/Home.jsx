import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 bg-white">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center py-32 relative">
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <Container>
          <div className="text-center relative z-10 text-white">
            <h1 className="text-6xl font-bold mb-4">InkHub - Share Your Stories</h1>
            <p className="text-2xl mb-6">A creative space to share your thoughts, stories, and experiences with the world.</p>
            <button className="px-10 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
              Start Writing
            </button>
          </div>
        </Container>
      </section>

      {/* Featured Posts Section */}
      <section className="w-full py-16 bg-gray-100">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-10">Featured Posts</h2>
          <div className="flex flex-wrap -mx-2 justify-center">
            {posts.length === 0 ? (
              <div className="w-full text-center">
                <h3 className="text-2xl text-gray-600">No posts found</h3>
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/3">
                  <PostCard {...post} />
                </div>
              ))
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
