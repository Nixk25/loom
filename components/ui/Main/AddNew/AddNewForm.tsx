import React from "react";
import { Input } from "../../input";
import { Textarea } from "../../textarea";

const AddNewForm = () => {
  return (
    <form className="flex flex-col gap-5 px-5">
      <Input type="text" name="author" placeholder="Enter author's name" />
      <Input type="text" name="imageUrl" placeholder="Enter image URL" />
      <Input type="text" name="title" placeholder="Enter title" />
      <Textarea name="description" placeholder="Enter description" />

      <div className=" flex flex-col gap-5">
        <Input type="text" name="location" placeholder="Enter location" />
        <Input
          type="text"
          name="capturedWith"
          placeholder="Enter camera/model"
        />
        <Input type="datetime-local" name="date" />
        <Textarea name="inspiration" placeholder="Enter inspiration details" />
      </div>

      <Input type="text" name="similarTags" placeholder="Enter similar tags" />
    </form>
  );
};

export default AddNewForm;
