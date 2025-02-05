import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";

interface ContentModelProps {
  open: boolean;
  onClose: () => void;
}

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Links = "links",
}

function ContentModel({ open, onClose }: ContentModelProps) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    console.log(title, link);
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onClose();
  };

  return (
    <div>
      {open && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0">
          {/* Background overlay */}
          <div className="absolute w-full h-full top-0 left-0 bg-slate-600 opacity-60"></div>

          {/* Modal content */}
          <div className="relative bg-white p-4 rounded-md z-10 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Add Content</p>
              <button onClick={onClose} className="pointer">
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col pb-4">
              <Input
                type="text"
                onChange={() => {}}
                reference={titleRef}
                placeholder="Title"
              />
              <Input
                type="text"
                onChange={() => {}}
                reference={linkRef}
                placeholder="Link"
              />
            </div>
            <div className="flex gap-2 pb-4">
              <Button
                text="Youtube"
                varient={type === ContentType.Youtube ? "primary" : "secondary"}
                onClick={() => {
                  setType(ContentType.Youtube);
                }}
              />
              <Button
                text="Twitter"
                varient={type === ContentType.Twitter ? "primary" : "secondary"}
                onClick={() => {
                  setType(ContentType.Twitter);
                }}
              />
            </div>
            <div className="flex justify-center">
              <Button
                varient={"primary"}
                text={"Submit"}
                onClick={addContent}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentModel;
