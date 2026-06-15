import heroCrest from "@/assets/hero-crest.jpg";
import jerseyCanadiens from "@/assets/jersey-canadiens.jpg";
import twillDetail from "@/assets/twill-detail.jpg";
import type { Jersey } from "../../../../types";

export const centennialHeritage: Jersey = {
  id: "mtl-92",
  name: "Centennial Heritage",
  team: "Canadiens",
  player: "Team Issued",
  type: "Away",
  season: "1992-93",
  inventory: "MTL-92-A",
  league: "NCAA",
  notes:
    "The final championship cut. Heavy air-knit construction with felt commemorative patches.",
  description:
    "A Canadiens away archive record grouped with the front photo, macro textile detail, and crest reference. Add future sleeve, collar, tagging, or reverse photos inside this same style folder.",
  imageAlt: "Montreal Canadiens red away jersey laid flat on a dark surface",
  images: [jerseyCanadiens, twillDetail, heroCrest],
};
