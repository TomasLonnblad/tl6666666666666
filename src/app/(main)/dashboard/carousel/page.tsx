"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
export default function CarouselDemo() { 

  const images=[
  "https://tomaslonnblad.github.io/2.jpg", "https://tomaslonnblad.github.io/3.jpg",
"https://tomaslonnblad.github.io/4.jpg",
"https://tomaslonnblad.github.io/5.jpg",]

  return (
   
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
      {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-3">
<img alt="sfsda" src={image}  width={300} height={200} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
)}