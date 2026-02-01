import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamSlideProps {
  data: {
    members: Array<{
      name: string;
      title: string;
      description: string;
      imageUrl?: string;
    }>;
  };
}

export const TeamSlide = ({ data }: TeamSlideProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full pb-16">
      {data.members.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="card-glass hover:border-primary/30 transition-colors flex flex-col items-center text-center"
        >
          <Avatar className="h-28 w-28 mb-4 border-4 border-primary/20">
            <AvatarImage src={member.imageUrl} alt={member.name} />
            <AvatarFallback className="text-2xl font-display font-semibold text-primary bg-primary/10">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-display font-semibold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">{member.title}</p>
          <p className="text-sm text-muted-foreground whitespace-pre-line">{member.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
