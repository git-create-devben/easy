import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from 'next/navigation';

export function SignOut() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut();
      router.push('/');
    }
  };

  return <button onClick={handleSignOut} className="text-white">Sign out</button>;
}