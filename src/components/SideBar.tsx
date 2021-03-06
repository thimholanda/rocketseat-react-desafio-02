import { Button } from "./Button";

interface GenreProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({genres, selectedGenreId, handleClickButton}:GenreProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            selected={selectedGenreId === genre.id}
            onClick={() => handleClickButton(genre.id)}
          />
        ))}
      </div>

    </nav>
  )
}