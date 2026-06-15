import heroCrest from "@/assets/hero-crest.jpg";
import jerseyNordiques from "@/assets/jersey-nordiques.jpg";
import twillDetail from "@/assets/twill-detail.jpg";
import type { Jersey } from "../../../../types";

export const fleurDeLisHeavy: Jersey = {
  id: "que-74",
  name: "Fleur-De-Lis Heavy",
  team: "Nordiques",
  player: "Team Issued",
  type: "Throwback",
  season: "1974-75",
  inventory: "QUE-74-T",
  league: "CHL",
  notes:
    "Quebec hockey artifact featuring the original hand-cut felt logo and wool blend sleeve stripes.",
  description:
    "A Nordiques throwback record for preserving the full jersey image, close-up material references, and description in one place. Additional photos for this exact style should be added to this folder's image list.",
  imageAlt: "Quebec Nordiques blue throwback jersey laid flat on a dark surface",
  images: [jerseyNordiques, twillDetail, heroCrest],
};
