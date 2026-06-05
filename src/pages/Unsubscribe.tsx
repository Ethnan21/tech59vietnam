import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    setSubmitting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) setState("success");
      else if (data.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="glass-strong border border-primary/20 rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="font-display text-3xl font-bold mb-4 text-gradient-animated">
          Email preferences
        </h1>

        {state === "loading" && (
          <div className="flex justify-center py-6">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}

        {state === "valid" && (
          <>
            <p className="text-foreground/70 mb-6">
              Click below to unsubscribe from TECH59 emails.
            </p>
            <Button variant="hero" onClick={confirm} disabled={submitting} className="w-full">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Confirm unsubscribe"}
            </Button>
          </>
        )}

        {state === "success" && (
          <p className="text-foreground/80">You've been unsubscribed. Sorry to see you go.</p>
        )}

        {state === "already" && (
          <p className="text-foreground/80">This email is already unsubscribed.</p>
        )}

        {state === "invalid" && (
          <p className="text-foreground/80">This unsubscribe link is invalid or has expired.</p>
        )}

        {state === "error" && (
          <p className="text-foreground/80">Something went wrong. Please try again later.</p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
