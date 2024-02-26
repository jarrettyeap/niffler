import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges them according to Tailwind CSS precedence rules.
 * This function takes any number of arguments which can be a string, object, or array (as defined by ClassValue).
 * It's useful for dynamically generating className strings in React components, especially when using Tailwind CSS.
 *
 * @param {...ClassValue} inputs - A variable number of class name values (strings, objects, or arrays).
 * @returns {string} A single, merged class name string following Tailwind CSS rules.
 *
 * @example
 * // Basic usage
 * cn('p-4', 'text-center', { 'bg-red-500': isError }, ['hover:bg-blue-500', 'active:bg-green-500'])
 * // Returns: 'p-4 text-center bg-red-500 hover:bg-blue-500 active:bg-green-500' (assuming isError is true)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
