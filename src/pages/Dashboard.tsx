import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import ContentModel from "../components/ContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [modelOpen, SetModelOpen] = useState(false);

  const { contents, reFresh } = useContent();

  const modelClose = () => {
    SetModelOpen((modelOpen) => !modelOpen);
  };

  useEffect(() => {
    reFresh();
  }, [modelOpen]);

  return (
    <>
      <Sidebar />
      <div>
        <div className="p-4 ml-72 bg-gray-100 border-2">
          <ContentModel open={modelOpen} onClose={modelClose} />
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold pl-4 text-gray-800">All Notes</h1>

            <div className="flex justify-end gap-4">
              <Button
                text={"Share Brain"}
                varient="secondary"
                startIcon={<ShareIcon />}
              />
              <Button
                text={"Add Content"}
                varient="primary"
                startIcon={<PlusIcon />}
                onClick={() => {
                  SetModelOpen(true);
                }}
              />
            </div>
          </div>

          <div className="flex gap-4 m-4 flex-wrap">
            {/* {contents} */}
            {contents.map((content, idx) => (
              <Card
                key={idx}
                link={content.link}
                title={content.title}
                type={content.type}
              />
            ))}
            <Card
              link={"https://x.com/takeUforward_/status/1885935700450951654"}
              title={"tweet"}
              type={"twitter"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
