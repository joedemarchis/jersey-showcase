import heroCrest from "@/assets/hero-crest.jpg";
import jerseyBlackhawks from "@/assets/jersey-blackhawks.jpg";
import twillDetail from "@/assets/twill-detail.jpg";
import type { Jersey } from "../../../../types";

export const madhouseRed: Jersey = {
  id: "chi-63",
  name: "Madhouse Red",
  team: "Blackhawks",
  player: "Team Issued",
  type: "Home",
  season: "1963-64",
  inventory: "CHI-63-H",
  league: "NCAA",
  notes:
    "Chain-stitched crest with archival-grade twill stripes. A classic red home cut.",
  description:
    "A Blackhawks home record for the red jersey style, including the current display image and shared detail references. This keeps visual assets and descriptive copy together for easier catalog updates.",
  imageAlt: "Chicago Blackhawks red home jersey laid flat on a dark surface",
  images: [jerseyBlackhawks, twillDetail, heroCrest],
};
