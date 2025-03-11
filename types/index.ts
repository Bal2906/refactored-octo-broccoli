import type React from "react"
export interface ServiceType {
  icon: React.ReactNode
  title: string
  description: string
}

export interface TestimonialType {
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export interface GalleryItemType {
  id: number
  category: string
  title: string
  description: string
  imageBefore: string
  imageAfter: string
}

