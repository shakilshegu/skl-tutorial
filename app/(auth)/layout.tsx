import { ClerkProvider } from "@clerk/nextjs";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <body className="h-full flex items-center justify-center">
        {children}
      </body>
    </div>
  );
};

export default AuthLayout;
