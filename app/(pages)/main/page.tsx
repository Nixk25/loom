"use client";
import Cursor from "@/components/ui/Cursor";
import FooterBottom from "@/components/ui/Footer/FooterBottom";
import MainContent from "@/components/ui/Main/MainContent";
import MainNav from "@/components/ui/Main/MainNav";
import MainText from "@/components/ui/Main/MainText";
import MultiSelectPart from "@/components/ui/Main/MultiSelectPart";
import SearchBar from "@/components/ui/Main/SearchBar";
import React, { useEffect, useState } from "react";

type Photo = {
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

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  console.log(selectedTags);

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

  const filteredPhotos = photos.filter((photo) => {
    const lowerSearchQuery = searchQuery.toLowerCase();

    // Kontrola, zda fotka odpovídá hledanému dotazu
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

    // Filtr podle boolean hodnot
    const matchesSelectedTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => {
        if (tag === "containsPeople" && photo.filters.containsPeople === true) {
          return true;
        }
        if (
          tag === "isBlackAndWhite" &&
          photo.filters.isBlackAndWhite === true
        ) {
          return true;
        }
        return false;
      });

    // Fotka odpovídá, pokud vyhovuje hledání i vybraným filtrům
    return matchesSearchQuery && matchesSelectedTags;
  });

  return (
    <section className="flex justify-center items-center ">
      <MainNav isDrawerOpen={isDrawerOpen} />
      <Cursor />
      <div className="flex mt-[150px] justify-center flex-col items-center gap-10">
        <MainText />
        <div className="flex w-full items-center justify-center gap-10">
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

export default Main;
