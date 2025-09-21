'use server';

import { personalizeCta, type PersonalizeCtaInput } from "@/ai/flows/personalize-cta";

export async function getPersonalizedCta(input: PersonalizeCtaInput) {
  try {
    const result = await personalizeCta(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("AI Action Error:", error);
    // In a real app, you might want to log this error to a monitoring service
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
