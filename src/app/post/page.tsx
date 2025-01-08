import Link from "next/link";
import fs from "fs";

const PostPage = () => {
  const files = fs
    .readdirSync("src/markdown")
    .filter((file) => !file.startsWith(".") && file.endsWith(".mdx"))
    .map((file) => ({
      fileName: file.replace(/\.mdx$/, ""),
      time: fs.statSync(`src/markdown/${file}`).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time)
    .map((file) => ({
      ...file,
      title: fs
        .readFileSync(`src/markdown/${file.fileName}.mdx`, "utf-8")
        .trim()
        .split("\n")[0]!
        .replace(/^# /, ""),
    }));

  return (
    <div className="mx-auto w-11/12">
      <h1 className="text-2xl">Posts</h1>
      <ul className="mt-4 list-disc pl-4">
        {files.map((file) => (
          <li key={file.fileName.toString()}>
            <Link href={`/post/${file.fileName}`}>{file.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
