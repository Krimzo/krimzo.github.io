import type { ImageMetadata } from 'astro'
import type { ScreenData, Screen, PolaroidVariant } from '~/types'

// Auto-import all images under the screens directory.
const screenModules = import.meta.glob<{ default: ImageMetadata }>('../assets/screens/**/*.{webp,jpg,jpeg,png}', { eager: true })

/**
 * Get a sorted list of screens by directory name.
 * @param dir - Directory name, for example '2025-06-21-cat'
 * @param alt - Image alt text
 * @param variants - Variant for each image, mapped by index
 */
function getScreens(dir: string, alt: string, variants: PolaroidVariant[]): Screen[] {
  return Object.entries(screenModules)
    .filter(([path]) => path.includes(`/${dir}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod], index) => {
      const img = mod.default
      return {
        src: img,
        alt,
        width: img.width,
        height: img.height,
        variant: variants[index] || '4x3',
      }
    })
}

export const ScreensList: ScreenData[] = [
]
