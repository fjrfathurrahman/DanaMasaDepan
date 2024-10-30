import { Button } from "@nextui-org/react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: () => void;
  isPending?: boolean;
}

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[1024px]">
      {children}
    </form>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="py-8 border-b space-y-2">{children}</div>;
};

const Footer = ({ children, isLoading }: { children?: React.ReactNode, isLoading: boolean }) => {
  return (
    <div className="*:w-full *:font-semibold space-y-2.5">
      <Button
        type="submit"
        color="primary"
        variant="solid"
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Submit"}
      </Button>
      {children}
    </div>
  );
};

Form.Header = Header;
Form.Footer = Footer;
