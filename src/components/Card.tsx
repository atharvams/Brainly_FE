import { ShareIcon } from "../icons/ShareIcon";
import { TrashIcon } from "../icons/TrashIcon";
import TweetIcon from "../icons/TweetIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function Card({ link, title, type }: CardProps) {
  return (
    <div className="bg-white rounded-md outline-slate-200 border max-w-72 p-2 pb-2 min-h-48 max-h-max min-w-72 hover:bg-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-md font-semibold">
          <div className="text-gray-500 pr-2">
            {type === "youtube" && <YoutubeIcon />}
            {type === "twitter" && <TweetIcon />}
          </div>

          <a href={link}>{title}</a>
        </div>
        <div className="flex items-center justify-center text-gray-500 gap-2">
          <ShareIcon />
          <TrashIcon />
        </div>
      </div>

      <div>
        {type === "youtube" && (
          <div className="p-2 mt-1">
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}

export default Card;
