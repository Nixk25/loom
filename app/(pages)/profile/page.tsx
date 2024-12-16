"use client";
import Cursor from "@/components/ui/Cursor";
import React, { useEffect, useState } from "react";
import { useUser } from "@/app/UserContext";
import { Photo } from "@/components/ui/Main/MainClient";
import BackProfileButton from "@/components/ui/Profile/BackProfileButton";
import LogoutButton from "@/components/ui/Profile/LogoutButton";
import Image from "next/image";
const Profile = () => {
  const { currentUser } = useUser();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [userPhotos, setUserPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("/data/photos.json");
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const getUserPosts = () => {
    if (!currentUser || !currentUser.posts) return [];
    return photos.filter((photo) => currentUser?.posts?.includes(photo.id));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    const filteredPhotos = getUserPosts();
    setUserPhotos(filteredPhotos);
  }, [photos, currentUser]);

  return (
    <section className="min-h-screen flex flex-col gap-5 p-5">
      <BackProfileButton />
      <LogoutButton />
      <Cursor />
      <div className="profileHeadline uppercase text-start w-full leading-[50px] sm:leading-[120px] tracking-tighter mt-10">
        <span className="font">He</span>l<span className="font">l</span>o,{" "}
        {currentUser?.firstName} {currentUser?.surname}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  gap-5">
        {userPhotos.length > 0 ? (
          userPhotos.map((photo) => (
            <div key={photo.id} className=" rounded-md overflow-hidden ">
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-auto"
                width={400}
                height={400}
              />
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;
