import { PotentialRevenue } from './Sections/PotentialRevenue';
import { NewLeads } from './Sections/NewLeads';
import { TeamChat } from './Sections/TeamChat';
import { QuickQuote } from './Sections/QuickQuote';
import { CloseRatios } from './Sections/CloseRatios';
import { Revenue } from './Sections/Revenue';
import { Hero } from './Sections/Hero';
import { PendingQuotes } from './Sections/PendingQuotes';
import { PopularDestinations } from './Sections/PopularDestinations';

export const HomePage = () => (
  <main className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:ml-36 xl:grid-cols-[1.5fr_1.5fr_1.2fr]">
    <Hero className="sm:col-span-full" />

    <QuickQuote />

    <PendingQuotes />

    <NewLeads />

    <PopularDestinations className="max-xl:col-span-full xl:col-start-1 xl:col-end-3" />

    <TeamChat />

    <Revenue />

    <PotentialRevenue />

    <CloseRatios />
  </main>
);