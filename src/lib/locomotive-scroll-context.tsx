// lib/locomotive-scroll-context.tsx
"use client";
import { createContext, useContext } from "react";
import type LocomotiveScroll from "locomotive-scroll";

export const LocomotiveScrollContext = createContext<LocomotiveScroll | null>(null);
export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);
