"use client";

interface Props {
  message: string;
}

export default function UserMessage({ message }: Props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex items-start gap-4">
        <img
          alt="User Avatar"
          className="rounded-full"
          height={40}
          src="/user.png"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="flex-1">
          <p className="font-bold">You</p>
          <div className="prose dark:prose-invert">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
