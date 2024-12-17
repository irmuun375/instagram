"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type LikeTypes = {
  profileImage: string;
  username: string;
  _id: string;
};

type PostType = {
  _id: string;
  caption: string;
  postImage: string;
  userId: string;
  likes: LikeTypes[];
};

const Page = () => {
  const [posts, setPosts] = useState<PostType[]>([]); // Ensure that posts is an array of PostType
  console.log(posts);

  const getPosts = async () => {
    try {
      const jsonData = await fetch("https://instagram-service-v2.onrender.com/posts");
      const response = await jsonData.json();
      setPosts(response)
    } catch (error) {
      // console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <Carousel>
              <CarouselContent>
                <CarouselItem><img src={post.postImage} /></CarouselItem>
                <div>{post.caption}</div>ƒ
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
