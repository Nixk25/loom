import React from "react";
import { Input } from "../../input";
import { Textarea } from "../../textarea";
import { Photo } from "../MainClient";
const EditDialogForm = ({ photo }: { photo: Photo }) => {
  return (
    <form className="px-5 flex flex-col gap-5">
      <Input
        type="text"
        name="author"
        placeholder="Enter author's name"
        defaultValue={photo.author || ""}
      />
      <Input
        type="text"
        name="imageUrl"
        defaultValue={photo.imageUrl || ""}
        placeholder="Enter image URL"
      />
      <Input
        type="text"
        name="title"
        placeholder="Enter title"
        defaultValue={photo.title || ""}
      />
      <Textarea
        name="description"
        placeholder="Enter description"
        defaultValue={photo.description || ""}
      />

      <div className="flex flex-col gap-5">
        <Input
          type="text"
          name="location"
          placeholder="Enter location"
          defaultValue={photo.details.location || ""}
        />
        <Input
          type="text"
          name="capturedWith"
          placeholder="Enter camera/model"
          defaultValue={photo.details.capturedWith || ""}
        />
        <Input
          type="datetime-local"
          name="date"
          defaultValue={photo.details.date || ""}
        />
        <Textarea
          name="inspiration"
          placeholder="Enter inspiration details"
          defaultValue={photo.details.inspiration || ""}
        />
      </div>

      <Input
        type="text"
        name="similarTags"
        placeholder="Enter similar tags"
        defaultValue={photo.similarTags?.join(", ") || ""}
      />
    </form>
  );
};

export default EditDialogForm;
