// import "../../styles/globals.css";
'use client';
import "../styles/globals.css";

// export const metadata = {
//   title: "Farm Management App",
//   description: "A Farm Management Application generated with Tailwind and React",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
