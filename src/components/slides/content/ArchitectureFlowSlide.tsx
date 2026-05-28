import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ArchitectureFlowSlideProps {
  data: {
    diagramSrc?: string;
    diagramAlt?: string;
    notes?: string[];
  };
}

const formatNoteText = (text: string) => {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|`(.+?)`/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(
        <strong key={key++} className="font-semibold text-foreground">
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      parts.push(
        <code key={key++} className="font-mono text-xs text-primary bg-primary/10 px-1 rounded">
          {match[2]}
        </code>
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

export const ArchitectureFlowSlide = ({ data }: ArchitectureFlowSlideProps) => {
  const diagramSrc = data.diagramSrc ?? "/architecture/deca-stream-architecture.png";

  return (
    <div className="space-y-5 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-glass border-primary/30 p-3 md:p-4"
      >
        <img
          src={diagramSrc}
          alt={data.diagramAlt ?? "DECAStream architecture flow: Liquidity Bot, EOA, protocol, Keeper, and DEX execution"}
          className="w-full h-auto rounded-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card-glass border-primary/20 py-4 px-5"
      >
        {data.notes && data.notes.length > 0 ? (
          <div className="space-y-3 text-sm text-muted-foreground">
            {data.notes.map((note) => (
              <p key={note}>{formatNoteText(note)}</p>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Add supporting notes below the diagram.
          </p>
        )}
      </motion.div>
    </div>
  );
};
