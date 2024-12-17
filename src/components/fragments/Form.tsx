import { Button, ButtonProps } from "@nextui-org/react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: () => void;
  isPending?: boolean;
}

export const Form = ({ onSubmit, children, className }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={`mx-auto max-w-[1024px] space-y-6 ${className}`}>
      {children}
    </form>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="pb-8 border-b space-y-2">{children}</div>;
};

const Footer = ({ children, isLoading, ...props }: { children?: React.ReactNode, isLoading: boolean } & ButtonProps) => {
  return (
    <div className="*:w-full *:font-semibold space-y-2.5">
      <Button
        {...props}
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
