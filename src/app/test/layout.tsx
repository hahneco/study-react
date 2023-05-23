export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <div className="h-screen flex">
      <dir className="bg-gray-100 p-2 2-48">サイドバー</dir>
      <div className="p-2">{children}</div>
    </div>
  );
}
