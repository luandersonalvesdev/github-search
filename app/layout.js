export const metadata = {
  title: 'Github Search',
  description: 'stay on top of everything from your favorite github profiles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>{children}</body>
    </html>
  );
}
