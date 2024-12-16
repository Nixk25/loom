"use client";
import Cursor from "@/components/ui/Cursor";
import FooterBottom from "@/components/ui/Footer/FooterBottom";
import MainBlocks from "@/components/ui/Main/MainBlocks";
import MainContent from "@/components/ui/Main/MainContent";
import MainNav from "@/components/ui/Main/MainNavbar/MainNav";
import MainText from "@/components/ui/Main/MainTop/MainText";
import MultiSelectPart from "@/components/ui/Main/MainTop/MultiSelectPart";
import SearchBar from "@/components/ui/Main/MainTop/SearchBar";
import React, { useEffect, useState } from "react";
export type Photo = {
  id: number;
  author: string;
  imageUrl: string;
  title: string;
  description: string;
  details: {
    location: string;
    capturedWith: string;
    date: string;
    time: string;
    inspiration: string;
    medium?: string;
    dimensions?: string;
    completionDate?: string;
    material?: string;
    height?: string;
    installationDate?: string;
  };
  similarTags: string[];
  filters: {
    containsPeople: boolean;
    isBlackAndWhite: boolean;
  };
};

const MainClient = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
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

    fetchPhotos();
  }, []);

  useEffect(() => {
    document.body.style.setProperty("height", "100vh");
    requestAnimationFrame(() => {
      document.body.style.setProperty("overflow", "hidden");
    });
  }, []);

  useEffect(() => {
    if (isTransition) {
      const transitionTimer = setTimeout(() => {
        setIsTransition(false);
      }, 1);
      const bodyTimer = setTimeout(() => {
        document.body.style.setProperty("height", "auto", "important");
        document.body.style.setProperty("overflow", "auto", "important");
      }, 3000);

      return () => {
        clearTimeout(transitionTimer);
        clearTimeout(bodyTimer);
      };
    }
  }, []);

  const filteredPhotos = photos.filter((photo) => {
    const lowerSearchQuery = searchQuery.toLowerCase();

    const matchesSearchQuery =
      searchQuery === "" ||
      photo.author.toLowerCase().includes(lowerSearchQuery) ||
      photo.title.toLowerCase().includes(lowerSearchQuery) ||
      photo.description.toLowerCase().includes(lowerSearchQuery) ||
      photo.similarTags.some((tag) =>
        tag.toLowerCase().includes(lowerSearchQuery)
      ) ||
      photo.details.location?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.capturedWith?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.date?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.time?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.inspiration?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.medium?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.dimensions?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.completionDate?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.material?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.height?.toLowerCase().includes(lowerSearchQuery) ||
      photo.details.installationDate?.toLowerCase().includes(lowerSearchQuery);

    const matchesSelectedTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => {
        if (
          tag === "Contains People" &&
          photo.filters.containsPeople === true
        ) {
          return true;
        }
        if (
          tag === "Black and White" &&
          photo.filters.isBlackAndWhite === true
        ) {
          return true;
        }
        return false;
      });

    return matchesSearchQuery && matchesSelectedTags;
  });

  return (
    <section className="flex justify-center items-center overflow-hidden">
      <MainNav
        isDrawerOpen={isDrawerOpen}
        photos={photos}
        setPhotos={setPhotos}
      />
      <Cursor />
      <MainBlocks isTransition={isTransition} />
      <div className="flex mt-[150px] justify-center flex-col items-center gap-10">
        <MainText />
        <div className="flex w-full items-center px-10 flex-col md:flex-row justify-center gap-10">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <MultiSelectPart
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
        <MainContent
          setSearchQuery={setSearchQuery}
          filteredPhotos={filteredPhotos}
          selectedTags={selectedTags}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />

        <FooterBottom />
      </div>
    </section>
  );
};

export default MainClient;
