import React from "react";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "../MultiSelect";

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

const MultiSelectPart = ({
  setSelectedTags,
  selectedTags,
}: {
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTags: string[];
}) => {
  const filterOptions = [
    { value: "containsPeople", label: "Contains People" },
    { value: "isBlackAndWhite", label: "Black and White" },
  ];

  return (
    <MultiSelector
      values={selectedTags}
      onValuesChange={setSelectedTags}
      loop
      className="max-w-xs"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select filters" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {filterOptions.map((option) => (
            <MultiSelectorItem
              key={option.value}
              value={option.value}
              className="flex items-center gap-2"
            >
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default MultiSelectPart;
