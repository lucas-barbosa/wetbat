import { MagnifyingGlass } from '@phosphor-icons/react';

export const SearchBar = () => (
  <form
    action="search"
    method="get"
    className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-gray-500 focus-within:outline focus-within:outline-accent-500"
  >
    <button type="submit" title="Search" className="bg-transparent text-lg hover:text-gray-400">
      <MagnifyingGlass weight="bold" />
    </button>

    <input type="search" name="q" className="bg-transparent text-base outline-none" />
  </form>
);