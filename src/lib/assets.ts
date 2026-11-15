import manifest from "@/data/assets.generated.json";

type Manifest = {
  profile: string | null;
  resume: string | null;
  logos: Record<string, string>;
  documents: Record<string, string>;
};

export const assets = manifest as Manifest;
