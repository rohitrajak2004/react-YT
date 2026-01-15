import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setResults,
  setResultsVideo,
  setLoading,
  setError,
  setActiveTab,
} from "../redux/features/searchSlice";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const tab = useSelector((state)=> (state.search.activeTab))

  useEffect(() => {
    dispatch(setQuery("hello"));
    dispatch(setLoading(true));
    const fetchInitialData = async () => {
      try {
        const results = await fetchPhotos("hello");
        dispatch(setResults(results)); // Store results in Redux
      } catch (error) {
        dispatch(setError(error.message));
      }
      try {
        const resultVideo = await fetchVideos("hello");
        dispatch(setResultsVideo(resultVideo));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    fetchInitialData();
  }, []);

  const videoHandler = () => {
    dispatch(setActiveTab("video"));
  };

  const photosHandler = () => {
    dispatch(setActiveTab("photo"));
  };

  const inputHandler = async (e) => {
    e.preventDefault();
    dispatch(setQuery(searchValue));
    dispatch(setLoading(true));

    try {
      const results = await fetchPhotos(searchValue);
      dispatch(setResults(results)); // Store results in Redux
    } catch (error) {
      dispatch(setError(error.message));
    }

    try {
      const resultsVideo = await fetchVideos(searchValue);
      dispatch(setResultsVideo(resultsVideo)); // Store video results in Redux
    } catch (error) {
      dispatch(setError(error.message));
    }

    setSearchValue("");
  };
  return (
    <div className="bg-[#aaa9a7] h-[15%]">
      <div className=" w-full p-10 flex">
        <form
          onSubmit={(e) => {
            inputHandler(e);
          }}
          className="w-full flex gap-8 items-center px-5"
        >
          <input
            required
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="placeholder-[#282427] text-[#282427] font-medium border-3 outline-0 rounded-2xl w-1/2 h-10 p-3 border-[#282427]"
            type="text"
            placeholder="Search Photos , Videos,  GIF"
          />
          <button className="bg-[#282427] font-bold text-[#aaa9a7] px-4 py-2 active:scale-95 rounded-2xl">
            Search
          </button>
        </form>
        <div className="flex gap-4">
          <button
            onClick={() => {
              photosHandler();
            }}
            className={`bg-[#282427] font-bold text-[#aaa9a7] px-4 py-2 active:scale-95 rounded-2xl ${tab === 'photo' ? "border-2 border-amber-300" : "border-none"}`}      
          >
            Photos
          </button>
          <button
            onClick={() => {
              videoHandler();

            }}
            className={`bg-[#282427] font-bold text-[#aaa9a7] px-4 py-2 active:scale-95 rounded-2xl ${tab === 'video' ? "border-2 border-amber-300" : "border-none"}`}
          >
            Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
