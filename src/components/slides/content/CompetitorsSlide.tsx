import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CompetitorsSlideProps {
  data: {
    competitors: Array<{
      name: string;
      logoUrl?: string;
      revenue30d: string;
      revenueNote?: string;
      volume30d?: string;
      volumeCumulative?: string;
    }>;
  };
}

export const CompetitorsSlide = ({ data }: CompetitorsSlideProps) => {
  return (
    <div className="space-y-6 h-full pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.competitors.map((comp, index) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="card-glass hover:border-primary/30 transition-colors flex gap-4 p-5"
          >
            <Avatar className="h-14 w-14 shrink-0 border-2 border-primary/20">
              <AvatarImage src={comp.logoUrl} alt={comp.name} />
              <AvatarFallback className="text-lg font-display font-semibold text-primary bg-primary/10">
                {comp.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 space-y-2">
              <h3 className="text-base font-display font-semibold text-foreground">
                {comp.name}
              </h3>
              <div className="space-y-1">
                <p className="text-sm text-foreground">
                  <span className="text-muted-foreground">Revenue (30d): </span>
                  <span className="font-semibold text-primary">{comp.revenue30d}</span>
                </p>
                {comp.revenueNote && (
                  <p className="text-xs text-muted-foreground">{comp.revenueNote}</p>
                )}
                <p className="text-sm text-foreground">
                  <span className="text-muted-foreground">DEX agg volume (30d): </span>
                  <span className="font-semibold">
                    {comp.volume30d ?? "—"}
                    {comp.volumeCumulative != null && (
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        · cumulative: {comp.volumeCumulative}
                      </span>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
