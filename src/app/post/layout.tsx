import Link from "next/link";

const blogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="flex items-center justify-between p-4">
        <Link href="/">
          <h1 className="inline cursor-pointer text-2xl font-bold text-orange-700 dark:text-orange-500">
            The Ex Nihilo Blog
          </h1>
        </Link>
        <Link href="/post">
          <p className="text-orange-700 dark:text-orange-500">Blog Posts</p>
        </Link>
      </header>
      {children}
    </div>
  );
};

export default blogPostLayout;
