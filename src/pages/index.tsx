import Header from "@/components/Header";
import Results from "@/components/Results";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="shrink-0 flex max-sm:flex-col justify-center w-full  ">
        <SearchBar />
        <Results />
      </div>
    </div>
  );
}
