"use client";

import {NextStudio} from "next-sanity/studio";
import type {Config} from "sanity";
import config from "@/lib/sanity.config";

export default function StudioApp() {
  return <NextStudio config={config as Config} />;
}