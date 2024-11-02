"use server";

import { MainPage } from "@/components/main-page";

export default async function Home() {
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    // <HomePage/>
    <MainPage />
    // </HydrationBoundary>
  );
}
