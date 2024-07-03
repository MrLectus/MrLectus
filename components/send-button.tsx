import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { match } from "ts-pattern";
import { LoaderCircleIcon, Mail } from "lucide-react";

export const SendButton = ({ className }: { className?: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className={className} disabled={pending}>
      {match(pending)
        .with(true, () => <LoaderCircleIcon className="animate-spin" />)
        .with(false, () => (
          <>
            <span>Send</span> <Mail />
          </>
        ))
        .exhaustive()}
    </Button>
  );
};
