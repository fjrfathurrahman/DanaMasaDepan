import { LayoutProps } from "@/lib/types/TypeTailwind";
import { cn } from "@/lib/utils/cn";

const Section: React.FC<LayoutProps> = ({ children, className, sizing, spacing, flexbox, bg, bgSecondary, ...props}) => {
  const backgroundClasses = bgSecondary ? 'bg-lightSecondary dark:bg-darkSecondary' : '';
  const classes = cn('max-w-full', bg, sizing, spacing, flexbox, className, backgroundClasses);
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};


const Container: React.FC<LayoutProps> = ({ children, className, sizing = ['min-h-[600px] sm:min-h-[700px]'], spacing, flexbox, ...props}) => {
  const classes = cn('w-full container mx-auto py-12 relative z-40', sizing, spacing, flexbox, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};


const Box: React.FC<LayoutProps> = ({ children, className, sizing, spacing, flexbox, ...props}) => {
  const classes = cn('border-zinc-400 dark:border-zinc-700', sizing, spacing, flexbox, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}


const BoxFlex: React.FC<LayoutProps> = ({ children, className, sizing, spacing, flexbox = ['flex', 'flex-col', 'gap-4'], ...props}) => {
  const classes = cn('border-zinc-400 dark:border-zinc-700', sizing, spacing, flexbox, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

const BoxGrid: React.FC<LayoutProps> = ({ children, className, sizing, spacing, grid = ['grid', 'lg:grid-cols-2', 'gap-8'], ...props}) => {
  const classes = cn('relative z-50 border-zinc-400 dark:border-zinc-700',sizing, spacing, grid, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

const Export = { Section, Container, Box, BoxFlex, BoxGrid }
export default Export