import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useGetSongBySearchQuery } from "../redux/services/shazamCore"
import { Loader, SongCard } from "../components"

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongBySearchQuery(searchTerm)

  const song = data?.tracks?.hits.map((song) => song.track)

  if (isFetching) return <Loader title={`Searching ${searchTerm}`} />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {song.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
