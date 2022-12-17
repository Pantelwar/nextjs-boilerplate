import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store";

interface GuestGuardProps {
  children: React.ReactNode;
}

const GuestGuard: React.FC<GuestGuardProps> = (props) => {
  const { children } = props;
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  React.useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (isAuthenticated) {
      router.replace((router.query.redirect as string) ?? "/profile");
    }
  }, [router.isReady, isAuthenticated]);

  // The following route must be a public route e.g., Login page
  // So, the rendered HTML must be shown as soon as possible
  return <>{children}</>;
};

export default GuestGuard;
