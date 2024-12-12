import React from "react";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "../MultiSelect";

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
      className="w-max"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select filters" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {filterOptions.map((option) => (
            <MultiSelectorItem
              key={option.value}
              value={option.label}
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
