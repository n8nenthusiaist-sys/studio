'use server';

/**
 * @fileOverview A call to action text personalization AI agent.
 *
 * - personalizeCta - A function that handles the CTA text personalization process.
 * - PersonalizeCtaInput - The input type for the personalizeCta function.
 * - PersonalizeCtaOutput - The return type for the personalizeCta function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeCtaInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('A description of the user\u2019s company.'),
});
export type PersonalizeCtaInput = z.infer<typeof PersonalizeCtaInputSchema>;

const PersonalizeCtaOutputSchema = z.object({
  personalizedCallToAction: z.string().describe('A personalized call to action.'),
});
export type PersonalizeCtaOutput = z.infer<typeof PersonalizeCtaOutputSchema>;

export async function personalizeCta(input: PersonalizeCtaInput): Promise<PersonalizeCtaOutput> {
  return personalizeCtaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeCtaPrompt',
  input: {schema: PersonalizeCtaInputSchema},
  output: {schema: PersonalizeCtaOutputSchema},
  prompt: `You are an expert copywriter specializing in call to actions.

You will generate a personalized call to action for a landing page based on the company description provided.

Company Description: {{{companyDescription}}}

Call to Action:`,
});

const personalizeCtaFlow = ai.defineFlow(
  {
    name: 'personalizeCtaFlow',
    inputSchema: PersonalizeCtaInputSchema,
    outputSchema: PersonalizeCtaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
