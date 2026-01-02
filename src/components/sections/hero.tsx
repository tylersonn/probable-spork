import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid-pattern">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Fast Loans for Your Big Ideas
        </h1>
        <p className="mt-6 text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto">
        Genesis provides fast, flexible financing to help you achieve your personal and business goals. Unlock your potential with our streamlined application process and competitive rates.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="transition-opacity hover:opacity-90 w-full sm:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/50 text-foreground transition-opacity hover:opacity-90 hover:bg-foreground/10 w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
