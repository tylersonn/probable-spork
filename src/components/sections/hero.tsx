import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid-pattern">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-theme-gradient-strong">
          The Most Advanced Quantum-Secure Wallet
        </h1>
        <p className="mt-6 text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto">
          Tokens is the next evolution in blockchain technology, designed to unlock the full potential of the Solana ecosystem. 
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="btn-thick-obsidian transition-opacity hover:opacity-90 w-full sm:w-auto">
            Proceed To Buy
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/50 text-foreground transition-opacity hover:opacity-90 hover:bg-foreground/10 w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
