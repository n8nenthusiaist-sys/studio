'use client';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { getPersonalizedCta } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  companyDescription: z.string().min(20, {
    message: 'Please provide a description of at least 20 characters.',
  }),
});

export function PersonalizeCtaForm() {
  const [isPending, startTransition] = useTransition();
  const [personalizedCta, setPersonalizedCta] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      companyDescription: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setPersonalizedCta('');
    startTransition(async () => {
      const result = await getPersonalizedCta(data);
      if (result.success && result.data) {
        setPersonalizedCta(result.data.personalizedCallToAction);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error || 'Failed to generate personalized CTA.',
        });
      }
    });
  }

  return (
    <div className="space-y-4">
      <Card className="bg-background/10 border-accent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-xl text-white">
            <Sparkles className="text-accent" />
            <span>Try Our AI-Powered CTA Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Your Company Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., We are a B2B SaaS company that helps marketing teams optimize their ad spend..."
                        className="resize-none text-card-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate My Personalized CTA
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {(isPending || personalizedCta) && (
        <div className="mt-4 animate-in fade-in-0">
          <h3 className="font-semibold text-lg text-white">Your Personalized Call to Action:</h3>
          <div className="mt-2 rounded-lg border border-accent bg-background/10 p-4 text-white">
            {isPending ? <div className="h-5 w-3/4 animate-pulse rounded-md bg-white/20" /> : <p>{personalizedCta}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
