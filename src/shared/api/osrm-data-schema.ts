import { z } from "zod";

export const OSRMDataSchema = z.object({
  routes: z.array(
    z.object({
      legs: z.array(
        z.object({
          steps: z.array(
            z.object({
              geometry: z.object({
                coordinates: z.array(z.tuple([z.number(), z.number()])),
              }),
            })
          ),
        })
      ),
    })
  ),
});
